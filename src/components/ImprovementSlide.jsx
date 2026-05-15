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

const diffMap = {
  'Baja':       { color: 'var(--green)', dim: 'var(--green-dim)', border: 'var(--green-border)', dots: 1 },
  'Media':      { color: 'var(--amber)', dim: 'var(--amber-dim)', border: 'var(--amber-border)', dots: 2 },
  'Media-Alta': { color: 'var(--amber)', dim: 'var(--amber-dim)', border: 'var(--amber-border)', dots: 3 },
  'Alta':       { color: 'var(--red)',   dim: 'var(--red-dim)',   border: 'var(--red-border)',   dots: 3 },
}

function ChangeDescriptor({ prefix, text, bg, symbol, symbolColor }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          background: bg,
        }}
      >
        <span
          style={{
            color: symbolColor,
            fontSize: prefix === 'creates' ? 16 : 14,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          {symbol}
        </span>
      </div>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 13,
          color: 'var(--text-secondary)',
          lineHeight: 1.5,
        }}
      >
        {text}
      </span>
    </div>
  )
}

function BeforeAfterDiagram() {
  return (
    <svg
      viewBox="0 0 320 120"
      style={{ width: '100%', maxWidth: 320, display: 'block' }}
    >
      <rect x="2" y="8"  width="120" height="28" rx="4" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.4)" strokeWidth="1" />
      <text x="62" y="27" textAnchor="middle" fontSize="10" fill="rgba(239,68,68,0.8)" fontFamily="Inter, sans-serif">Excel</text>

      <rect x="2" y="46" width="120" height="28" rx="4" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.4)" strokeWidth="1" />
      <text x="62" y="65" textAnchor="middle" fontSize="10" fill="rgba(239,68,68,0.8)" fontFamily="Inter, sans-serif">Papel</text>

      <rect x="2" y="84" width="120" height="28" rx="4" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.4)" strokeWidth="1" />
      <text x="62" y="103" textAnchor="middle" fontSize="10" fill="rgba(239,68,68,0.8)" fontFamily="Inter, sans-serif">Manual</text>

      <text x="130" y="42" fontSize="10" fill="rgba(239,68,68,0.5)" fontFamily="Inter, sans-serif">×</text>
      <text x="130" y="78" fontSize="10" fill="rgba(239,68,68,0.5)" fontFamily="Inter, sans-serif">×</text>

      <text x="148" y="66" fontSize="28" fill="var(--amber)" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="300">→</text>

      <rect x="196" y="20" width="120" height="80" rx="6" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.5)" strokeWidth="1.5" />
      <text x="256" y="55" textAnchor="middle" fontSize="10" fill="rgba(16,185,129,0.9)" fontFamily="Inter, sans-serif" fontWeight="600">Sistema</text>
      <text x="256" y="68" textAnchor="middle" fontSize="10" fill="rgba(16,185,129,0.9)" fontFamily="Inter, sans-serif" fontWeight="600">Unificado</text>
      <text x="256" y="85" textAnchor="middle" fontSize="14" fill="rgba(16,185,129,0.8)" fontFamily="Inter, sans-serif">✓</text>
    </svg>
  )
}

export default function ImprovementSlide({
  number,
  title,
  removes,
  creates,
  activates,
  difficulty,
  impactedObjectives,
  Icon,
}) {
  const diff = diffMap[difficulty] || diffMap['Media']

  return (
    <div className="slide">
      <BackgroundSystem variant="action" />
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
        <div
          style={{
            flex: '0 0 42%',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <motion.div
            custom={0}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 10,
              fontWeight: 600,
              color: 'var(--text-muted)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            ACCIÓN DE MEJORA
          </motion.div>

          <motion.div
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(80px, 10vw, 120px)',
              fontWeight: 800,
              color: 'var(--amber)',
              opacity: 0.15,
              lineHeight: 1,
              letterSpacing: '-0.05em',
              marginBottom: -24,
              userSelect: 'none',
            }}
          >
            {number}
          </motion.div>

          <motion.h2
            custom={2}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(18px, 2.2vw, 28px)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            {title}
          </motion.h2>

          <motion.div
            custom={3}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
          >
            {removes && (
              <ChangeDescriptor
                prefix="removes"
                text={removes}
                bg="var(--red-dim)"
                symbol="×"
                symbolColor="var(--red)"
              />
            )}
            {creates && (
              <ChangeDescriptor
                prefix="creates"
                text={creates}
                bg="var(--green-dim)"
                symbol="+"
                symbolColor="var(--green)"
              />
            )}
            {activates && (
              <ChangeDescriptor
                prefix="activates"
                text={activates}
                bg="var(--blue-dim)"
                symbol="→"
                symbolColor="var(--blue)"
              />
            )}
          </motion.div>

          <motion.div
            custom={4}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', alignItems: 'center', gap: 10 }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                color: 'var(--text-muted)',
                fontWeight: 500,
              }}
            >
              Complejidad:
            </span>
            <span
              style={{
                background: diff.dim,
                border: `1px solid ${diff.border}`,
                borderRadius: 100,
                padding: '4px 12px',
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                color: diff.color,
                fontWeight: 600,
              }}
            >
              {difficulty}
            </span>
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              {Array(3).fill(null).map((_, idx) => (
                <div
                  key={idx}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: idx < diff.dots ? diff.color : 'var(--border)',
                  }}
                />
              ))}
            </div>
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
            }}
          >
            OBJETIVOS IMPACTADOS
          </motion.div>

          <motion.div
            custom={6}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
          >
            {impactedObjectives.map((obj, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  background: 'var(--primary-dim)',
                  border: '1px solid rgba(79,70,229,0.15)',
                  borderRadius: 10,
                  padding: '10px 14px',
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--primary)',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13,
                    color: 'var(--primary)',
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  {obj}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            custom={7}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{ marginTop: 8 }}
          >
            <BeforeAfterDiagram />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
