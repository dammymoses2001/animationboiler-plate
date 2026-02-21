import { type ReactNode, type CSSProperties } from 'react'
import { useGlowEffect } from './useGlowEffect'

export interface GlowCardWrapperProps {
  children: ReactNode
  color?: string
  className?: string
  style?: CSSProperties
  padding?: string
  borderRadius?: number
}

export function GlowCardWrapper({
  children,
  color = '#a78bfa',
  className = '',
  style,
  padding = 'p-8',
  borderRadius = 18,
}: GlowCardWrapperProps) {
  const { wrapRef, pos, hovered, handlers } = useGlowEffect()

  return (
    <div
      ref={wrapRef}
      {...handlers}
      className={`relative cursor-default p-[1px] transition-transform duration-300 ${
        hovered ? '-translate-y-1' : 'translate-y-0'
      } ${className}`}
      style={{
        borderRadius,
        background: 'rgba(255,255,255,0.08)',
        ...style,
      }}
    >
      {/* gradient border layer */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          borderRadius,
          background: hovered
            ? `radial-gradient(circle at ${pos.x}% ${pos.y}%, ${color} 0%, rgba(255,255,255,0.08) 55%)`
            : 'rgba(255,255,255,0.08)',
          transition: hovered ? 'none' : 'background 0.5s ease',
        }}
      />

      {/* soft outer bloom */}
      <div
        className="absolute -inset-[2px] pointer-events-none z-0 blur-[12px]"
        style={{
          borderRadius: borderRadius + 2,
          background: hovered
            ? `radial-gradient(circle at ${pos.x}% ${pos.y}%, ${color}55 0%, transparent 55%)`
            : 'transparent',
          transition: hovered ? 'none' : 'background 0.5s ease',
        }}
      />

      {/* actual card content */}
      <div
        className={`relative z-[1] ${padding} overflow-hidden`}
        style={{
          borderRadius: borderRadius - 1,
          background: '#111118',
        }}
      >
        {/* inner spotlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: hovered
              ? `radial-gradient(circle at ${pos.x}% ${pos.y}%, ${color}15 0%, transparent 65%)`
              : 'transparent',
            transition: hovered ? 'none' : 'background 0.5s ease',
          }}
        />

        {/* Your content goes here */}
        <div className="relative">{children}</div>
      </div>
    </div>
  )
}
