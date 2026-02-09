import { Link } from 'react-router-dom'
import CircularHoverReveal from '../../components/CircularHoverReveal'

export default function UseCircularHoverReveal() {
  // Using both images from public folder
  const baseImage = '/prosperous-businessman-keeps-hands-crossed-has-satisfied-expression.webp'
  const revealImage = '/young-african-american-man-wearing-white-shirt.webp'

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-indigo-600 to-purple-700 p-6 py-10">
      <Link
        to="/"
        className="absolute top-6 left-6 text-white/90 hover:text-white px-4 py-2 rounded-lg bg-white/10 transition-colors z-10"
      >
        ← Back to Home
      </Link>

      <CircularHoverReveal
        baseImage={baseImage}
        revealImage={revealImage}
        circleRadius={150}
        width="800px"
        height="600px"
        className="max-w-[90vw]"
      />

      {/* Info Card */}
      <div className="mt-8 bg-white p-6 rounded-xl max-w-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
        <h3 className="mt-0 mb-4 text-xl text-gray-900">Setup Instructions:</h3>
        <div className="mb-4">
          <strong className="text-gray-900">1. Base Image:</strong>
          <p className="mt-1 mb-0 text-sm text-gray-600 leading-relaxed">
            Place your base image in the <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs text-pink-600 font-mono">public</code> folder (shown when not hovering)
          </p>
        </div>
        <div className="mb-4">
          <strong className="text-gray-900">2. Reveal Image:</strong>
          <p className="mt-1 mb-0 text-sm text-gray-600 leading-relaxed">
            Place your reveal image in the <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs text-pink-600 font-mono">public</code> folder (revealed on hover)
          </p>
        </div>
        <div className="mb-0">
          <strong className="text-gray-900">3. Customize:</strong>
          <p className="mt-1 mb-0 text-sm text-gray-600 leading-relaxed">
            Change <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs text-pink-600 font-mono">circleRadius</code> to adjust reveal size
          </p>
        </div>
      </div>
    </div>
  )
}
