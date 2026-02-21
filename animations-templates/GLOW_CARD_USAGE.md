# GlowCardWrapper Usage

The `GlowCardWrapper` component is a fully reusable wrapper that adds a directional glow effect to any content. The glow logic is extracted into a custom hook (`useGlowEffect`) for maximum flexibility.

## Basic Usage

```tsx
import { GlowCardWrapper } from './components/GlowCard'

function MyComponent() {
  return (
    <GlowCardWrapper color="#a78bfa">
      <h2>Your Custom Content</h2>
      <p>Any content you want with the glow effect!</p>
    </GlowCardWrapper>
  )
}
```

## Props

- `children`: ReactNode (required) - Your custom content
- `color`: string (optional) - Hex color for the glow effect (default: '#a78bfa')
- `className`: string (optional) - Additional CSS classes
- `style`: CSSProperties (optional) - Additional inline styles
- `padding`: string (optional) - Tailwind padding class (default: 'p-8')
- `borderRadius`: number (optional) - Border radius in pixels (default: 18)

## Examples

### Simple Card
```tsx
<GlowCardWrapper color="#22d3ee">
  <h3 style={{ color: 'white' }}>Hello World</h3>
  <p style={{ color: 'rgba(255,255,255,0.6)' }}>This is a glowing card!</p>
</GlowCardWrapper>
```

### Custom Content
```tsx
<GlowCardWrapper color="#fb7185" padding="p-6" borderRadius={24}>
  <img src="/avatar.png" alt="Avatar" />
  <h4>John Doe</h4>
  <p>Software Engineer</p>
  <button>Contact</button>
</GlowCardWrapper>
```

### Compact Card
```tsx
<GlowCardWrapper color="#22d3ee" padding="p-4" borderRadius={12}>
  <p className="text-sm">Compact content</p>
</GlowCardWrapper>
```

### Multiple Cards
```tsx
const colors = ['#a78bfa', '#22d3ee', '#fb7185']

<div style={{ display: 'flex', gap: '2rem' }}>
  {colors.map((color, i) => (
    <GlowCardWrapper key={i} color={color}>
      <div>Card {i + 1}</div>
    </GlowCardWrapper>
  ))}
</div>
```

## Features

- Directional glow that follows your cursor
- Smooth hover animations (lifts up on hover)
- Outer bloom effect for extra depth
- Inner spotlight effect
- Fully customizable with any content
- Configurable padding and border radius
- Extracted hook (`useGlowEffect`) for custom implementations
- TypeScript support

## Using the Hook Directly

If you need more control, you can use the `useGlowEffect` hook directly:

```tsx
import { useGlowEffect } from './hooks/useGlowEffect'

function CustomGlowComponent() {
  const { wrapRef, pos, hovered, handlers } = useGlowEffect()
  
  return (
    <div ref={wrapRef} {...handlers}>
      {/* Your custom implementation using pos and hovered */}
    </div>
  )
}
```
