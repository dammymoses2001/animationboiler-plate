import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UseHorizontalScroll from './pages/examples/UseHorizontalScroll'
import UseHorizontalScrollAuto from './pages/examples/UseHorizontalScrollAuto'
import UseStackingCards from './pages/examples/UseStackingCards'
import UseCursorBorderCard from './pages/examples/UseCursorBorderCard'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/useHorizontalScroll" element={<UseHorizontalScroll />} />
      <Route path="/useHorizontalScrollAuto" element={<UseHorizontalScrollAuto />} />
      <Route path="/useStackingCards" element={<UseStackingCards />} />
      <Route path="/useCursorBorder" element={<UseCursorBorderCard />} />
    </Routes>
  )
}

export default App
