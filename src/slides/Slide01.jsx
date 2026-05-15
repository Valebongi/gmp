import { motion } from 'framer-motion';
import BackgroundSystem from '../components/BackgroundSystem';

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Slide01() {
  return (
    <div className="slide">
      <BackgroundSystem variant="default" />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: '0 6% 0 7%',
          gap: 48,
        }}
      >
        {/* LEFT COLUMN */}
        <div style={{ flex: '0 0 52%', display: 'flex', flexDirection: 'column' }}>

          {/* Badge */}
          <motion.div
            custom={0}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(79,70,229,0.08)',
              border: '1px solid rgba(79,70,229,0.18)',
              borderRadius: 100,
              padding: '6px 16px',
              marginBottom: 28,
            }}
          >
            <motion.div
              animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#A855F7',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                color: '#6366F1',
                letterSpacing: '0.12em',
                fontWeight: 600,
              }}
            >
              GESTIÓN DE MEJORA DE PROCESOS · UTN · 2025
            </span>
          </motion.div>

          {/* Heading line 1 */}
          <motion.h1
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px,6vw,88px)',
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              color: 'var(--text-primary)',
              margin: 0,
            }}
          >
            Fundación
          </motion.h1>

          {/* Heading line 2 */}
          <motion.h1
            custom={2}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="gradient-text"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px,6vw,88px)',
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              margin: 0,
            }}
          >
            CONIN
          </motion.h1>

          {/* Subtitle */}
          <motion.h1
            custom={3}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(16px,2vw,26px)',
              fontWeight: 400,
              color: 'var(--text-secondary)',
              marginTop: 12,
              marginBottom: 32,
              lineHeight: 1.3,
            }}
          >
            Transformación digital del modelo operativo
          </motion.h1>

          {/* University */}
          <motion.div
            custom={4}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', alignItems: 'center', gap: 10 }}
          >
            <div style={{ height: 1, width: 32, background: 'var(--border-strong)' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)', fontWeight: 500 }}>
              Universidad Tecnológica Nacional · 2025
            </span>
          </motion.div>

          {/* Narrative strip */}
          <motion.div
            custom={5}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'flex',
              marginTop: 28,
              borderRadius: 10,
              overflow: 'hidden',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-card)',
              alignSelf: 'flex-start',
            }}
          >
            {[
              { label: 'PROBLEMA', bg: 'rgba(239,68,68,0.08)', color: 'var(--red)', border: true },
              { label: 'ANÁLISIS', bg: 'rgba(16,185,129,0.08)', color: 'var(--green)', border: true },
              { label: 'ESTRATEGIA', bg: 'rgba(59,130,246,0.08)', color: 'var(--blue)', border: true },
              { label: 'ACCIONES', bg: 'rgba(245,158,11,0.08)', color: 'var(--amber)', border: false },
            ].map(({ label, bg, color, border }) => (
              <div
                key={label}
                style={{
                  padding: '9px 16px',
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  background: bg,
                  color,
                  ...(border ? { borderRight: '1px solid var(--border)' } : {}),
                }}
              >
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.svg
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            width={390}
            height={370}
            viewBox="0 0 320 300"
            fill="none"
          >
            {/* Círculos rellenos sólidos */}
            <circle cx="160" cy="110" r="85" fill="rgba(79,70,229,0.18)" stroke="rgba(79,70,229,0.55)" strokeWidth="2" />
            <circle cx="205" cy="155" r="72" fill="rgba(5,150,105,0.16)" stroke="rgba(5,150,105,0.55)" strokeWidth="2" />
            <circle cx="115" cy="162" r="68" fill="rgba(220,38,38,0.14)" stroke="rgba(220,38,38,0.50)" strokeWidth="2" />
            <circle cx="160" cy="192" r="62" fill="rgba(217,119,6,0.16)" stroke="rgba(217,119,6,0.55)" strokeWidth="2" />

            {/* Label central */}
            <text x="160" y="152" textAnchor="middle" fill="rgba(79,70,229,0.85)" fontSize="16" fontFamily="'Plus Jakarta Sans',sans-serif" fontWeight="800">CONIN</text>

            {/* Labels periféricos */}
            <text x="160" y="36" textAnchor="middle" fill="rgba(79,70,229,0.80)" fontSize="12" fontFamily="'Plus Jakarta Sans',sans-serif" fontWeight="700">Nutrición</text>
            <text x="277" y="162" textAnchor="start" fill="rgba(5,150,105,0.90)" fontSize="12" fontFamily="'Plus Jakarta Sans',sans-serif" fontWeight="700">Salud</text>
            <text x="36" y="170" textAnchor="end" fill="rgba(220,38,38,0.85)" fontSize="12" fontFamily="'Plus Jakarta Sans',sans-serif" fontWeight="700">Familia</text>
            <text x="160" y="272" textAnchor="middle" fill="rgba(217,119,6,0.90)" fontSize="12" fontFamily="'Plus Jakarta Sans',sans-serif" fontWeight="700">Educación</text>
          </motion.svg>
        </div>
      </div>
    </div>
  );
}
