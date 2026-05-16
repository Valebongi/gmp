import { motion } from 'framer-motion'
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

const colorMap = {
  green: {
    bg: 'var(--green-dim)',
    border: 'var(--green-border)',
    text: 'var(--green)',
    label: '#065F46',
  },
  red: {
    bg: 'var(--red-dim)',
    border: 'var(--red-border)',
    text: 'var(--red)',
    label: '#991B1B',
  },
}

export default function FODAToCAMESlide({ type, typeLabel, leftEl, rightEl, strategy }) {
  return (
    <div className="slide">
      <BackgroundSystem variant="came" />
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
          padding: '30px 6%',
          gap: 28,
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <motion.h1
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="gradient-text"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 54px)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Estrategia {type}
          </motion.h1>
          <motion.span
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              fontWeight: 500,
              color: 'var(--text-secondary)',
            }}
          >
            {typeLabel}
          </motion.span>
        </div>

        <motion.div
          custom={2}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <motion.div
            custom={3}
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: colorMap[leftEl.color].bg,
              border: `1px solid ${colorMap[leftEl.color].border}`,
              borderRadius: 16,
              padding: '24px 30px',
              minWidth: 220,
              maxWidth: 270,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                fontWeight: 600,
                color: colorMap[leftEl.color].text,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}
            >
              {leftEl.category}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.4,
              }}
            >
              {leftEl.label}
            </div>
          </motion.div>

          <motion.div
            custom={4}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 40,
              fontWeight: 300,
              color: 'var(--text-muted)',
            }}
          >
            +
          </motion.div>

          <motion.div
            custom={5}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: colorMap[rightEl.color].bg,
              border: `1px solid ${colorMap[rightEl.color].border}`,
              borderRadius: 16,
              padding: '24px 30px',
              minWidth: 220,
              maxWidth: 270,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                fontWeight: 600,
                color: colorMap[rightEl.color].text,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}
            >
              {rightEl.category}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.4,
              }}
            >
              {rightEl.label}
            </div>
          </motion.div>

          <motion.div
            custom={6}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 48,
              color: 'var(--primary)',
              lineHeight: 1,
            }}
          >
            →
          </motion.div>

          <motion.div
            custom={7}
            initial={{ y: 30, opacity: 0, filter: 'blur(8px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'var(--bg-surface)',
              border: '2px solid var(--blue-border)',
              borderRadius: 16,
              padding: '24px 32px',
              maxWidth: 560,
              textAlign: 'center',
              boxShadow: 'var(--shadow-elevated)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 10,
                color: 'var(--blue)',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}
            >
              ESTRATEGIA RESULTANTE
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(17px, 2vw, 22px)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                lineHeight: 1.5,
              }}
            >
              {strategy}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
