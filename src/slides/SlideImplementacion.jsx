import { motion } from 'framer-motion'
import BackgroundSystem from '../components/BackgroundSystem'

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  })
}

const cameStrategies = [
  { type: 'FO', color: '#059669' },
  { type: 'DO', color: '#2563EB' },
  { type: 'FA', color: '#D97706' },
  { type: 'DA', color: '#DC2626' },
]

const actions = [
  { num: '1', label: 'Transformación digital del proceso', color: 'var(--primary)', dim: 'rgba(79,70,229,0.11)' },
  { num: '2', label: 'Modelo preventivo basado en datos', color: 'var(--blue)', dim: 'rgba(37,99,235,0.11)' },
  { num: '3', label: 'Gestión eficiente de recursos críticos', color: 'var(--amber)', dim: 'rgba(217,119,6,0.12)' },
]

export default function SlideImplementacion() {
  return (
    <div className="slide">
      <BackgroundSystem variant="action" />
      <div style={{
        position: 'relative', zIndex: 10, width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '32px 8%', gap: 30, boxSizing: 'border-box',
      }}>

        <motion.div custom={0} variants={itemVariants} initial="hidden" animate="visible" style={{ textAlign: 'center' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,3.2vw,44px)',
            fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--text-primary)', margin: 0,
          }}>
            De la estrategia <span style={{ color: 'var(--amber)' }}>a la implementación</span>
          </h1>
        </motion.div>

        <motion.p custom={1} variants={itemVariants} initial="hidden" animate="visible"
          style={{
            fontFamily: 'var(--font-body)', fontSize: 'clamp(14px,1.6vw,17px)',
            color: 'var(--text-secondary)', lineHeight: 1.65,
            textAlign: 'center', maxWidth: 700, margin: 0,
          }}
        >
          A partir de las estrategias definidas en el CAME, se diseñaron acciones concretas de
          transformación orientadas a mejorar la trazabilidad, continuidad y eficiencia del proceso.
        </motion.p>

        <motion.div custom={2} variants={itemVariants} initial="hidden" animate="visible"
          style={{ display: 'flex', alignItems: 'center', gap: 36, justifyContent: 'center' }}
        >
          {/* CAME side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-end' }}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.12em', marginBottom: 4 }}>ESTRATEGIAS CAME</div>
            {cameStrategies.map((s, i) => (
              <motion.div
                key={s.type}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                style={{
                  background: `${s.color}12`, border: `2px solid ${s.color}50`,
                  borderRadius: 10, padding: '10px 22px',
                  fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800, color: s.color,
                }}
              >
                {s.type}
              </motion.div>
            ))}
          </div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
          >
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>SELECCIONAMOS</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, color: 'var(--amber)', lineHeight: 1 }}>→</div>
          </motion.div>

          {/* Actions side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.12em', marginBottom: 4 }}>ESTRATEGIAS DE MEJORA</div>
            {actions.map((a, i) => (
              <motion.div
                key={a.num}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + i * 0.15, duration: 0.5 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  background: 'var(--bg-surface)', border: `2px solid ${a.color}30`,
                  borderLeft: `4px solid ${a.color}`,
                  borderRadius: '0 12px 12px 0', padding: '12px 20px',
                  boxShadow: 'var(--shadow-card)', minWidth: 280,
                }}
              >
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, color: a.color, lineHeight: 1 }}>{a.num}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>{a.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}
