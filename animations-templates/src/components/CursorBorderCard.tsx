import type { ReactNode } from 'react'
import { useCursorBorder } from '../hooks/useCursorBorder'

interface CursorBorderCardProps {
  children: ReactNode
  /** Optional class for the outer container */
  className?: string
  /** Optional class for the inner card */
  cardClassName?: string
  /** Border radius in px (default: 16) */
  borderRadius?: number
  /** Glow color at center (default: rgba(0, 255, 136, 0.8)) */
  glowColor?: string
  /** Glow color at 25% (default: rgba(0, 255, 136, 0.4)) */
  glowColorMid?: string
  /** Size of the glow circle in px (default: 200) */
  glowSize?: number
}

const DEFAULT_GLOW = 'rgba(0, 255, 136, 0.8)'
const DEFAULT_GLOW_MID = 'rgba(0, 255, 136, 0.4)'

export default function CursorBorderCard({
  children,
  className = '',
  cardClassName = '',
  borderRadius = 16,
  glowColor = DEFAULT_GLOW,
  glowColorMid = DEFAULT_GLOW_MID,
  glowSize = 200,
}: CursorBorderCardProps) {
  const { containerRef, isActive } = useCursorBorder({ glowSize })

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ borderRadius: `${borderRadius}px` }}
    >
      {/* Glow border layer */}
      <div
        className="pointer-events-none overflow-hidden transition-opacity duration-300 ease-out"
        style={{
          position: 'absolute',
          top: -2,
          left: -2,
          right: -2,
          bottom: -2,
          borderRadius: `${borderRadius}px`,
          opacity: isActive ? 1 : 0,
        }}
      >
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: 'var(--cursor-border-glow-size, 200px)',
            height: 'var(--cursor-border-glow-size, 200px)',
            left: 'var(--cursor-border-x, 0px)',
            top: 'var(--cursor-border-y, 0px)',
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(
              circle,
              ${glowColor} 0%,
              ${glowColorMid} 25%,
              transparent 50%
            )`,
          }}
        />
      </div>

      {/* Card content */}
      <div
        className={`relative z-1 ${cardClassName}`}
        style={{
          borderRadius: `${borderRadius - 2}px`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
