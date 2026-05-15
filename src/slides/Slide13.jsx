import FODAToCAMESlide from '../components/FODAToCAMESlide'

export default function Slide13() {
  return (
    <FODAToCAMESlide
      type="DA"
      typeLabel="Supervivencia · Transformación"
      leftEl={{ label: 'Falta de trazabilidad en la gestión de donaciones', category: 'Debilidad', color: 'red' }}
      rightEl={{ label: 'Variabilidad en donaciones y contexto económico inestable', category: 'Amenaza', color: 'red' }}
      strategy="Implementar trazabilidad total de donaciones con visibilidad en tiempo real del stock por centro y redistribución de excedentes entre sedes."
    />
  )
}
