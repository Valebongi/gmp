import { LifeBuoy } from 'lucide-react'
import CAMEStrategySlide from '../components/CAMEStrategySlide'

export default function Slide17() {
  return (
    <CAMEStrategySlide
      type="DA"
      typeName="Supervivencia · Transformación"
      strategy="Implementar trazabilidad total de donaciones con visibilidad en tiempo real del stock disponible por centro, redistribución de excedentes y reportes de impacto para donantes."
      actions={[
        'Crear módulo de gestión de donaciones con stock en tiempo real por sede',
        'Habilitar redistribución automática de excedentes entre centros con déficit',
        'Generar reportes trimestrales de impacto para donantes individuales e institucionales',
        'Lograr trazabilidad del 100% de las donaciones recibidas (económicas y en especie)',
      ]}
      Icon={LifeBuoy}
    />
  )
}
