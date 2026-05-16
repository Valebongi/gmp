import FODAToCAMESlide from '../components/FODAToCAMESlide'

export default function Slide11() {
  return (
    <FODAToCAMESlide
      type="DO"
      typeLabel="Reorientación"
      leftEl={{ label: 'Información fragmentada y registros no integrados', category: 'Debilidad', color: 'red' }}
      rightEl={{ label: 'Herramientas de digitalización para integrar admisión, seguimiento y egreso.', category: 'Oportunidad', color: 'green' }}
      strategy="Implementar una Historia Clínica Digital Unificada interoperable que integre admisión, seguimiento y egreso en una única plataforma."
    />
  )
}
