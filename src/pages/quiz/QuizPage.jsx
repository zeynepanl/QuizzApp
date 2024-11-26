import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchQuestions } from "../../api/questions"; // API function

function QuizPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const difficulty = location.state?.difficulty || "easy";

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const data = await fetchQuestions(10, difficulty); 
        setQuestions(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load questions:", error);
      }
    };

    getQuestions();
  }, [difficulty]);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/results", { state: { score, total: questions.length } });
    }
  };

  if (loading) {
    return <h1 className="text-center text-purple-700 text-3xl">Loading Questions...</h1>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-400 to-purple-100">
      {/* Soru Numarası ve Metni */}
      <h2 className="text-xl font-bold mb-6 text-black">
        {currentQuestion + 1}/{questions.length} - {questions[currentQuestion].question}
      </h2>

      {/* Şıklar */}
      <div className="flex flex-col gap-4">
        {[...questions[currentQuestion].incorrect_answers, questions[currentQuestion].correct_answer]
          .sort(() => Math.random() - 0.5) // Shuffle options
          .map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="bg-purple-600 text-white py-3 px-6 rounded-full shadow-md hover:bg-purple-700 transition focus:outline-none"
            >
              {option}
            </button>
          ))}
      </div>
    </div>
  );
}

export default QuizPage;
