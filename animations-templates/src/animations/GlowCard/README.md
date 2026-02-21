# GlowCard Animation

A reusable directional glow effect that follows your cursor. Perfect for cards, buttons, or any interactive element.

## Quick Start

```tsx
import { GlowCardWrapper } from '@/animations/GlowCard'

function MyComponent() {
  return (
    <GlowCardWrapper color="#a78bfa">
      <h2>Your Content</h2>
      <p>Any content with glow effect!</p>
    </GlowCardWrapper>
  )
}
```

## Components

### GlowCardWrapper

Main wrapper component that adds the glow effect to any children.

**Props:**
- `children`: ReactNode (required) - Content to wrap
- `color`: string (optional, default: '#a78bfa') - Glow color in hex
- `className`: string (optional) - Additional CSS classes
- `style`: CSSProperties (optional) - Additional inline styles
- `padding`: string (optional, default: 'p-8') - Tailwind padding class
- `borderRadius`: number (optional, default: 18) - Border radius in pixels

**Example:**
```tsx
<GlowCardWrapper 
  color="#22d3ee" 
  padding="p-6" 
  borderRadius={24}
  className="max-w-md"
>
  <div>Custom content</div>
</GlowCardWrapper>
```

## Hooks

### useGlowEffect

Custom hook that provides the glow effect logic. Use this if you need full control over the implementation.

**Returns:**
- `wrapRef`: Ref to attach to your wrapper element
- `pos`: Current cursor position `{ x: number, y: number }` (percentage)
- `hovered`: Boolean indicating hover state
- `handlers`: Event handlers object `{ onMouseMove, onMouseEnter, onMouseLeave }`

**Example:**
```tsx
import { useGlowEffect } from '@/animations/GlowCard'

function CustomGlow() {
  const { wrapRef, pos, hovered, handlers } = useGlowEffect()
  
  return (
    <div ref={wrapRef} {...handlers}>
      <div style={{
        background: hovered 
          ? `radial-gradient(circle at ${pos.x}% ${pos.y}%, #a78bfa 0%, transparent 50%)`
          : 'transparent'
      }}>
        Custom implementation
      </div>
    </div>
  )
}
```

## Features

- ✨ Directional glow that follows cursor
- 🎨 Customizable colors
- 📏 Adjustable padding and border radius
- 🎯 Smooth hover animations
- 💫 Multiple glow layers (border, bloom, spotlight)
- 🔧 Fully typed with TypeScript
- 🎨 Tailwind CSS compatible

## Examples

### Simple Card
```tsx
<GlowCardWrapper color="#a78bfa">
  <h3 className="text-white text-xl">Title</h3>
  <p className="text-white/60">Description</p>
</GlowCardWrapper>
```

### Compact Button
```tsx
<GlowCardWrapper color="#fb7185" padding="p-4" borderRadius={12}>
  <button className="text-white">Click me</button>
</GlowCardWrapper>
```

### Multiple Cards
```tsx
const colors = ['#a78bfa', '#22d3ee', '#fb7185']

<div className="flex gap-4">
  {colors.map((color, i) => (
    <GlowCardWrapper key={i} color={color}>
      <div>Card {i + 1}</div>
    </GlowCardWrapper>
  ))}
</div>
```

## How It Works

The glow effect consists of three layers:
1. **Border Gradient**: Radial gradient that creates the glowing border
2. **Outer Bloom**: Blurred layer outside the card for depth
3. **Inner Spotlight**: Subtle gradient inside the card content

All layers follow the cursor position and animate smoothly on hover.
