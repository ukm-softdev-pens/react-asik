import { useRef } from 'react'
import './App.css'

function App() {
  const wrapRef = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.PointerEvent) => {
    const el = wrapRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.setProperty('--x', `${x}px`)
    el.style.setProperty('--y', `${y}px`)
    el.style.setProperty('--opacity', '1')
  }

  const handleLeave = () => {
    const el = wrapRef.current
    if (!el) return
    el.style.setProperty('--opacity', '0')
  }

  return (
    <div className="screen-center">
      <div
        ref={wrapRef}
        className="gradient-hover-text-wrapper"
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
      >
        <span className="gradient-normal-text font-bold size-big base-layer">
          Hello World
        </span>
        <span aria-hidden className="gradient-hover-text font-bold size-big overlay-layer">
          Hello World
        </span>
      </div>
    </div>
  )
}

export default App
