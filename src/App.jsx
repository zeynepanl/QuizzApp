import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroducePage from "./pages/introduce/IntroducePage";
import QuizPage from "./pages/quiz/QuizPage";
import ResultsPage from "./pages/results/ResultsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroducePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
