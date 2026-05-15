import { motion } from 'framer-motion'
import BackgroundSystem from '../components/BackgroundSystem'

export default function Slide25() {
  return (
    <div className="slide">
      <BackgroundSystem variant="default" />
      <div style={{
        position: 'relative', zIndex: 10, width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 20,
      }}>
        <motion.h1
          className="gradient-text"
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px,8vw,110px)', fontWeight: 800, letterSpacing: '-0.06em' }}
        >
          ¿Preguntas?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(13px,1.5vw,16px)', color: 'var(--text-muted)', textAlign: 'center' }}
        >
          Universidad Tecnológica Nacional · 2026
        </motion.p>

        <motion.div
          animate={{ opacity: [1, 0.2, 1], scale: [1, 1.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)' }}
        />
      </div>
    </div>
  )
}
