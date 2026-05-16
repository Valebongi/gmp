import { motion } from 'framer-motion'
import BackgroundSystem from '../components/BackgroundSystem'

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  })
}

const fodaItems = [
  { letter: 'F', label: 'Fortalezas', color: '#059669', dim: 'rgba(5,150,105,0.14)', border: 'rgba(5,150,105,0.40)' },
  { letter: 'O', label: 'Oportunidades', color: '#059669', dim: 'rgba(5,150,105,0.09)', border: 'rgba(5,150,105,0.28)' },
  { letter: 'D', label: 'Debilidades', color: '#DC2626', dim: 'rgba(220,38,38,0.12)', border: 'rgba(220,38,38,0.38)' },
  { letter: 'A', label: 'Amenazas', color: '#DC2626', dim: 'rgba(220,38,38,0.08)', border: 'rgba(220,38,38,0.28)' },
]

const cameItems = [
  { type: 'FO', label: 'Ofensiva', color: '#059669' },
  { type: 'DO', label: 'Reorientación', color: '#2563EB' },
  { type: 'FA', label: 'Defensiva', color: '#D97706' },
  { type: 'DA', label: 'Supervivencia', color: '#DC2626' },
]

export default function SlideDiagEstrategia() {
  return (
    <div className="slide">
      <BackgroundSystem variant="came" />
      <div style={{
        position: 'relative', zIndex: 10, width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '32px 8%', gap: 32, boxSizing: 'border-box',
      }}>

        <motion.div custom={0} variants={itemVariants} initial="hidden" animate="visible" style={{ textAlign: 'center' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,3.2vw,44px)',
            fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--text-primary)', margin: 0,
          }}>
            Del diagnóstico <span className="gradient-text-blue">a la estrategia</span>
          </h1>
        </motion.div>

        <motion.p custom={1} variants={itemVariants} initial="hidden" animate="visible"
          style={{
            fontFamily: 'var(--font-body)', fontSize: 'clamp(14px,1.6vw,17px)',
            color: 'var(--text-secondary)', lineHeight: 1.65,
            textAlign: 'center', maxWidth: 720, margin: 0,
          }}
        >
          A partir del análisis FODA identificamos relaciones estratégicas entre fortalezas,
          oportunidades, debilidades y amenazas para diseñar acciones de mejora orientadas
          a la continuidad del tratamiento y la trazabilidad del proceso.
        </motion.p>

        <motion.div custom={2} variants={itemVariants} initial="hidden" animate="visible"
          style={{ display: 'flex', alignItems: 'center', gap: 32, justifyContent: 'center' }}
        >
          {/* FODA side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {fodaItems.map((item, i) => (
              <motion.div
                key={item.letter}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: item.dim, border: `2px solid ${item.border}`,
                  borderRadius: 12, padding: '12px 18px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                  minWidth: 110,
                }}
              >
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, color: item.color, lineHeight: 1 }}>{item.letter}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, color: item.color }}>{item.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
          >
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>GENERA</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 40, color: 'var(--primary)', lineHeight: 1 }}>→</div>
          </motion.div>

          {/* CAME side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {cameItems.map((item, i) => (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: 'var(--bg-surface)', border: `2px solid ${item.color}22`,
                  borderLeft: `4px solid ${item.color}`,
                  borderRadius: '0 10px 10px 0', padding: '8px 18px',
                  display: 'flex', alignItems: 'center', gap: 12,
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 800, color: item.color }}>{item.type}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-secondary)', fontWeight: 500 }}>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}
