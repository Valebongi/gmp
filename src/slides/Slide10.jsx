import FODAToCAMESlide from '../components/FODAToCAMESlide'

export default function Slide10() {
  return (
    <FODAToCAMESlide
      type="FO"
      typeLabel="Crecimiento · Ofensivas"
      leftEl={{ label: 'Método CONIN estandarizado con +30 años de aplicación', category: 'Fortaleza', color: 'green' }}
      rightEl={{ label: 'Herramientas de digitalización y sistemas cloud disponibles', category: 'Oportunidad', color: 'green' }}
      strategy="Desarrollar un sistema de gestión integral basado en los protocolos del Método CONIN, aprovechando las herramientas digitales para centralizar la información en todos los centros."
    />
  )
}
