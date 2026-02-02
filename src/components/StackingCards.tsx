import type { ReactNode } from 'react'
import { useStackingCards } from '../hooks/useStackingCards'

interface StackingCardsProps {
  children: (index: number) => ReactNode
  itemCount: number
  /** Vertical offset in px per card (default: 20) */
  offsetPerCard?: number
  /** Scale reduction per card (default: 0.05) */
  scalePerCard?: number
  /** Extra class for the sticky wrapper (default: h-screen flex items-center justify-center px-4) */
  cardWrapperClassName?: string
}

export default function StackingCards({
  children,
  itemCount,
  offsetPerCard = 20,
  scalePerCard = 0.05,
  cardWrapperClassName = 'h-screen flex items-center justify-center px-4',
}: StackingCardsProps) {
  const { getCardWrapperStyle, getCardInnerStyle } = useStackingCards({
    offsetPerCard,
    scalePerCard,
  })

  return (
    <div className="relative">
      {Array.from({ length: itemCount }, (_, index) => (
        <div
          key={index}
          className={`sticky ${cardWrapperClassName}`}
          style={getCardWrapperStyle(index)}
        >
          <div
            className="w-full max-w-2xl transition-transform duration-300"
            style={getCardInnerStyle(index)}
          >
            {children(index)}
          </div>
        </div>
      ))}
    </div>
  )
}
