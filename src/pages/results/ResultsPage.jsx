import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <p className="text-2xl mb-6 text-black">
        Your Score: <span className="font-bold">{score}</span> / {total}
      </p>
      <button
        onClick={() => navigate("/")}
        className="py-3 px-6 rounded-full bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition focus:ring-2 focus:ring-purple-400 focus:outline-none"
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default ResultsPage;
