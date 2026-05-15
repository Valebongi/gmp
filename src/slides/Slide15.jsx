import { RefreshCw } from 'lucide-react'
import CAMEStrategySlide from '../components/CAMEStrategySlide'

export default function Slide15() {
  return (
    <CAMEStrategySlide
      type="DO"
      typeName="Reorientación"
      strategy="Digitalizar y unificar los registros clínicos y administrativos de los pacientes, eliminando los sistemas fragmentados y reemplazándolos por una historia clínica digital centralizada."
      actions={[
        'Reemplazar las planillas Excel por historia clínica digital unificada por paciente',
        'Estandarizar y digitalizar los procedimientos de admisión y seguimiento',
        'Reducir en un 40% los tiempos administrativos mediante automatización de procesos',
        'Implementar módulo de egreso con trazabilidad completa del tratamiento',
      ]}
      Icon={RefreshCw}
    />
  )
}
