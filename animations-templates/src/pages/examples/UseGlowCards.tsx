import { Link } from 'react-router-dom'
import GlowCard, { type CardData } from '../../components/GlowCard'

const CARDS: CardData[] = [
  {
    label: 'Analytics',
    title: 'Neural Pipeline',
    body: 'Real-time processing across distributed nodes with sub-millisecond latency.',
    stat: '98.4',
    unit: '% uptime',
    icon: '✦',
    color: '#a78bfa',
  },
  {
    label: 'Network',
    title: 'Mesh Protocol',
    body: 'Decentralized routing optimized for high-throughput, low-loss transmission.',
    stat: '2.1',
    unit: 'TB / day',
    icon: '◈',
    color: '#22d3ee',
  },
  {
    label: 'Security',
    title: 'Zero Trust Fabric',
    body: 'Continuous identity verification with cryptographic proof at every edge.',
    stat: '0',
    unit: 'breaches',
    icon: '⬡',
    color: '#fb7185',
  },
]

export default function UseGlowCards() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-black">
      <Link
        to="/"
        className="absolute top-6 left-6 text-white/90 hover:text-white px-4 py-2 rounded-lg bg-white/10 transition-colors z-10"
      >
        ← Back to Home
      </Link>

      <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-6">
        Directional Glow Cards
      </p>

      <div className="flex flex-wrap gap-8 justify-center">
        {CARDS.map((card, idx) => (
          <GlowCard key={idx} card={card} />
        ))}
      </div>
    </div>
  )
}
