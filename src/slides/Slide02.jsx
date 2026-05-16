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

const statData = [
  { value: '+100', label: 'centros en Argentina', color: 'var(--primary)' },
  { value: 'ONG', label: 'sin fines de lucro', color: 'var(--green)' },
  { value: 'Atención\nIntegral', label: 'Salud + nutrición\ny entorno familiar', color: 'var(--blue)' },
  { value: '+30 años', label: 'del Método CONIN', color: 'var(--amber)' },
];

const dotColors = ['var(--primary)', 'var(--green)', 'var(--blue)', 'var(--amber)'];

const bullets = [
  'Más de 100 centros de prevención en todo el país',
  'Método CONIN estandarizado con más de 30 años',
  'Atención interdisciplinaria: nutrición, salud y familia',
  'Red de voluntarios y profesionales dedicados',
];

const mapDots = [
  { cx: 36, cy: 22 },
  { cx: 42, cy: 38 },
  { cx: 34, cy: 52 },
  { cx: 44, cy: 62 },
  { cx: 38, cy: 76 },
  { cx: 46, cy: 44 },
];

export default function Slide02() {
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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px 7%',
          gap: 24,
        }}
      >
        {/* Header */}
        <motion.div
          custom={0}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}
        >
          <div
            style={{
              display: 'inline-flex',
              background: 'rgba(79,70,229,0.08)',
              border: '1px solid rgba(79,70,229,0.18)',
              borderRadius: 100,
              padding: '5px 14px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 10,
                color: '#6366F1',
                fontWeight: 600,
                letterSpacing: '0.12em',
              }}
            >
              FUNDACIÓN CONIN
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px,3.5vw,46px)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: 'var(--text-primary)',
              textAlign: 'center',
              margin: 0,
            }}
          >
            ¿Qué es <span className="gradient-text">CONIN</span>?
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          custom={1}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(15px,1.7vw,18px)',
            color: 'var(--text-secondary)',
            maxWidth: 540,
            textAlign: 'center',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Fundación dedicada a prevenir y tratar la desnutrición infantil mediante un modelo integral
          que acompaña al niño y su familia durante toda su trayectoria de recuperación.
        </motion.p>

        {/* Stat cards */}
        <motion.div
          custom={2}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {statData.map(({ value, label, color }, i) => (
            <motion.div
              key={label}
              custom={3 + i}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                borderRadius: 14,
                padding: '16px 18px',
                minWidth: 148,
                textAlign: 'center',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <div
                style={{
                  height: 3,
                  width: '100%',
                  borderRadius: '0 0 2px 2px',
                  marginBottom: 4,
                  background: color,
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(22px,2.8vw,34px)',
                  fontWeight: 800,
                  color,
                  whiteSpace: 'pre-line',
                  lineHeight: 1.1,
                }}
              >
                {value}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                  lineHeight: 1.4,
                  textAlign: 'center',
                }}
              >
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row: map + bullets */}
        <motion.div
          custom={7}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', alignItems: 'center', gap: 32, justifyContent: 'center' }}
        >
          {/* Argentina map */}
          <motion.svg
            custom={7}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            width={110}
            height={175}
            viewBox="0 0 80 130"
            fill="none"
          >
            <path
              d="M32,4 L52,5 L58,18 L56,34 L64,48 L60,70 L52,76 L54,98 L44,122 L34,126 L28,116 L26,98 L28,82 L20,65 L22,48 L18,32 L22,18 Z"
              fill="rgba(79,70,229,0.07)"
              stroke="rgba(79,70,229,0.25)"
              strokeWidth="1.5"
            />
            {mapDots.map(({ cx, cy }, i) => (
              <motion.circle
                key={i}
                cx={cx}
                cy={cy}
                animate={{ r: [2.5, 4, 2.5], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2 + i * 0.4, repeat: Infinity, delay: i * 0.5 }}
                fill="rgba(79,70,229,0.5)"
              />
            ))}
          </motion.svg>

          {/* Bullets */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {bullets.map((text, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: dotColors[i],
                    flexShrink: 0,
                    marginTop: 5,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 15,
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
