import { Users } from 'lucide-react'
import ImprovementSlide from '../components/ImprovementSlide'

export default function Slide22() {
  return (
    <ImprovementSlide
      number={5}
      title="Gestión de Voluntarios"
      removes="Coordinación manual de turnos por sede sin registro centralizado"
      creates="Módulo de planificación y registro de voluntarios por sede"
      activates="Cobertura garantizada del 100% de las vacantes diarias por centro"
      difficulty="Baja"
      impactedObjectives={['Gestión de voluntarios 100% cobertura (12 meses)', 'Coordinación entre centros']}
      Icon={Users}
    />
  )
}
