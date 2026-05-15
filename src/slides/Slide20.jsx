import { Bell } from 'lucide-react'
import ImprovementSlide from '../components/ImprovementSlide'

export default function Slide20() {
  return (
    <ImprovementSlide
      number={3}
      title="Sistema de Alertas Tempranas"
      creates="Alertas automáticas por inasistencias superiores a 2 semanas"
      activates="Protocolo digital de seguimiento y contacto familiar"
      difficulty="Media"
      impactedObjectives={['Retención de pacientes —25% abandono', 'Continuidad del tratamiento']}
      Icon={Bell}
    />
  )
}
