import { TrendingUp } from 'lucide-react'
import CAMEStrategySlide from '../components/CAMEStrategySlide'

export default function Slide14() {
  return (
    <CAMEStrategySlide
      type="FO"
      typeName="Ofensivas · Crecimiento"
      strategy="Desarrollar un sistema de gestión integral basado en los protocolos del Método CONIN, aprovechando las herramientas digitales disponibles para centralizar la operación de todos los centros."
      actions={[
        'Digitalizar los protocolos del Método CONIN como base del nuevo sistema',
        'Implementar plataforma central con módulos integrados para todos los centros',
        'Garantizar interoperabilidad entre módulos: admisión, seguimiento, donaciones y voluntarios',
        'Capacitar al personal en el uso del sistema con base en procedimientos ya conocidos',
      ]}
      Icon={TrendingUp}
    />
  )
}
