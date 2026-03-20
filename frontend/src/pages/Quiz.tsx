import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import QuizCard from '../components/QuizCard';

const Quiz = () => {
  const { id } = useParams();

  const mockQuiz = {
    title: "Quiz : Les fractions",
    questions: [
      {
        id: "q1",
        question: "Combien font 1/2 + 1/2 ?",
        options: ["1/4", "1", "2/4", "1.5"],
        answer: "1"
      },
      {
        id: "q2",
        question: "Laquelle de ces fractions est la plus grande ?",
        options: ["1/2", "1/3", "1/4", "1/5"],
        answer: "1/2"
      }
    ]
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = mockQuiz.questions[currentIndex];

  const handleSelect = (option: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.id]: option
    });
  };

  const handleNext = () => {
    if (currentIndex < mockQuiz.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    mockQuiz.questions.forEach(q => {
      if (selectedAnswers[q.id] === q.answer) score++;
    });
    return score;
  };

  return (
    <div className="min-h-[80vh] bg-gray-50 py-12 px-4 flex justify-center">
      <div className="max-w-2xl w-full">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{mockQuiz.title}</h1>
        </div>

        {!showResults ? (
          <>
            <QuizCard
              question={currentQuestion.question}
              options={currentQuestion.options}
              selectedOption={selectedAnswers[currentQuestion.id] || null}
              onSelect={handleSelect}
            />
            <div className="mt-8 flex justify-end">
              <button
                onClick={handleNext}
                disabled={!selectedAnswers[currentQuestion.id]}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold disabled:bg-gray-300"
              >
                {currentIndex === mockQuiz.questions.length - 1 ? 'Terminer' : 'Suivant'}
              </button>
            </div>
          </>
        ) : (
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Quiz terminé !</h2>
            <p className="text-xl mb-8">Score : {calculateScore()} / {mockQuiz.questions.length}</p>
            <Link to={`/courses/${id}`} className="bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-xl mr-4">Retour</Link>
            <Link to="/dashboard" className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl">Tableau de bord</Link>
          </div>
        )}
      </div>
    </div>
  );
};

// C'est LUI le bon export default Quiz qui manquait !
export default Quiz;