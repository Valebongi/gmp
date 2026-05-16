import QuizSlide from '../components/QuizSlide';

export default function Slide05() {
  return (
    <QuizSlide
      questionNumber={1}
      question="¿Cuál es una de las principales debilidades del proceso en CONIN?"
      options={[
        { letter: 'A', text: 'Falta de profesionales capacitados', isCorrect: false },
        { letter: 'B', text: 'Información fragmentada y registros no integrados', isCorrect: true },
        { letter: 'C', text: 'Falta de cobertura territorial', isCorrect: false },
        { letter: 'D', text: 'Ausencia de protocolos de atención', isCorrect: false },
      ]}
    />
  );
}
