import { Package } from 'lucide-react'
import ImprovementSlide from '../components/ImprovementSlide'

export default function Slide21() {
  return (
    <ImprovementSlide
      number={4}
      title="Trazabilidad de Donaciones"
      removes="Donaciones sin registro centralizado ni visibilidad entre centros"
      creates="Módulo de donaciones con stock en tiempo real y reportes de impacto trimestrales"
      activates="Redistribución automática de excedentes entre centros con déficit"
      difficulty="Media-Alta"
      impactedObjectives={['Trazabilidad de donaciones 100% (9 meses)', 'Reportes trimestrales para donantes']}
      Icon={Package}
    />
  )
}
