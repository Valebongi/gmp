import FODAToCAMESlide from '../components/FODAToCAMESlide'

export default function Slide12() {
  return (
    <FODAToCAMESlide
      type="FA"
      typeLabel="Defensa · Adaptación"
      leftEl={{ label: 'Red nacional de +100 centros de prevención', category: 'Fortaleza', color: 'green' }}
      rightEl={{ label: 'Vulnerabilidad socioeconómica y altas tasas de abandono del tratamiento', category: 'Amenaza', color: 'red' }}
      strategy="Fortalecer la continuidad del tratamiento implementando un sistema de alertas tempranas que detecte inasistencias y active protocolos de seguimiento familiar."
    />
  )
}
