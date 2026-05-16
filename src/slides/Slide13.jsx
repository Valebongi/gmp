import FODAToCAMESlide from '../components/FODAToCAMESlide'

export default function Slide13() {
  return (
    <FODAToCAMESlide
      type="DA"
      typeLabel="Supervivencia · Transformación"
      leftEl={{ label: 'Gestión descentralizada de donaciones y recursos', category: 'Debilidad', color: 'red' }}
      rightEl={{ label: 'Variabilidad económica y de donaciones', category: 'Amenaza', color: 'red' }}
      strategy="Centralizar la gestión de donaciones y recursos mediante un sistema integrado de control y distribución."
    />
  )
}
