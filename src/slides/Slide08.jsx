import QuizSlide from '../components/QuizSlide';

export default function Slide08() {
  return (
    <QuizSlide
      questionNumber={4}
      question="¿Qué amenaza pone en riesgo la continuidad del tratamiento en CONIN?"
      options={[
        { letter: 'A', text: 'Incremento de costos operativos entre centros', isCorrect: false },
        { letter: 'B', text: 'Falta de interoperabilidad con hospitales', isCorrect: false },
        { letter: 'C', text: 'Variabilidad económica y de donaciones', isCorrect: true },
        { letter: 'D', text: 'Desigualdad en la distribución de recursos territoriales', isCorrect: false },
      ]}
    />
  );
}
