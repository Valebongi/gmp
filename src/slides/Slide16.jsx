import { Shield } from 'lucide-react'
import CAMEStrategySlide from '../components/CAMEStrategySlide'

export default function Slide16() {
  return (
    <CAMEStrategySlide
      type="FA"
      typeName="Defensa · Adaptación"
      strategy="Fortalecer la continuidad del tratamiento mediante un sistema de alertas tempranas que detecte inasistencias superiores a 2 semanas y active protocolos automáticos de seguimiento familiar."
      actions={[
        'Implementar alertas automáticas por inasistencias superiores a 2 semanas',
        'Crear protocolo digital de contacto y seguimiento con la familia',
        'Reducir la tasa de abandono de tratamiento en un 25%',
        'Registrar causas de abandono para generar datos predictivos de riesgo',
      ]}
      Icon={Shield}
    />
  )
}
