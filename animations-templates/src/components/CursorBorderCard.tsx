import type { ReactNode } from 'react'
import { useCursorBorder } from '../hooks/useCursorBorder'

interface CursorBorderCardProps {
  children: ReactNode
  /** Optional class for the outer container */
  className?: string
  /** Optional class for the inner card */
  cardClassName?: string
  /** Border radius in px (default: 16) */
  borderRadius?: number
  /** Primary glow color (default: rgba(0, 255, 136, 0.9)) */
  glowColor?: string
  /** Faded tail color (default: rgba(0, 255, 136, 0.2)) */
  glowColorTail?: string
  /** Size of the glow circle in px — kept for hook compat (default: 200) */
  glowSize?: number
  /**
   * How many degrees of the card border are lit up.
   * - Small value (e.g. 30)  → short spark / dash
   * - Medium value (e.g. 90) → quarter-circle arc
   * - Large value (e.g. 200) → long sweeping trail
   * (default: 90)
   */
  arcDegrees?: number
  /** Thickness of the glowing border ring in px (default: 2) */
  borderWidth?: number
}

const DEFAULT_GLOW = 'rgba(0, 255, 136, 0.9)'
const DEFAULT_TAIL = 'rgba(0, 255, 136, 0.15)'

export default function CursorBorderCard({
  children,
  className = '',
  cardClassName = '',
  borderRadius = 16,
  glowColor = DEFAULT_GLOW,
  glowColorTail = DEFAULT_TAIL,
  glowSize = 200,
  arcDegrees = 90,
  borderWidth = 2,
}: CursorBorderCardProps) {
  const { containerRef, isActive } = useCursorBorder({ glowSize })

  // The conic-gradient is centered on the card and rotated to face the cursor
  // via the CSS variable --cursor-border-angle (written by the hook).
  //
  // We want the arc to be centered on the cursor angle, so we start the
  // gradient at (angle - arcDegrees/2) and end at (angle + arcDegrees/2).
  //
  // CSS conic-gradient doesn't support calc() with custom properties for
  // the angle stops, so we use a layered approach:
  //   1. A <div> that is the "border ring" (position absolute, overflow hidden,
  //      with a punch-out mask for the inner area)
  //   2. Inside it, a full-size conic-gradient div that rotates via
  //      `transform: rotate(var(--cursor-border-angle))` so the hot spot
  //      always points at the cursor.
  //
  // The conic-gradient itself is fixed: hot spot at 0deg (top of the sweep),
  // fading over arcDegrees, then transparent for the rest of the circle.

  const halfArc = arcDegrees / 2

  // Conic stops — hot spot centered at 0deg (top), we'll rotate the div.
  // We add a small soft lead-in before the hot tip for a natural look.
  const conicGradient = `conic-gradient(
    from ${-halfArc}deg,
    transparent                         0deg,
    ${glowColorTail}                    ${halfArc * 0.3}deg,
    ${glowColor}                        ${halfArc}deg,
    ${glowColorTail}                    ${halfArc + halfArc * 0.7}deg,
    transparent                         ${arcDegrees}deg,
    transparent                         360deg
  )`

  // Inner mask: punch out the card interior so only the border ring is visible.
  // We inset by (borderWidth + 1px) on each side to leave just the ring.
  const inset = borderWidth + 1
  const innerRadius = Math.max(0, borderRadius - inset)
  const maskStyle = {
    WebkitMaskImage: `radial-gradient(
      ellipse calc(100% - ${inset * 2}px) calc(100% - ${inset * 2}px) at 50% 50%,
      transparent 99.5%,
      black 100%
    )`,
    maskImage: `radial-gradient(
      ellipse calc(100% - ${inset * 2}px) calc(100% - ${inset * 2}px) at 50% 50%,
      transparent 99.5%,
      black 100%
    )`,
  } as React.CSSProperties

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ borderRadius: `${borderRadius}px` }}
    >
      {/* Border ring layer */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-300 ease-out"
        style={{
          borderRadius: `${borderRadius}px`,
          opacity: isActive ? 1 : 0,
          ...maskStyle,
        }}
      >
        {/*
          This div fills the entire card area and holds the conic-gradient.
          It rotates so the gradient's hot spot (at 0deg / top) always points
          toward the cursor. The rotation value comes from the CSS var written
          by the hook.
        */}
        <div
          className="absolute inset-0"
          style={{
            background: conicGradient,
            transform: 'rotate(var(--cursor-border-angle, 0deg))',
            transformOrigin: '50% 50%',
            borderRadius: `${borderRadius}px`,
          }}
        />
      </div>

      {/* Card content */}
      <div
        className={`relative z-[1] ${cardClassName}`}
        style={{ borderRadius: `${innerRadius}px` }}
      >
        {children}
      </div>
    </div>
  )
}