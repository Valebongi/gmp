import { motion } from 'framer-motion'
import BackgroundSystem from '../components/BackgroundSystem'

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  })
}

const steps = [
  { label: 'Admisión', color: 'var(--primary)', dim: 'rgba(79,70,229,0.12)' },
  { label: 'Seguimiento', color: 'var(--blue)', dim: 'rgba(37,99,235,0.12)' },
  { label: 'Egreso', color: 'var(--green)', dim: 'rgba(5,150,105,0.12)' },
]

export default function SlideProcesoMejora() {
  return (
    <div className="slide">
      <BackgroundSystem variant="default" />
      <div style={{
        position: 'relative', zIndex: 10, width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '32px 10%', gap: 28, boxSizing: 'border-box',
      }}>

        <motion.div custom={0} variants={itemVariants} initial="hidden" animate="visible" style={{ textAlign: 'center' }}>
          <span style={{
            background: 'rgba(79,70,229,0.12)', border: '1.5px solid rgba(79,70,229,0.28)',
            borderRadius: 100, padding: '6px 18px',
            fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700,
            color: 'var(--primary)', letterSpacing: '0.12em',
          }}>
            PROCESO SELECCIONADO
          </span>
        </motion.div>

        <motion.div custom={1} variants={itemVariants} initial="hidden" animate="visible" style={{ textAlign: 'center' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,3.5vw,48px)',
            fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--text-primary)',
            margin: 0, lineHeight: 1.1,
          }}>
            Proceso seleccionado{' '}
            <span className="gradient-text">para la mejora</span>
          </h1>
        </motion.div>

        <motion.div custom={2} variants={itemVariants} initial="hidden" animate="visible"
          style={{
            background: 'var(--bg-surface)', border: '2px solid rgba(79,70,229,0.25)',
            borderRadius: 20, padding: '24px 36px', maxWidth: 700,
            boxShadow: 'var(--shadow-elevated)', textAlign: 'center',
          }}
        >
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700,
            color: 'var(--primary)', letterSpacing: '0.12em', marginBottom: 10,
          }}>
            NOMBRE DEL PROCESO
          </div>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(18px,2.2vw,28px)',
            fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.25,
          }}>
            Gestión integral de rehabilitación del niño y su entorno
          </div>
        </motion.div>

        <motion.p custom={3} variants={itemVariants} initial="hidden" animate="visible"
          style={{
            fontFamily: 'var(--font-body)', fontSize: 'clamp(14px,1.6vw,17px)',
            color: 'var(--text-secondary)', lineHeight: 1.7,
            textAlign: 'center', maxWidth: 680, margin: 0,
          }}
        >
          Proceso responsable de integrar la admisión, seguimiento y egreso del paciente,
          articulando múltiples áreas y actores para garantizar una atención continua, coordinada y sostenible.
        </motion.p>

        <motion.div custom={4} variants={itemVariants} initial="hidden" animate="visible"
          style={{ display: 'flex', alignItems: 'center', gap: 12 }}
        >
          {steps.map((step, i) => (
            <div key={step.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                background: step.dim, border: `2px solid ${step.color}`,
                borderRadius: 12, padding: '10px 22px',
                fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700,
                color: step.color,
              }}>
                {step.label}
              </div>
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.8 + i * 0.2, duration: 0.4 }}
                  style={{
                    fontFamily: 'var(--font-display)', fontSize: 22,
                    color: 'var(--text-muted)', fontWeight: 300,
                  }}
                >→</motion.div>
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}
