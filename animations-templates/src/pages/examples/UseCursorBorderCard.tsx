import { Link } from 'react-router-dom'
import CursorBorderCard from '../../components/CursorBorderCard'

export default function UseCursorBorderCard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-6">
      <Link
        to="/"
        className="absolute top-6 left-6 text-white/90 hover:text-white px-4 py-2 rounded-lg bg-white/10 transition-colors z-10"
      >
        ← Back to Home
      </Link>

      <CursorBorderCard
      glowColor='red'
      glowColorMid='blue'
      glowSize={1000}
        className="w-[1000px]"
        cardClassName="w-full cursor-pointer p-10 bg-white/95 rounded-[14px] shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Hover Me!</h2>
        <p className="text-base text-gray-600 leading-relaxed mb-6">
          Move your cursor around this card to see the glowing border follow
          your movement along the edges.
        </p>
        <button
          type="button"
          className="px-7 py-3 bg-linear-to-br from-indigo-600 to-purple-700 text-white rounded-lg font-semibold text-base transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/40 active:translate-y-0"
        >
          Click Me
        </button>
      </CursorBorderCard>
    </div>
  )
}
