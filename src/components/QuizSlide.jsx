import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import BackgroundSystem from './BackgroundSystem'

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
}

export default function QuizSlide({ questionNumber, question, options }) {
  const [selected, setSelected] = useState(null)
  const [showCorrect, setShowCorrect] = useState(false)

  const isAnswered = selected !== null
  const selectedIsCorrect = isAnswered && options[selected]?.isCorrect

  const handleSelect = (index) => {
    if (isAnswered) return
    setSelected(index)
    if (!options[index].isCorrect) {
      setTimeout(() => setShowCorrect(true), 650)
    }
  }

  const getState = (option, index) => {
    if (!isAnswered) return 'idle'
    if (index === selected) return option.isCorrect ? 'correct' : 'wrong'
    if (option.isCorrect && showCorrect) return 'correct'
    return 'dim'
  }

  return (
    <div className="slide">
      <BackgroundSystem variant="foda" />
      <div style={{
        position: 'relative', zIndex: 10, width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '36px 8%', gap: 32, boxSizing: 'border-box',
      }}>

        <motion.div
          custom={0} variants={itemVariants} initial="hidden" animate="visible"
        >
          <span style={{
            background: 'rgba(79,70,229,0.13)', border: '1.5px solid rgba(79,70,229,0.30)',
            borderRadius: 100, padding: '7px 22px',
            fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700,
            color: 'var(--primary)', letterSpacing: '0.12em',
          }}>
            PREGUNTA {questionNumber} / 4
          </span>
        </motion.div>

        <motion.p
          custom={1} variants={itemVariants} initial="hidden" animate="visible"
          style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.2vw, 42px)',
            fontWeight: 700, color: 'var(--text-primary)',
            textAlign: 'center', maxWidth: 800, lineHeight: 1.3, margin: 0,
          }}
        >
          {question}
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, width: '100%', maxWidth: 820 }}>
          {options.map((option, i) => {
            const state = getState(option, i)

            const bgMap = {
              idle:    '#FFFFFF',
              correct: 'rgba(5,150,105,0.14)',
              wrong:   'rgba(220,38,38,0.11)',
              dim:     '#FFFFFF',
            }
            const borderMap = {
              idle:    '2px solid #D1D5DB',
              correct: '2px solid #059669',
              wrong:   '2px solid #DC2626',
              dim:     '2px solid #E5E7EB',
            }
            const shadowMap = {
              idle:    '0 1px 4px rgba(0,0,0,0.06), 0 8px 24px rgba(79,70,229,0.07)',
              correct: '0 0 0 5px rgba(5,150,105,0.14), 0 8px 24px rgba(5,150,105,0.10)',
              wrong:   '0 0 0 4px rgba(220,38,38,0.12)',
              dim:     '0 1px 4px rgba(0,0,0,0.04)',
            }

            return (
              <motion.div
                key={option.letter}
                custom={2 + i}
                variants={itemVariants}
                initial="hidden"
                // Always string "visible" for entrance; game feedback via keyframe objects
                animate={
                  state === 'correct'
                    ? { opacity: 1, y: 0, filter: 'blur(0px)', scale: [1, 1.06, 0.97, 1.02, 1] }
                    : state === 'wrong' && i === selected
                    ? { opacity: 1, y: 0, filter: 'blur(0px)', x: [0, -12, 12, -9, 9, -5, 5, 0] }
                    : 'visible'
                }
                transition={
                  state === 'correct'
                    ? { duration: 0.55, ease: 'easeOut' }
                    : state === 'wrong' && i === selected
                    ? { duration: 0.5, ease: 'easeOut' }
                    : undefined
                }
                whileHover={!isAnswered ? { scale: 1.025, y: -2, boxShadow: '0 12px 40px rgba(79,70,229,0.16)' } : {}}
                onClick={() => handleSelect(i)}
                style={{
                  background: bgMap[state],
                  border: borderMap[state],
                  borderRadius: 14,
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  boxShadow: shadowMap[state],
                  opacity: state === 'dim' ? 0.38 : 1,
                  cursor: isAnswered ? 'default' : 'pointer',
                  transition: 'background 0.35s, border-color 0.35s, opacity 0.4s, box-shadow 0.35s',
                  userSelect: 'none',
                }}
              >
                <span style={{
                  width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: state === 'correct' ? '#059669' : state === 'wrong' ? '#DC2626' : 'rgba(79,70,229,0.11)',
                  color: state === 'correct' || state === 'wrong' ? 'white' : 'var(--primary)',
                  fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 800,
                  transition: 'background 0.3s',
                }}>
                  {state === 'correct' ? '✓' : state === 'wrong' && i === selected ? '✕' : option.letter}
                </span>

                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: 16,
                  fontWeight: state === 'correct' ? 600 : 400,
                  color: state === 'correct' ? '#065F46' : state === 'wrong' && i === selected ? '#7F1D1D' : 'var(--text-secondary)',
                  flex: 1, lineHeight: 1.45,
                  transition: 'color 0.3s',
                }}>
                  {option.text}
                </span>

                {state === 'correct' && (
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 450, damping: 18, delay: 0.15 }}
                  >
                    <CheckCircle2 size={24} color="#059669" />
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {isAnswered && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: selectedIsCorrect ? 0.35 : 0.85, duration: 0.5 }}
            style={{
              fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600,
              color: selectedIsCorrect ? '#065F46' : '#991B1B',
              textAlign: 'center',
            }}
          >
            {selectedIsCorrect ? '¡Correcto!' : 'Incorrecto — la respuesta correcta se muestra en verde'}
          </motion.p>
        )}
      </div>
    </div>
  )
}
