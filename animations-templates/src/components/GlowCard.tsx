import { type ReactNode } from 'react'
import { GlowCardWrapper } from '../animations/GlowCard'

export interface CardData {
  label: string
  title: string
  body: string
  stat: string
  unit: string
  icon: ReactNode
  color: string
}

interface GlowCardProps {
  card: CardData
}

// Re-export for convenience
export { GlowCardWrapper } from '../animations/GlowCard'
export type { GlowCardWrapperProps } from '../animations/GlowCard'

// Original component for backward compatibility
export default function GlowCard({ card }: GlowCardProps) {
  return (
    <GlowCardWrapper color={card.color}>
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-6"
        style={{
          background: `${card.color}18`,
          color: card.color,
        }}
      >
        {card.icon}
      </div>

      <p className="text-[0.6rem] tracking-[0.2em] uppercase text-white/30 mb-2 font-mono">
        {card.label}
      </p>

      <h2
        className="text-2xl font-semibold text-white/90 leading-tight mb-3"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        {card.title}
      </h2>

      <p className="text-[0.78rem] leading-relaxed text-white/35 mb-6 font-mono">
        {card.body}
      </p>

      <div className="flex items-baseline gap-2">
        <span
          className="text-[2rem] font-light text-white/90"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          {card.stat}
        </span>
        <span className="text-[0.68rem] text-white/30 tracking-wider font-mono">
          {card.unit}
        </span>
      </div>
    </GlowCardWrapper>
  )
}
