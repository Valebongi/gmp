import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle2 } from 'lucide-react';
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

const objectives = [
  { title: 'Sistema unificado core', timeline: '18 meses' },
  { title: 'Eficiencia en admisión —40% tiempos', timeline: '12 meses' },
  { title: 'Retención de pacientes —25% abandono', timeline: '12 meses' },
  { title: 'Trazabilidad de donaciones 100%', timeline: '9 meses' },
  { title: 'Gestión de voluntarios 100% cobertura', timeline: '12 meses' },
];

export default function Slide03() {
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
          gap: 18,
        }}
      >
        {/* Title */}
        <motion.div
          custom={0}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(24px,3vw,38px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            textAlign: 'center',
          }}
        >
          Misión, Visión <span className="gradient-text">y Objetivos</span>
        </motion.div>

        {/* Top cards row */}
        <motion.div
          custom={1}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', gap: 16, width: '100%', maxWidth: 860 }}
        >
          {/* Misión card */}
          <div
            style={{
              flex: 1,
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              borderLeft: '4px solid var(--green)',
              borderRadius: '0 12px 12px 0',
              padding: '14px 18px',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 7,
                  background: 'var(--green-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Target size={15} color="var(--green)" />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 15,
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                Misión
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(13px,1.5vw,16px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Prevenir y tratar la desnutrición infantil mediante un abordaje integral que incluya
              asistencia nutricional, atención de la salud, educación y acompañamiento familiar,
              contribuyendo al desarrollo saludable de los niños.
            </p>
          </div>

          {/* Visión card */}
          <div
            style={{
              flex: 1,
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              borderLeft: '4px solid var(--blue)',
              borderRadius: '0 12px 12px 0',
              padding: '14px 18px',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 7,
                  background: 'var(--blue-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Eye size={15} color="var(--blue)" />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 15,
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                Visión
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(13px,1.5vw,16px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Ser la organización de referencia en Argentina en la erradicación de la desnutrición
              infantil, logrando que cada niño acceda a condiciones de desarrollo pleno en sus
              primeros años en igualdad de oportunidades.
            </p>
          </div>
        </motion.div>

        {/* Section label */}
        <motion.div
          custom={2}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 10,
            color: 'var(--text-muted)',
            letterSpacing: '0.14em',
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          OBJETIVOS ESTRATÉGICOS
        </motion.div>

        {/* Objectives */}
        <motion.div
          custom={3}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            justifyContent: 'center',
            width: '100%',
            maxWidth: 860,
          }}
        >
          {objectives.map(({ title, timeline }, i) => (
            <motion.div
              key={title}
              custom={4 + i}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                boxShadow: 'var(--shadow-card)',
                flex: '1 1 calc(50% - 10px)',
                minWidth: 240,
              }}
            >
              <CheckCircle2 size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  {title}
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    background: 'var(--primary-dim)',
                    border: '1px solid rgba(79,70,229,0.15)',
                    borderRadius: 100,
                    padding: '3px 10px',
                    fontSize: 11,
                    color: 'var(--primary)',
                    fontWeight: 500,
                  }}
                >
                  {timeline}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
