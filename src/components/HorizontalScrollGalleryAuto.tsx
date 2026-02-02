import type { ReactNode } from 'react'
import { useState, useEffect, useCallback } from 'react'
import { useHorizontalScroll } from '../hooks/useHorizontalScroll'

interface HorizontalScrollGalleryAutoProps {
  children: (activeIndex: number, scrollProgress: number) => ReactNode
  itemCount: number
  showProgress?: boolean
  itemWidth?: number
  gap?: number
  /** Vertical scroll per 1px of horizontal scroll (default 1). Higher = more vertical scrolling needed. */
  scrollRatio?: number
}

export default function HorizontalScrollGalleryAuto({
  children,
  itemCount,
  showProgress = true,
  itemWidth,
  gap,
  scrollRatio = 1,
}: HorizontalScrollGalleryAutoProps) {
  const [containerHeightPx, setContainerHeightPx] = useState<number | null>(null)

  const { horizontalRef, containerRef, scrollProgress, activeIndex } =
    useHorizontalScroll({
      itemCount,
      itemWidth,
      gap,
    })

  const measureAndSetHeight = useCallback(() => {
    if (!horizontalRef.current) return
    const horizontal = horizontalRef.current
    const maxScroll = Math.max(0, horizontal.scrollWidth - horizontal.clientWidth)
    const viewportHeight = window.innerHeight
    // Full vertical scroll through container = full horizontal scroll; fallback to 1 viewport per item if no overflow yet
    const height =
      maxScroll > 0
        ? viewportHeight + maxScroll * scrollRatio
        : viewportHeight * (itemCount + 1)
    setContainerHeightPx(height)
  }, [horizontalRef, scrollRatio, itemCount])

  useEffect(() => {
    // Measure after layout so scrollWidth is correct
    const id = requestAnimationFrame(() => {
      measureAndSetHeight()
    })
    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(measureAndSetHeight)
    })
    const el = horizontalRef.current
    if (el) resizeObserver.observe(el)
    window.addEventListener('resize', measureAndSetHeight)
    return () => {
      cancelAnimationFrame(id)
      resizeObserver.disconnect()
      window.removeEventListener('resize', measureAndSetHeight)
    }
  }, [measureAndSetHeight, itemCount])

  return (
    <>
      <div
        ref={containerRef}
        style={{
          height: containerHeightPx != null ? `${containerHeightPx}px` : '100vh',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            ref={horizontalRef}
            style={{
              display: 'flex',
              gap: '2rem',
              padding: '0 2rem',
              overflow: 'hidden',
              width: '100%',
            }}
          >
            {children(activeIndex, scrollProgress)}
          </div>
        </div>

        {showProgress && (
          <div
            style={{
              position: 'fixed',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              padding: '0.5rem 1.5rem',
              borderRadius: '50px',
              fontSize: '0.9rem',
              zIndex: 100,
            }}
          >
            {Math.round(scrollProgress * 100)}% scrolled
          </div>
        )}
      </div>
    </>
  )
}
