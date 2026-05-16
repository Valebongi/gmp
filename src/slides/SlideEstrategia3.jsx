import { motion } from 'framer-motion'
import BackgroundSystem from '../components/BackgroundSystem'

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
}

const acciones = [
  { tipo: 'Eliminar', texto: 'Eliminar la gestión descentralizada de donaciones y stock por centro.' },
  { tipo: 'Crear', texto: 'Crear un sistema centralizado de control y redistribución de recursos.' },
  { tipo: 'Crear', texto: 'Implementar gestión dinámica de voluntarios para reorganizar casos críticos ante ausencias.' },
]

const impactos = [
  'Continuidad operativa',
  'Optimización de recursos',
  'Cobertura de casos críticos',
  'Mayor sostenibilidad',
]

export default function SlideEstrategia3() {
  return (
    <div className="slide">
      <BackgroundSystem variant="action" />
      <div style={{
        position: 'relative', zIndex: 10, width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        padding: '0 6%', boxSizing: 'border-box',
      }}>

        {/* TOP */}
        <motion.div
          custom={0} variants={itemVariants} initial="hidden" animate="visible"
          style={{
            flex: '0 0 38%', display: 'flex', flexDirection: 'column', justifyContent: 'center',
            borderBottom: '2px solid var(--border)', paddingBottom: 20,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <span style={{
              background: 'rgba(37,99,235,0.12)', border: '1.5px solid rgba(37,99,235,0.35)',
              borderRadius: 100, padding: '5px 16px',
              fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, color: 'var(--blue)', letterSpacing: '0.1em',
            }}>ESTRATEGIA CAME</span>
            <span style={{
              background: 'rgba(79,70,229,0.10)', border: '1.5px solid rgba(79,70,229,0.25)',
              borderRadius: 100, padding: '5px 16px',
              fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.1em',
            }}>3 / 3</span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(20px,2.4vw,32px)',
            fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 10px 0', letterSpacing: '-0.03em',
          }}>
            Estrategia 3 — <span style={{ color: 'var(--amber)' }}>Gestión eficiente de recursos críticos</span>
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 'clamp(13px,1.4vw,16px)',
            color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0, maxWidth: 820,
          }}>
            Centralizar la gestión de recursos y fortalecer la planificación operativa frente
            a la variabilidad económica y de donaciones.
          </p>
        </motion.div>

        {/* BOTTOM */}
        <div style={{ flex: 1, display: 'flex', gap: 32, alignItems: 'flex-start', paddingTop: 20 }}>

          <div style={{ flex: 1 }}>
            <motion.div custom={1} variants={itemVariants} initial="hidden" animate="visible"
              style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.14em', marginBottom: 12 }}
            >ACCIONES PROPUESTAS</motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {acciones.map((a, i) => (
                <motion.div key={i} custom={2 + i} variants={itemVariants} initial="hidden" animate="visible"
                  style={{
                    display: 'flex', gap: 12, alignItems: 'flex-start',
                    background: 'var(--bg-surface)', border: '1px solid var(--border)',
                    borderLeft: '4px solid var(--amber)', borderRadius: '0 12px 12px 0',
                    padding: '10px 16px', boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700,
                    color: 'var(--amber)', letterSpacing: '0.06em', flexShrink: 0, marginTop: 2,
                    background: 'rgba(217,119,6,0.11)', borderRadius: 6, padding: '2px 8px',
                  }}>{a.tipo}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{a.texto}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div style={{ flex: '0 0 240px' }}>
            <motion.div custom={5} variants={itemVariants} initial="hidden" animate="visible"
              style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.14em', marginBottom: 12 }}
            >IMPACTO ESPERADO</motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {impactos.map((imp, i) => (
                <motion.div key={i} custom={6 + i} variants={itemVariants} initial="hidden" animate="visible"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    background: 'rgba(5,150,105,0.09)', border: '1.5px solid rgba(5,150,105,0.30)',
                    borderRadius: 10, padding: '9px 14px',
                  }}
                >
                  <span style={{ color: 'var(--green)', fontWeight: 800, fontSize: 16, flexShrink: 0 }}>✔</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: '#065F46' }}>{imp}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
