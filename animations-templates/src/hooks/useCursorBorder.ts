import { useRef, useEffect, useState } from 'react'

interface UseCursorBorderOptions {
  /** Size of the glow circle in px (default: 200) */
  glowSize?: number
}

export function useCursorBorder(options: UseCursorBorderOptions = {}) {
  const { glowSize = 200 } = options
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      el.style.setProperty('--cursor-border-x', `${x}px`)
      el.style.setProperty('--cursor-border-y', `${y}px`)
      el.style.setProperty('--cursor-border-glow-size', `${glowSize}px`)
    }

    const onEnter = () => setIsActive(true)
    const onLeave = () => setIsActive(false)

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)

    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [glowSize])

  return { containerRef, isActive }
}
