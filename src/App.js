import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './pages/Main.js';
import QuizResult from './pages/QuizResult.js';
import SelectAttributes from './pages/SelectAttributes.js';
import MakeQuestion1 from './pages/MakeQuestion1.js';
import MakeQuestion2 from './pages/MakeQuestion2.js';
import QuizLayout from './pages/QuizLayout.js';


const QuizApp = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/QuizResult" element={<QuizResult />} />
        <Route path="/selectAttributes" element={<SelectAttributes/>}/>
			  <Route path="/makeQuestion1" element={<MakeQuestion1/>}/>
        <Route path="/makeQuestion2" element={<MakeQuestion2/>}/>
        <Route path="/quizLayout" element={<QuizLayout/>}/>
      </Routes>
    </Router>
  );
};

export default QuizApp;