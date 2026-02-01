import { Link } from 'react-router-dom'
import StackingCards from '../../components/StackingCards'

export default function UseStackingCards() {
  const cards = [
    {
      id: 1,
      title: 'Card One',
      bg: 'bg-purple-500',
      content: 'First card in the stack',
    },
    {
      id: 2,
      title: 'Card Two',
      bg: 'bg-blue-500',
      content: 'Second card in the stack',
    },
    {
      id: 3,
      title: 'Card Three',
      bg: 'bg-green-500',
      content: 'Third card in the stack',
    },
    {
      id: 4,
      title: 'Card Four',
      bg: 'bg-orange-500',
      content: 'Fourth card in the stack',
    },
    {
      id: 5,
      title: 'Card Five',
      bg: 'bg-red-500',
      content: 'Fifth and final card',
    },
  ]

  return (
    <div className="bg-gray-900">
      {/* Header section */}
      <div className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="text-center text-white">
          <Link
            to="/"
            className="absolute top-6 left-6 text-white/90 hover:text-white px-4 py-2 rounded-lg bg-white/10 transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-6xl font-bold mb-4">Stacking Cards</h1>
          <p className="text-xl text-gray-300">Scroll down to see the magic</p>
          <div className="mt-8 animate-bounce">
            <svg
              className="w-8 h-8 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Stacking cards section */}
      <StackingCards itemCount={cards.length} scalePerCard={0}>
        {(index) => {
          const card = cards[index]
          return (
            <div
              className={`${card.bg} rounded-2xl shadow-2xl overflow-hidden w-full`}
            >
              <div className="rounded-xl p-8">
                <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
                  {card.title}
                </h2>
                <p className="text-white text-lg mb-6 drop-shadow-md">{card.content}</p>
                <div className="h-64 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white text-6xl font-bold opacity-50">
                    {card.id}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white text-opacity-80">
                    Card {card.id} of {cards.length}
                  </span>
                  <div className="flex gap-2">
                    {cards.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i === index ? 'bg-white' : 'bg-white bg-opacity-40'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </StackingCards>

      {/* Footer section */}
      <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="text-5xl font-bold mb-4">All Cards Stacked!</h2>
          <p className="text-xl text-gray-300 mb-8">
            Now you can continue scrolling normally
          </p>
          <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl p-8">
            <p className="text-gray-300 leading-relaxed">
              This is the content that appears after all cards have been stacked.
              You can add any additional content here, and it will scroll normally
              like a regular webpage.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
