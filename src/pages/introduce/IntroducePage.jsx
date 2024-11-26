import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import triviaImage from "../../assets/trivia.png"; 

function IntroducePage() {
  const [difficulty, setDifficulty] = useState("");
  const navigate = useNavigate();

  const startQuiz = () => {
    if (difficulty) {
      navigate("/quiz", { state: { difficulty } });
    } else {
      alert("Please select a difficulty level!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-400 to-purple-100">
      {/* Trivia Image */}
      <img
        src={triviaImage}
        alt="Trivia"
        className="w-[500px] h-auto mb-8 max-w-full"
      />

      {/* Difficulty Dropdown */}
      <select
        className="border py-3 px-6 rounded-full mb-4 bg-purple-100 text-purple-700 font-semibold shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="">Select Difficulty Level</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      {/* Start Button */}
      <button
        onClick={startQuiz}
        className="py-3 px-20 rounded-full bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition focus:ring-2 focus:ring-purple-400 focus:outline-none"
      >
        Start Quiz
      </button>
    </div>
  );
}

export default IntroducePage;
