interface UseStackingCardsOptions {
  /** Vertical offset in px per card (default: 20) */
  offsetPerCard?: number
  /** Scale reduction per card, e.g. 0.05 = 5% smaller each (default: 0.05) */
  scalePerCard?: number
}

interface CardWrapperStyle {
  top: string
  zIndex: number
}

interface CardInnerStyle {
  transform: string
}

export function useStackingCards(options: UseStackingCardsOptions = {}) {
  const {
    offsetPerCard = 20,
    scalePerCard = 0.05,
  } = options

  function getCardWrapperStyle(index: number): CardWrapperStyle {
    return {
      top: `${index * offsetPerCard}px`,
      zIndex: index,
    }
  }

  function getCardInnerStyle(index: number): CardInnerStyle {
    return {
      transform: `scale(${1 - index * scalePerCard})`,
    }
  }

  return { getCardWrapperStyle, getCardInnerStyle }
}
