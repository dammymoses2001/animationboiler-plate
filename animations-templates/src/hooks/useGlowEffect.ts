import { useRef, useState } from 'react'

export function useGlowEffect() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    const r = wrapRef.current?.getBoundingClientRect()
    if (!r) return
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    })
  }

  const handlers = {
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  }

  return { wrapRef, pos, hovered, handlers }
}
