import { useCircularHoverReveal } from '../hooks/useCircularHoverReveal'

interface CircularHoverRevealProps {
  /** Base image URL (shown when not hovering) */
  baseImage: string
  /** Reveal image URL (revealed on hover) */
  revealImage: string
  /** Radius of the reveal circle in pixels (default: 100) */
  circleRadius?: number
  /** Container width (default: '800px') */
  width?: string
  /** Container height (default: '600px') */
  height?: string
  /** Show custom cursor circle (default: true) */
  showCursorCircle?: boolean
  /** Custom instruction text (default: 'Hover to reveal') */
  instructionText?: string
  /** Additional className for container */
  className?: string
}

export default function CircularHoverReveal({
  baseImage,
  revealImage,
  circleRadius = 100,
  width = '800px',
  height = '600px',
  showCursorCircle = true,
  instructionText = 'Hover to reveal',
  className = '',
}: CircularHoverRevealProps) {
  const {
    containerRef,
    mousePosition,
    isHovering,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    circleRadius: radius,
  } = useCircularHoverReveal({ circleRadius })

  return (
    <div
      ref={containerRef}
      className={`relative cursor-none shadow-[0_25px_80px_rgba(0,0,0,0.4)] rounded-xl overflow-hidden ${className}`}
      style={{ width, height }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base Image Layer */}
      <div
        className="absolute w-full h-full bg-cover bg-center bg-no-repeat z-1"
        style={{ backgroundImage: `url(${baseImage})` }}
      />

      {/* Reveal Image Layer with Circular Clip */}
      <div
        className="absolute w-full h-full z-2"
        style={{
          clipPath: isHovering
            ? `circle(${radius}px at ${mousePosition.x}px ${mousePosition.y}px)`
            : 'circle(0px at 50% 50%)',
          transition: isHovering ? 'none' : 'clip-path 0.2s ease-out',
          willChange: 'clip-path',
        }}
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${revealImage})` }}
        />
      </div>

      {/* Custom Cursor Circle with Wave Animation */}
      {showCursorCircle && (
        <>
          {/* Main Circle */}
          <div
            className="absolute border-[3px] border-white/90 rounded-full pointer-events-none transition-opacity duration-300 ease-out z-10 shadow-[0_0_30px_rgba(255,255,255,0.4),inset_0_0_30px_rgba(255,255,255,0.2)]"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
              transform: 'translate(-50%, -50%)',
              opacity: isHovering ? 1 : 0,
            }}
          />
          {/* Wave Circle 1 */}
          <div
            className="absolute border-2 border-white/60 rounded-full pointer-events-none z-10 animate-pulse"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
              transform: 'translate(-50%, -50%)',
              opacity: isHovering ? 0.6 : 0,
              animation: isHovering
                ? 'wave 2s ease-out infinite'
                : 'none',
            }}
          />
          {/* Wave Circle 2 */}
          <div
            className="absolute border-2 border-white/40 rounded-full pointer-events-none z-10"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
              transform: 'translate(-50%, -50%)',
              opacity: isHovering ? 0.4 : 0,
              animation: isHovering
                ? 'wave 2s ease-out infinite 0.5s'
                : 'none',
            }}
          />
          {/* Wave Circle 3 */}
          <div
            className="absolute border-2 border-white/20 rounded-full pointer-events-none z-10"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
              transform: 'translate(-50%, -50%)',
              opacity: isHovering ? 0.2 : 0,
              animation: isHovering
                ? 'wave 2s ease-out infinite 1s'
                : 'none',
            }}
          />
          {/* CSS Animation */}
          <style>{`
            @keyframes wave {
              0% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 0.6;
              }
              50% {
                transform: translate(-50%, -50%) scale(1.3);
                opacity: 0.3;
              }
              100% {
                transform: translate(-50%, -50%) scale(1.6);
                opacity: 0;
              }
            }
          `}</style>
        </>
      )}

      {/* Instructions */}
      {instructionText && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-base font-medium text-center bg-black/70 px-6 py-3 rounded-full backdrop-blur-md z-5">
          {instructionText}
        </div>
      )}
    </div>
  )
}
