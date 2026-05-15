import { motion } from 'framer-motion'
import BackgroundSystem from '../components/BackgroundSystem'

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  })
}

const pillars = [
  { label: 'ESTRATÉGICA', bg: 'rgba(79,70,229,0.08)', border: 'rgba(79,70,229,0.20)', color: 'var(--primary)' },
  { label: 'TECNOLÓGICA', bg: 'rgba(14,165,233,0.08)', border: 'rgba(14,165,233,0.20)', color: 'var(--secondary)' },
  { label: 'HUMANA',      bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.20)', color: 'var(--green)' },
  { label: 'SOCIAL',      bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.20)', color: 'var(--amber)' },
]

export default function Slide24() {
  return (
    <div className="slide">
      <BackgroundSystem variant="default" />
      <div style={{
        position: 'relative', zIndex: 10, width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '40px 10%', gap: 28,
      }}>
        <motion.div custom={0} variants={itemVariants} initial="hidden" animate="visible">
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.14em', fontWeight: 600 }}>CONCLUSIÓN</span>
        </motion.div>

        <motion.div custom={1} variants={itemVariants} initial="hidden" animate="visible" style={{ textAlign: 'center', maxWidth: 820 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px,6vw,80px)', color: 'var(--primary)', opacity: 0.12, lineHeight: 0.8, marginBottom: -8 }}>"</div>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.65, fontStyle: 'italic' }}>
            La propuesta no busca únicamente digitalizar procesos, sino transformar el modelo operativo de CONIN en un{' '}
            <span className="gradient-text" style={{ fontStyle: 'normal', fontWeight: 700 }}>sistema integrado</span>,{' '}
            <span style={{ color: 'var(--green)', fontStyle: 'normal', fontWeight: 600 }}>preventivo</span>{' '}
            y{' '}
            <span style={{ color: 'var(--blue)', fontStyle: 'normal', fontWeight: 600 }}>basado en datos</span>,
            fortaleciendo la continuidad del tratamiento y el impacto social de la fundación.
          </p>
        </motion.div>

        <motion.div custom={3} variants={itemVariants} initial="hidden" animate="visible"
          style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {pillars.map(({ label, bg, border, color }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, borderRadius: 100, padding: '8px 20px', background: bg, border: `1px solid ${border}` }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', color }}>{label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div custom={4} variants={itemVariants} initial="hidden" animate="visible">
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', textAlign: 'center', letterSpacing: '0.06em' }}>
            UTN · Universidad Tecnológica Nacional · 2025
          </p>
        </motion.div>
      </div>
    </div>
  )
}
