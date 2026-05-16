import FODAToCAMESlide from '../components/FODAToCAMESlide'

export default function Slide12() {
  return (
    <FODAToCAMESlide
      type="FA"
      typeLabel="Defensa · Adaptación"
      leftEl={{ label: 'Voluntariado comprometido y con alto sentido de impacto', category: 'Fortaleza', color: 'green' }}
      rightEl={{ label: 'Variabilidad económica y de donaciones que afecta la continuidad operativa', category: 'Amenaza', color: 'red' }}
      strategy="Fortalecer la gestión del voluntariado mediante programas de capacitación y planificación que permitan sostener la operación frente a la variabilidad de recursos."
    />
  )
}
