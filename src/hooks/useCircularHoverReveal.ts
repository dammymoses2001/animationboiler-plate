import { useRef, useState, useCallback } from 'react'

interface UseCircularHoverRevealOptions {
  /** Radius of the reveal circle in pixels (default: 100) */
  circleRadius?: number
}

interface UseCircularHoverRevealReturn {
  containerRef: React.RefObject<HTMLDivElement | null>
  mousePosition: { x: number; y: number }
  isHovering: boolean
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void
  handleMouseEnter: () => void
  handleMouseLeave: () => void
  circleRadius: number
}

export function useCircularHoverReveal(
  options: UseCircularHoverRevealOptions = {}
): UseCircularHoverRevealReturn {
  const { circleRadius: radius = 100 } = options
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePosition({ x, y })
    }
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
  }, [])

  return {
    containerRef,
    mousePosition,
    isHovering,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    circleRadius: radius,
  }
}
