import { motion } from 'framer-motion'
import { FileSpreadsheet, Unlink, GitBranch, Building2, AlertTriangle } from 'lucide-react'
import BackgroundSystem from '../components/BackgroundSystem'

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  })
}

const problems = [
  { Icon: FileSpreadsheet, title: 'Planillas Excel aisladas', desc: 'Cada centro opera con hojas de cálculo propias sin conexión ni integración entre sedes.' },
  { Icon: Unlink, title: 'Sin trazabilidad', desc: 'Imposible conocer el historial completo de un paciente a través del tiempo y los centros.' },
  { Icon: GitBranch, title: 'Seguimiento fragmentado', desc: 'Admisión, seguimiento y alta no están integrados en ningún sistema común.' },
  { Icon: Building2, title: 'Descoordinación entre centros', desc: 'Sin comunicación sistémica entre los +100 centros de prevención del país.' },
]

export default function Slide04() {
  return (
    <div className="slide">
      <BackgroundSystem variant="default" />
      <div style={{
        position: 'relative', zIndex: 10, width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '24px 7%', gap: 20,
      }}>
        <motion.div
          custom={0} variants={itemVariants} initial="hidden" animate="visible"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}
        >
          <div style={{
            display: 'inline-block', background: 'rgba(239,68,68,0.08)',
            border: '1px solid rgba(239,68,68,0.20)', borderRadius: 100, padding: '5px 14px',
          }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: 'var(--red)', fontWeight: 600, letterSpacing: '0.12em' }}>
              DIAGNÓSTICO · SITUACIÓN ACTUAL
            </span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,3vw,40px)', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--text-primary)', textAlign: 'center' }}>
            El problema <span style={{ color: 'var(--red)' }}>está en los procesos</span>
          </h1>
        </motion.div>

        <motion.div
          custom={1} variants={itemVariants} initial="hidden" animate="visible"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14, width: '100%', maxWidth: 780 }}
        >
          {problems.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'var(--bg-surface)', border: '1px solid var(--border)',
                borderLeft: '4px solid var(--red)', borderRadius: '0 14px 14px 0',
                padding: '14px 16px', boxShadow: 'var(--shadow-card)',
                position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: 'var(--red-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={17} color="var(--red)" />
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}>{title}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: 7 }}>{desc}</p>
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                style={{ position: 'absolute', top: 12, right: 12, width: 7, height: 7, borderRadius: '50%', background: 'var(--red)' }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          custom={6} variants={itemVariants} initial="hidden" animate="visible"
          style={{
            display: 'flex', alignItems: 'flex-start', gap: 12,
            background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.20)',
            borderRadius: 12, padding: '12px 18px', width: '100%', maxWidth: 780,
          }}
        >
          <AlertTriangle size={18} color="var(--red)" style={{ flexShrink: 0, marginTop: 2 }} />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(12px,1.3vw,14px)', color: '#7F1D1D', fontWeight: 500, lineHeight: 1.5 }}>
            El resultado: tratamientos interrumpidos, datos perdidos e ineficiencia sistémica que afecta directamente la calidad de atención a los niños.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
