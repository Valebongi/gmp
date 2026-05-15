import { FileText } from 'lucide-react'
import ImprovementSlide from '../components/ImprovementSlide'

export default function Slide18() {
  return (
    <ImprovementSlide
      number={1}
      title="Historia Clínica Digital"
      removes="Registro manual en papel y planillas Excel por paciente"
      creates="Historia clínica digital unificada y accesible desde cualquier centro"
      difficulty="Media"
      impactedObjectives={['Sistema unificado core (18 meses)', 'Eficiencia en admisión —40%', 'Trazabilidad del paciente']}
      Icon={FileText}
    />
  )
}
