import { motion } from 'framer-motion';
import { Shield, AlertTriangle, TrendingUp, Zap } from 'lucide-react';
import BackgroundSystem from '../components/BackgroundSystem';

const quadrants = [
  {
    label: 'Fortalezas',
    watermark: 'F',
    colorVar: 'var(--green)',
    dimVar: 'var(--green-dim)',
    borderColor: 'rgba(16,185,129,0.15)',
    Icon: Shield,
    items: [
      'Método CONIN estandarizado (+30 años)',
      'Atención interdisciplinaria comprobada',
      'Red nacional de +100 centros de prevención',
    ],
  },
  {
    label: 'Debilidades',
    watermark: 'D',
    colorVar: 'var(--red)',
    dimVar: 'var(--red-dim)',
    borderColor: 'rgba(239,68,68,0.15)',
    Icon: AlertTriangle,
    items: [
      'Uso de planillas Excel aisladas por centro',
      'Falta de trazabilidad del historial clínico',
      'Gestión administrativa fragmentada',
    ],
  },
  {
    label: 'Oportunidades',
    watermark: 'O',
    colorVar: 'var(--green)',
    dimVar: 'var(--green-dim)',
    borderColor: 'rgba(16,185,129,0.15)',
    Icon: TrendingUp,
    items: [
      'Herramientas de digitalización y sistemas cloud',
      'Uso de datos predictivos para intervención temprana',
      'Expansión mediante alianzas institucionales',
    ],
  },
  {
    label: 'Amenazas',
    watermark: 'A',
    colorVar: 'var(--red)',
    dimVar: 'var(--red-dim)',
    borderColor: 'rgba(239,68,68,0.15)',
    Icon: Zap,
    items: [
      'Vulnerabilidad socioeconómica de las familias',
      'Variabilidad en donaciones y contexto económico',
      'Desconexión institucional entre centros',
    ],
  },
];

export default function Slide09() {
  return (
    <div className="slide">
      <BackgroundSystem variant="foda" />

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
          padding: '20px 6%',
          gap: 16,
        }}
      >
        {/* Header */}
        <motion.div
          custom={0}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center' }}
        >
          <div
            style={{
              background: 'rgba(16,185,129,0.08)',
              border: '1px solid rgba(16,185,129,0.22)',
              borderRadius: 100,
              padding: '5px 14px',
              display: 'inline-block',
              marginBottom: 8,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 10,
                color: 'var(--green)',
                fontWeight: 600,
                letterSpacing: '0.12em',
              }}
            >
              ANÁLISIS FODA
            </span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 3vw, 38px)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: 'var(--text-primary)',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Diagnóstico{' '}
            <span className="gradient-text">estratégico</span>
          </h1>
        </motion.div>

        {/* FODA Grid */}
        <motion.div
          custom={1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: 12,
            width: '100%',
            maxWidth: 840,
            flex: 1,
          }}
        >
          {quadrants.map((q, i) => (
            <motion.div
              key={q.label}
              custom={2 + i}
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(6px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{
                delay: 0.2 + i * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                borderRadius: 14,
                padding: '14px 16px',
                boxShadow: 'var(--shadow-card)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Card header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 10,
                  paddingBottom: 8,
                  borderBottom: `1px solid ${q.borderColor}`,
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    background: q.dimVar,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <q.Icon size={14} color={q.colorVar} />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 13,
                    fontWeight: 700,
                    color: q.colorVar,
                  }}
                >
                  {q.label}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 28,
                    fontWeight: 800,
                    color: q.colorVar,
                    opacity: 0.1,
                    marginLeft: 'auto',
                    lineHeight: 1,
                  }}
                >
                  {q.watermark}
                </span>
              </div>

              {/* Bullet items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {q.items.map((item) => (
                  <div
                    key={item}
                    style={{ display: 'flex', gap: 7, alignItems: 'flex-start' }}
                  >
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: q.colorVar,
                        marginTop: 5,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 12,
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
