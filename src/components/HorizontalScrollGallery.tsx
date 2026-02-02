import type { ReactNode } from 'react'
import { useHorizontalScroll } from '../hooks/useHorizontalScroll'

interface HorizontalScrollGalleryProps {
  children: (activeIndex: number, scrollProgress: number) => ReactNode
  itemCount: number
  containerHeight?: string // Height of the scroll container (default: '300vh')
  showProgress?: boolean // Show progress indicator (default: true)
  itemWidth?: number
  gap?: number
}

export default function HorizontalScrollGallery({
  children,
  itemCount,
  containerHeight = '300vh',
  showProgress = true,
  itemWidth,
  gap,
}: HorizontalScrollGalleryProps) {
  const { horizontalRef, containerRef, scrollProgress, activeIndex } =
    useHorizontalScroll({
      itemCount,
      itemWidth,
      gap,
    })

  return (
    <>
      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        style={{
          height: containerHeight,
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

        {/* Progress Indicator */}
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
