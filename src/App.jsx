import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'

import Slide01 from './slides/Slide01'
import Slide02 from './slides/Slide02'
import Slide03 from './slides/Slide03'
import SlideProcesoMejora from './slides/SlideProcesoMejora'
import Slide04 from './slides/Slide04'
import Slide05 from './slides/Slide05'
import Slide06 from './slides/Slide06'
import Slide07 from './slides/Slide07'
import Slide08 from './slides/Slide08'
import Slide09 from './slides/Slide09'
import SlideDiagEstrategia from './slides/SlideDiagEstrategia'
import Slide10 from './slides/Slide10'
import Slide11 from './slides/Slide11'
import Slide12 from './slides/Slide12'
import Slide13 from './slides/Slide13'
import SlideImplementacion from './slides/SlideImplementacion'
import SlideEstrategia1 from './slides/SlideEstrategia1'
import SlideEstrategia2 from './slides/SlideEstrategia2'
import SlideEstrategia3 from './slides/SlideEstrategia3'
import Slide23 from './slides/Slide23'
import Slide24 from './slides/Slide24'
import Slide25 from './slides/Slide25'

// 22 slides — orden definitivo
const slides = [
  Slide01,           // 1  Portada
  Slide02,           // 2  ¿Qué es CONIN?
  Slide03,           // 3  Misión, Visión y Objetivos
  SlideProcesoMejora,// 4  Proceso seleccionado
  Slide04,           // 5  Problema Actual
  Slide05,           // 6  Quiz 1/4
  Slide06,           // 7  Quiz 2/4
  Slide07,           // 8  Quiz 3/4
  Slide08,           // 9  Quiz 4/4
  Slide09,           // 10 FODA
  SlideDiagEstrategia,// 11 Del diagnóstico a la estrategia
  Slide10,           // 12 Estrategia FO
  Slide11,           // 13 Estrategia DO
  Slide12,           // 14 Estrategia FA
  Slide13,           // 15 Estrategia DA
  SlideImplementacion,// 16 De la estrategia a la implementación
  SlideEstrategia1,  // 17 Estrategia 1
  SlideEstrategia2,  // 18 Estrategia 2
  SlideEstrategia3,  // 19 Estrategia 3
  Slide23,           // 20 Impacto esperado
  Slide24,           // 21 Cierre
  Slide25,           // 22 Muchas gracias
]

const TOTAL = slides.length
const LOCK_MS = 550

// Section coloring for nav dots (0-based)
// 0-3: default, 4 problema, 5-9 foda/quiz, 10 transición, 11-15 came, 16-18 action, 19-21 default
function getDotClass(index) {
  if (index >= 5 && index <= 9)  return 'section-foda'
  if (index >= 11 && index <= 15) return 'section-came'
  if (index >= 16 && index <= 18) return 'section-action'
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
