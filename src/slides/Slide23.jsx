import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import BackgroundSystem from '../components/BackgroundSystem'

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  })
}

const metrics = [
  { value: '-40%', label: 'tiempos\nadministrativos', color: 'var(--primary)' },
  { value: '-25%', label: 'tasa de\nabandono', color: 'var(--amber)' },
  { value: '100%', label: 'trazabilidad\nde donaciones', color: 'var(--green)' },
  { value: '+100', label: 'centros\nintegrados', color: 'var(--blue)' },
]

const benefits = [
  'Continuidad garantizada del tratamiento',
  'Visibilidad en tiempo real de stock y recursos',
  'Reportes de impacto para donantes',
  'Base para expansión digital de la red nacional',
]

export default function Slide23() {
  return (
    <div className="slide">
      <BackgroundSystem variant="default" />
      <div style={{
        position: 'relative', zIndex: 10, width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '24px 7%', gap: 24,
      }}>
        <motion.div custom={0} variants={itemVariants} initial="hidden" animate="visible" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.18)', borderRadius: 100, padding: '5px 14px', marginBottom: 10 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: 'var(--primary)', fontWeight: 600, letterSpacing: '0.12em' }}>RESULTADOS ESPERADOS</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,3vw,38px)', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--text-primary)' }}>
            Impacto <span className="gradient-text">organizacional</span>
          </h1>
        </motion.div>

        <motion.div custom={1} variants={itemVariants} initial="hidden" animate="visible"
          style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {metrics.map(({ value, label, color }, i) => (
            <motion.div key={i} custom={2 + i} variants={itemVariants} initial="hidden" animate="visible"
              style={{
                background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 16,
                padding: '0 22px 18px', textAlign: 'center', boxShadow: 'var(--shadow-elevated)',
                minWidth: 150, display: 'flex', flexDirection: 'column', alignItems: 'center',
              }}
            >
              <div style={{ height: 3, background: color, borderRadius: '2px 2px 0 0', width: '100%', marginBottom: 14 }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,5vw,58px)', fontWeight: 800, color, lineHeight: 1 }}>{value}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', fontWeight: 500, lineHeight: 1.4, textAlign: 'center', maxWidth: 130, marginTop: 8, whiteSpace: 'pre-line' }}>{label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div custom={6} variants={itemVariants} initial="hidden" animate="visible" style={{ width: '100%', maxWidth: 700 }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.14em', fontWeight: 600, textAlign: 'center', marginBottom: 12 }}>BENEFICIOS CLAVE</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {benefits.map((b, i) => (
              <motion.div key={i} custom={7 + i} variants={itemVariants} initial="hidden" animate="visible"
                style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 10, padding: '8px 14px', boxShadow: 'var(--shadow-card)' }}
              >
                <CheckCircle2 size={16} color="var(--green)" />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary)', fontWeight: 500 }}>{b}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
