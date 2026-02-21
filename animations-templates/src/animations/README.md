# Animations

Reusable animation components and hooks for your React application.

## Available Animations

### GlowCard
Directional glow effect that follows cursor movement. Perfect for interactive cards and buttons.

[View Documentation](./GlowCard/README.md)

```tsx
import { GlowCardWrapper } from '@/animations/GlowCard'

<GlowCardWrapper color="#a78bfa">
  <YourContent />
</GlowCardWrapper>
```

## Usage

Each animation is self-contained in its own folder with:
- Component files
- Custom hooks
- TypeScript types
- Documentation
- Examples

Import animations directly from their folder:

```tsx
// Import the wrapper component
import { GlowCardWrapper } from '@/animations/GlowCard'

// Or import the hook for custom implementations
import { useGlowEffect } from '@/animations/GlowCard'
```

## Structure

```
animations/
├── GlowCard/
│   ├── GlowCardWrapper.tsx    # Main component
│   ├── useGlowEffect.ts       # Custom hook
│   ├── index.ts               # Exports
│   └── README.md              # Documentation
└── README.md                  # This file
```

## Adding New Animations

1. Create a new folder in `animations/`
2. Add your component and hook files
3. Create an `index.ts` for exports
4. Add documentation in `README.md`
5. Update this file with the new animation
