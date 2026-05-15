import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import BackgroundSystem from './BackgroundSystem'

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function QuizSlide({ questionNumber, question, options }) {
  return (
    <div className="slide">
      <BackgroundSystem variant="foda" />
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 8%',
          gap: 32,
          boxSizing: 'border-box',
        }}
      >
        <motion.div
          custom={0}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 10,
              fontWeight: 600,
              color: 'var(--text-muted)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            ANÁLISIS FODA · QUIZ INTERACTIVO
          </span>
          <span
            style={{
              background: 'rgba(79,70,229,0.1)',
              border: '1px solid rgba(79,70,229,0.2)',
              borderRadius: 100,
              padding: '6px 18px',
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 600,
              color: 'var(--primary)',
              letterSpacing: '0.12em',
            }}
          >
            PREGUNTA {questionNumber} / 4
          </span>
        </motion.div>

        <motion.p
          custom={1}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px, 3.2vw, 42px)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            textAlign: 'center',
            maxWidth: 780,
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {question}
        </motion.p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
            width: '100%',
            maxWidth: 800,
          }}
        >
          {options.map((option, i) => (
            <motion.div
              key={option.letter}
              custom={i}
              variants={{
                hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
                visible: {
                  opacity: option.isCorrect ? 1 : 0.7,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: {
                    delay: option.isCorrect ? 0.8 + i * 0.1 : i * 0.15,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              style={{
                background: option.isCorrect ? 'var(--green-dim)' : 'var(--bg-surface)',
                border: option.isCorrect
                  ? '2px solid var(--green)'
                  : '1px solid var(--red-border)',
                borderRadius: 12,
                padding: '18px 22px',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                boxShadow: option.isCorrect
                  ? '0 0 0 3px rgba(16,185,129,0.08), var(--shadow-card)'
                  : 'var(--shadow-card)',
              }}
            >
              <span
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  background: option.isCorrect
                    ? 'var(--green)'
                    : 'rgba(239,68,68,0.08)',
                  color: option.isCorrect ? 'white' : 'var(--text-muted)',
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                {option.letter}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 16,
                  fontWeight: option.isCorrect ? 600 : 400,
                  color: option.isCorrect ? 'var(--text-primary)' : 'var(--text-secondary)',
                  flex: 1,
                  lineHeight: 1.4,
                }}
              >
                {option.text}
              </span>
              {option.isCorrect && (
                <CheckCircle2
                  size={18}
                  color="var(--green)"
                  style={{ marginLeft: 'auto', flexShrink: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
