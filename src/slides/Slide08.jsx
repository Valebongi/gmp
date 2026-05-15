import QuizSlide from '../components/QuizSlide';

export default function Slide08() {
  return (
    <QuizSlide
      questionNumber={4}
      question="¿Qué amenaza afectaba la continuidad del tratamiento en CONIN?"
      options={[
        { letter: 'A', text: 'Exceso de digitalización en el sector', isCorrect: false },
        { letter: 'B', text: 'Exceso de profesionales disponibles', isCorrect: false },
        { letter: 'C', text: 'Variabilidad en las donaciones y el contexto económico que limita la disponibilidad de recursos', isCorrect: true },
        { letter: 'D', text: 'Exceso de financiamiento externo', isCorrect: false },
      ]}
    />
  );
}
