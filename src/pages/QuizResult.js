import { useNavigate } from "react-router-dom"
import React from 'react';
import './ResultComponent.css';

const ResultComponent = ({ subjectName, difficulty, total, correct }) => {
  const navigate = useNavigate()
  return (
    <div className="result-container">
      <div className="result-header">
        <h1>Result</h1>
      </div>
      <div className="result-body">
        <div className="result-section">
          <h2>Subject</h2>
          <p>{subjectName}</p>
        </div>
        <div className="result-section">
          <h2>Difficulty</h2>
          <p>{difficulty}</p>
        </div>
        <div className="result-section">
          <h2>You Got..</h2>
          <p>{total} / <span className="correct">{correct}</span></p>
        </div>
      </div>
      <div className="result-footer">
        <button className="back-button" onClick={()=> {navigate('/')}}>
          Back to main
          
        </button>
      </div>
    </div>
  );
};

ResultComponent.defaultProps = {
  subjectName: 'Subject',
  difficulty: 'Difficulty',
  total: 0,
  correct: 0
}

export default ResultComponent;