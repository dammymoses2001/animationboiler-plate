import { useRef, useEffect, useState } from 'react'

interface UseHorizontalScrollOptions {
  itemCount: number
  itemWidth?: number // Width of each item (default: 80vw + gap)
  gap?: number // Gap between items (default: 32px)
}

interface UseHorizontalScrollReturn {
  horizontalRef: React.RefObject<HTMLDivElement|null>
  containerRef: React.RefObject<HTMLDivElement|null>
  scrollProgress: number
  activeIndex: number
}

export function useHorizontalScroll({
  itemCount,
  itemWidth,
  gap = 32,
}: UseHorizontalScrollOptions): UseHorizontalScrollReturn {
  const horizontalRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!horizontalRef.current || !containerRef.current) return

      const container = containerRef.current
      const horizontal = horizontalRef.current
      const containerRect = container.getBoundingClientRect()
      const containerTop = containerRect.top
      const containerHeight = containerRect.height
      const viewportHeight = window.innerHeight

      // Check if we're in the horizontal scroll section
      if (containerTop <= 0 && containerTop > -containerHeight + viewportHeight) {
        // Calculate scroll progress (0 to 1)
        const progress = Math.abs(containerTop) / (containerHeight - viewportHeight)
        setScrollProgress(Math.min(Math.max(progress, 0), 1))

        // Calculate horizontal scroll
        const maxScroll = horizontal.scrollWidth - horizontal.clientWidth
        const scrollAmount = progress * maxScroll
        horizontal.scrollLeft = scrollAmount

        // Calculate which item is currently most visible
        const calculatedItemWidth = itemWidth || horizontal.clientWidth * 0.8 + gap
        const currentIndex = Math.floor(scrollAmount / calculatedItemWidth)
        setActiveIndex(Math.min(currentIndex, itemCount - 1))
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [itemCount, itemWidth, gap])

  return {
    horizontalRef,
    containerRef,
    scrollProgress,
    activeIndex,
  }
}
