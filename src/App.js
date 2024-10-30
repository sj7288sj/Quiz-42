import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './pages/Main.jsx';
import SelectAttributes from './pages/SelectAttributes.jsx';
import MakeQuestion1 from './pages/MakeQuestion1.jsx';
import MakeQuestion2 from './pages/MakeQuestion2.jsx';
import QuizResults from './pages/QuizResult.jsx';
import QuizLayout from './pages/QuizLayout.jsx';


const QuizApp = () => {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<Main />} /> 
            <Route path="/selectAttributes" element={<SelectAttributes/>}/>
			<Route path="/makeQuestion1" element={<MakeQuestion1/>}/>
            <Route path="/makeQuestion2" element={<MakeQuestion2/>}/>
            <Route path="/quizLayout" element={<QuizLayout/>}/>
			<Route path="/quizResults" element={<QuizResults/>}/>
      </Routes>
    </Router>
  );
};

export default QuizApp;