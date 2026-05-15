import { Layers } from 'lucide-react'
import ImprovementSlide from '../components/ImprovementSlide'

export default function Slide19() {
  return (
    <ImprovementSlide
      number={2}
      title="Plataforma Integrada"
      removes="Sistemas aislados y Excel fragmentados por área"
      creates="Plataforma central con módulos integrados: admisión, seguimiento, donaciones, voluntarios"
      difficulty="Alta"
      impactedObjectives={['Sistema unificado core (18 meses)', 'Eficiencia en admisión', 'Retención de pacientes']}
      Icon={Layers}
    />
  )
}
