import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './pages/Main.js';
import QuizResult from './pages/QuizResult.js';


const QuizApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/QuizResult" element={<QuizResult />} />
      </Routes>
    </Router>
  );
};

export default QuizApp;