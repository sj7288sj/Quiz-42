import React, { useState } from 'react';
import background from '../assets/background.png';
import { useNavigate } from "react-router-dom";
import './ResultComponent.css';

const QuizPage = () => {
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState(Array(4).fill(false));

  const handleAnswerClick = (index) => {
    setSelectedAnswers(prevSelectedAnswers => {
      const newSelectedAnswers = [...prevSelectedAnswers];
      newSelectedAnswers[index] = !newSelectedAnswers[index];
      return newSelectedAnswers;
    });
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.headerImage}>
        <div style={styles.headerTextContainer}>
          <span style={styles.headerText}>Libft | easy</span>
        </div>
        <div style={styles.headerTextContainer}>
          <span style={styles.headerText}>0 / 10</span>
        </div>
      </div>

      <div style={styles.mainContainer}>
        {/* Question Section */}
        <div style={styles.questionContainer}>
          <div style={styles.questionNumber}>1</div>
          <div style={styles.questionText}>Question related to Libft</div>
        </div>

        {/* Answers Section */}
        <div style={styles.answersContainer}>
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} style={styles.answer} onClick={() => handleAnswerClick(i)}>
              <span style={{ ...styles.answerNumber, color: selectedAnswers[i] ? 'red' : 'black' }}>
                {`①②③④`[i]}
              </span>
              <span style={{ ...styles.answerText, color: selectedAnswers[i] ? 'red' : 'black' }}>
                {'asdfasdfasd'}
              </span>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div style={styles.nextButtonContainer}>
          <span style={styles.nextButtonText} onClick={() => { navigate('/QuizResult') }}>
            Next
          </span>
        </div>

        {/* Go to Main Button */}
        <div style={styles.goToMainButtonContainer}>
          <span style={styles.goToMainButtonText} onClick={() => { navigate('/') }}>
            Back to main
          </span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    overflow: 'auto',
  },
  headerImage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '20px',
    boxShadow: '3px -3px 10px rgba(0, 0, 0, 0.4)',
    padding: '30px',
    margin: '50px, 50px',
  },
  headerTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '340px',
    height: '20px',
    padding: '20 10px',
    marginBottom: '16px',
  },
  headerText: {
    fontFamily: 'Jersey',
    fontSize: '32px',
    color: '#000',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '20px',
    boxShadow: '3px -3px 10px rgba(0, 0, 0, 0.4)',
    padding: '30px',
    margin: '50px, 0',
  },
  questionContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '21px 16px',
    gap: '16px',
  },
  questionNumber: {
    fontSize: '80px',
    fontWeight: '400',
    color: '#000',
  },
  questionText: {
    fontSize: '23px',
    fontWeight: '400',
    color: '#000',
  },
  answersContainer: {
    padding: '0 16px',
  },
  answer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    paddingBottom: '8px',
    cursor: 'pointer',
  },
  answerNumber: {
    fontSize: '30px',
    fontWeight: '400',
  },
  answerText: {
    fontSize: '19px',
    fontWeight: '400',
  },
  nextButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '340px',
    height: '59px',
    backgroundColor: '#fcffeaff',
    borderRadius: '25px',
    border: '2px solid #f4d7c0ff',
    margin: '8px 0',
  },
  nextButtonText: {
    fontSize: '48px',
    color: '#000',
  },
  goToMainButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '102px',
    height: '41px',
    backgroundColor: '#ffeceaff',
    borderRadius: '25px',
    border: '2px solid #f4d7c0ff',
  },
  goToMainButtonText: {
    fontFamily: 'Jersey',
    fontSize: '20px',
    color: '#000',
  },
};

export default QuizPage;
