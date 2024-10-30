import React from 'react';

const QuizLayout = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.text}>Subject_name</span>
        <span style={styles.text}>difficulty</span>
        <span style={styles.text}>correct / total</span>
      </div>

      <div style={styles.questionContainer}>
        <span style={styles.questionNumber}>1</span>
        <span style={styles.questionText}>
          question question question question question question question
          question question question question question question question
          question question question question question question
        </span>
      </div>

      <div style={styles.answersContainer}>
        {['1', '2', '3', '4'].map((num, index) => (
          <div key={index} style={styles.answer}>
            <span style={styles.answerNumber}>①②③④"[index]}</span>
            <span style={styles.answerText}>
              answer{num} answer{num} answer{num} answer{num} answer{num} answer{num} answer{num} answer{num} answer{num} answer{num} answer{num} answer{num}
            </span>
          </div>
        ))}
      </div>

      <div style={styles.nextButton}>
        <span style={styles.buttonText}>Next</span>
      </div>

      <div style={styles.goToMain}>
        <span style={styles.mainText}>Go to main</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '412px',
    height: '917px',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: `url('https://placeholder.pics/svg/412x917')`,
    backgroundSize: 'cover',
    padding: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '20px',
  },
  text: {
    fontFamily: 'Jersey',
    fontSize: '32px',
    lineHeight: '32px',
    color: '#000000',
  },
  questionContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '20px',
    width: '100%',
  },
  questionNumber: {
    fontFamily: 'Jersey',
    fontSize: '80px',
    lineHeight: '80px',
    color: '#000000',
    marginRight: '20px',
  },
  questionText: {
    fontFamily: 'Inter',
    fontSize: '23px',
    lineHeight: '27.84px',
    fontWeight: '700',
    color: '#000000',
  },
  answersContainer: {
    width: '100%',
    marginBottom: '30px',
  },
  answer: {
    display: 'flex',
    marginBottom: '10px',
  },
  answerNumber: {
    fontFamily: 'Jersey',
    fontSize: '30px',
    lineHeight: '30px',
    color: '#000000',
    width: '48px',
  },
  answerText: {
    fontFamily: 'Inter',
    fontSize: '19px',
    lineHeight: '22.99px',
    color: '#000000',
    width: '320px',
  },
  nextButton: {
    backgroundColor: '#fcffeaff',
    padding: '15px 50px',
    borderRadius: '25px',
    border: '2px solid #f4d7c0ff',
    marginBottom: '10px',
  },
  buttonText: {
    fontFamily: 'Jersey',
    fontSize: '48px',
    lineHeight: '48px',
    textAlign: 'center',
    color: '#000000',
  },
  goToMain: {
    border: '2px solid #f4d7c0ff',
    borderRadius: '25px',
    padding: '10px',
    backgroundColor: '#ffeceaff',
  },
  mainText: {
    fontFamily: 'Jersey',
    fontSize: '20px',
    lineHeight: '20px',
    textAlign: 'center',
    color: '#000000',
  },
};

export default QuizLayout;
