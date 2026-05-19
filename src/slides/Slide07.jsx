import QuizSlide from '../components/QuizSlide';

export default function Slide07() {
  return (
    <QuizSlide
      questionNumber={3}
      question="¿Qué oportunidad del entorno podía mejorar la eficiencia del proceso en CONIN?"
      options={[
        { letter: 'A', text: 'Disminución de la pobreza en el país', isCorrect: false },
        { letter: 'B', text: 'Eliminación de la figura de voluntarios', isCorrect: false },
        { letter: 'C', text: 'Menor demanda de servicios sociales', isCorrect: false },
        { letter: 'D', text: 'Herramientas de digitalización', isCorrect: true },
      ]}
    />
  );
}
