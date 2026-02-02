import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function UseFadeIn() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-block mb-8 text-purple-400 hover:text-purple-300 transition-colors"
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          useFadeIn Example
        </h1>
        
        <div className="bg-gray-800 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Demo</h2>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors mb-6"
          >
            {isVisible ? 'Hide' : 'Show'} Element
          </button>
          
          <div
            className={`transition-opacity duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="p-6 bg-purple-900/50 rounded-lg border border-purple-500">
              <p className="text-lg">This element fades in and out!</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Code Example</h2>
          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code>{`const [isVisible, setIsVisible] = useState(false)

<div
  className={\`transition-opacity duration-1000 \${
    isVisible ? 'opacity-100' : 'opacity-0'
  }\`}
>
  {/* Your content */}
</div>`}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
