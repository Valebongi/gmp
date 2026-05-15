import FODAToCAMESlide from '../components/FODAToCAMESlide'

export default function Slide11() {
  return (
    <FODAToCAMESlide
      type="DO"
      typeLabel="Reorientación"
      leftEl={{ label: 'Uso de planillas Excel aisladas y gestión fragmentada', category: 'Debilidad', color: 'red' }}
      rightEl={{ label: 'Herramientas de digitalización que mejoran eficiencia operativa', category: 'Oportunidad', color: 'green' }}
      strategy="Digitalizar y unificar los registros de admisión, seguimiento y egreso de pacientes, eliminando los sistemas fragmentados y reemplazándolos por una plataforma integrada."
    />
  )
}
