import QuizSlide from '../components/QuizSlide';

export default function Slide05() {
  return (
    <QuizSlide
      questionNumber={1}
      question="¿Cuál era una de las principales debilidades del proceso en CONIN?"
      options={[
        { letter: 'A', text: 'Falta de profesionales capacitados', isCorrect: false },
        { letter: 'B', text: 'Uso de planillas Excel aisladas y PCs compartidas', isCorrect: true },
        { letter: 'C', text: 'Falta de cobertura territorial', isCorrect: false },
        { letter: 'D', text: 'Ausencia de protocolos de atención', isCorrect: false },
      ]}
    />
  );
}
