import { Link } from 'react-router-dom'

const animationHooks = [
  {
    id: 'useHorizontalScroll',
    name: 'useHorizontalScroll',
    description: 'Horizontal scroll gallery (manual container height)',
    path: '/useHorizontalScroll'
  },
  {
    id: 'useHorizontalScrollAuto',
    name: 'useHorizontalScroll (auto height)',
    description: 'Horizontal scroll gallery — height calculated from items',
    path: '/useHorizontalScrollAuto'
  },
  {
    id: 'useStackingCards',
    name: 'useStackingCards',
    description: 'Sticky stacking cards on scroll',
    path: '/useStackingCards'
  },
  {
    id: 'useCursorBorder',
    name: 'useCursorBorder',
    description: 'Cursor-following glowing border card',
    path: '/useCursorBorder'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Animation Hooks Collection
        </h1>
        <p className="text-xl text-gray-400 text-center mb-12">
          Explore our collection of React animation hooks
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animationHooks.map((hook) => (
            <Link
              key={hook.id}
              to={hook.path}
              className="block p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105"
            >
              <h2 className="text-2xl font-semibold mb-2 text-purple-400">
                {hook.name}
              </h2>
              <p className="text-gray-400">{hook.description}</p>
              <div className="mt-4 text-sm text-purple-300">
                View Example →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
