import React from 'react';
import Button from './components/Button';
const QuizApp = () => {
  return (
    <div style={styles.container}>
      <div style={styles.quizHeader}>
        <span style={styles.quizText}>QUIZ</span>
        <img
          src="https://placeholder.pics/svg/115x115"
          alt="42 Logo"
          style={styles.logo}
        />
      </div>
      <div style={styles.buttonContainer}>
        <Button text='Start' />
        <Button text='Make question'/>
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
    width: '412px',
    height: '917px',   
    backgroundImage: `url('https://placeholder.pics/svg/412x917')`,
    backgroundSize: 'cover',
  },
  quizHeader: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '146px',
  },
  quizText: {
    fontFamily: 'Jersey',
    fontSize: '90px',
    lineHeight: '90px',
    textAlign: 'center',
    color: '#000000',
    textShadow: '0 0 3px #fff2e2',
  },
  logo: {
    width: '115px',
    height: '115px',
    marginLeft: '15px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    marginTop: '150px',
  },
  button: {
    backgroundColor: '#fcffeaff',
    borderRadius: '25px',
    padding: '15px 50px',
    border: '2px solid #f4d7c0',
  },
  buttonText: {
    fontFamily: 'Jersey',
    fontSize: '48px',
    lineHeight: '48px',
    textAlign: 'center',
    color: '#000000',
  },
};

export default QuizApp;