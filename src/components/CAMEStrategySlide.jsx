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

export default function CAMEStrategySlide({ type, typeName, strategy, actions, Icon }) {
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
          alignItems: 'center',
          padding: '30px 6%',
          gap: 40,
          boxSizing: 'border-box',
        }}
      >
        <div style={{ flex: '0 0 38%', display: 'flex', flexDirection: 'column' }}>
          <motion.div
            custom={0}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{ marginBottom: 16 }}
          >
            <span
              style={{
                background: 'var(--blue-dim)',
                border: '1px solid var(--blue-border)',
                borderRadius: 100,
                padding: '4px 14px',
                display: 'inline-block',
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                color: 'var(--blue)',
                fontWeight: 600,
                letterSpacing: '0.1em',
              }}
            >
              CAME · {type}
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(72px, 9vw, 120px)',
              fontWeight: 800,
              lineHeight: 1,
              color: 'var(--blue)',
              opacity: 0.12,
              letterSpacing: '-0.06em',
              marginBottom: -20,
              userSelect: 'none',
            }}
          >
            {type}
          </motion.div>

          <motion.h2
            custom={2}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(18px, 2vw, 26px)',
              fontWeight: 700,
              color: 'var(--text-secondary)',
              letterSpacing: '-0.01em',
              marginBottom: 12,
              margin: '0 0 12px 0',
            }}
          >
            {typeName}
          </motion.h2>

          <motion.p
            custom={3}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(15px, 1.7vw, 19px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: 420,
              margin: 0,
            }}
          >
            {strategy}
          </motion.p>

          <motion.div
            custom={4}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{
              width: 60,
              height: 60,
              borderRadius: 14,
              background: 'var(--blue-dim)',
              border: '1px solid var(--blue-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 24,
            }}
          >
            {Icon && <Icon size={28} color="var(--blue)" />}
          </motion.div>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <motion.div
            custom={5}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 600,
              color: 'var(--text-muted)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            ACCIONES CLAVE
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {actions.map((action, i) => (
              <motion.div
                key={i}
                custom={6 + i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  borderLeft: '4px solid var(--amber)',
                  borderRadius: '0 12px 12px 0',
                  padding: '14px 20px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: 'var(--amber)',
                    marginTop: 4,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(14px, 1.5vw, 17px)',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                  }}
                >
                  {action}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
