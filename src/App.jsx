import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'

import Slide01 from './slides/Slide01'
import Slide02 from './slides/Slide02'
import Slide03 from './slides/Slide03'
import Slide04 from './slides/Slide04'
import Slide05 from './slides/Slide05'
import Slide06 from './slides/Slide06'
import Slide07 from './slides/Slide07'
import Slide08 from './slides/Slide08'
import Slide09 from './slides/Slide09'
import Slide10 from './slides/Slide10'
import Slide11 from './slides/Slide11'
import Slide12 from './slides/Slide12'
import Slide13 from './slides/Slide13'
import Slide14 from './slides/Slide14'
import Slide15 from './slides/Slide15'
import Slide16 from './slides/Slide16'
import Slide17 from './slides/Slide17'
import Slide18 from './slides/Slide18'
import Slide19 from './slides/Slide19'
import Slide20 from './slides/Slide20'
import Slide21 from './slides/Slide21'
import Slide22 from './slides/Slide22'
import Slide23 from './slides/Slide23'
import Slide24 from './slides/Slide24'
import Slide25 from './slides/Slide25'

const slides = [
  Slide01, Slide02, Slide03, Slide04, Slide05,
  Slide06, Slide07, Slide08, Slide09, Slide10,
  Slide11, Slide12, Slide13, Slide14, Slide15,
  Slide16, Slide17, Slide18, Slide19, Slide20,
  Slide21, Slide22, Slide23, Slide24, Slide25,
]

const TOTAL = slides.length
const LOCK_MS = 550

// Section coloring for nav dots
function getDotClass(index) {
  if (index >= 4 && index <= 8)  return 'section-foda'
  if (index >= 9 && index <= 16) return 'section-came'
  if (index >= 17 && index <= 21) return 'section-action'
  return ''
}

const slideVariants = {
  enter: (dir) => ({ y: dir > 0 ? '5%' : '-5%', opacity: 0 }),
  center: { y: 0, opacity: 1 },
  exit:  (dir) => ({ y: dir > 0 ? '-5%' : '5%', opacity: 0 }),
}
const slideTransition = { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }

export default function App() {
  const [[current, dir], setCurrent] = useState([0, 0])
  const [locked, setLocked] = useState(false)

  const navigate = useCallback((direction) => {
    if (locked) return
    setCurrent(([prev]) => {
      const next = prev + direction
      if (next < 0 || next >= TOTAL) return [prev, direction]
      return [next, direction]
    })
    setLocked(true)
    setTimeout(() => setLocked(false), LOCK_MS)
  }, [locked])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') navigate(1)
      if (e.key === 'ArrowUp'   || e.key === 'ArrowLeft')  navigate(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  useEffect(() => {
    let last = 0
    const onWheel = (e) => {
      const now = Date.now()
      if (now - last < 900) return
      last = now
      navigate(e.deltaY > 0 ? 1 : -1)
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    return () => window.removeEventListener('wheel', onWheel)
  }, [navigate])

  useEffect(() => {
    let startY = 0
    const onTouchStart = (e) => { startY = e.touches[0].clientY }
    const onTouchEnd = (e) => {
      const dy = startY - e.changedTouches[0].clientY
      if (Math.abs(dy) > 50) navigate(dy > 0 ? 1 : -1)
    }
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [navigate])

  const SlideComponent = slides[current]
  const progress = ((current + 1) / TOTAL) * 100

  return (
    <>
      <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <AnimatePresence custom={dir} mode="sync">
          <motion.div
            key={current}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
            style={{
              position: 'absolute', inset: 0,
              willChange: 'transform, opacity',
            }}
          >
            <SlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav dots */}
      <nav className="nav-dots" aria-label="Navegación de slides">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`nav-dot ${getDotClass(i)} ${i === current ? 'active' : ''}`}
            onClick={() => {
              if (locked) return
              const direction = i > current ? 1 : -1
              setCurrent([i, direction])
              setLocked(true)
              setTimeout(() => setLocked(false), LOCK_MS)
            }}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </nav>

      {/* Progress bar */}
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      {/* Slide counter */}
      <div className="slide-counter">
        {String(current + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
      </div>
    </>
  )
}
