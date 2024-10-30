import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './pages/Main.js';
import SelectAttributes from './pages/SelectAttributes.js';


const QuizApp = () => {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/selectAttributes" element={<SelectAttributes />} />
      </Routes>
    </Router>
  );
};

export default QuizApp;