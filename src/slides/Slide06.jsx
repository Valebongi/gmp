import QuizSlide from '../components/QuizSlide';

export default function Slide06() {
  return (
    <QuizSlide
      questionNumber={2}
      question="¿Qué fortaleza permitía sostener el modelo CONIN a lo largo del tiempo?"
      options={[
        { letter: 'A', text: 'Financiamiento estatal estable', isCorrect: false },
        { letter: 'B', text: 'Método CONIN estandarizado con +30 años de aplicación', isCorrect: true },
        { letter: 'C', text: 'Infraestructura tecnológica avanzada', isCorrect: false },
        { letter: 'D', text: 'Sistema de automatización nacional', isCorrect: false },
      ]}
    />
  );
}
