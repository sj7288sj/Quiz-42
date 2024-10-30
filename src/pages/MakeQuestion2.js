import React from 'react';

const MakeQuestionPartTwo = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.headerText}>Make Question</span>
      </div>

      <div style={styles.answerContainer}>
        {['1', '2', '3', '4'].map((num, index) => (
          <div key={index} style={styles.answerBlock}>
            <span style={styles.answerLabel}>Answer {num}</span>
            <div style={styles.textInput}>
              <span style={styles.textPlaceholder}>write answer{num}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.questionCorrect}>
        <span style={styles.correctText}>Which one is correct?</span>
        <div style={styles.circleGroup}>
          {[1, 2, 3, 4].map((option, index) => (
            <div key={index} style={styles.circleBlock}>
              <img
                src="https://placeholder.pics/svg/35x35"
                alt="circle icon"
                style={styles.circle}
              />
              <span style={styles.optionText}>{option}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.finishButton}>
        <span style={styles.buttonText}>Finish creating</span>
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
    padding: '30px',
    backgroundImage: `url('https://placeholder.pics/svg/412x917')`,
    backgroundSize: 'cover',
  },
  header: {
    marginBottom: '20px',
  },
  headerText: {
    fontFamily: 'Jersey',
    fontSize: '60px',
    lineHeight: '60px',
    color: '#000000',
    textShadow: '0 0 2px #fff2e2',
  },
  answerContainer: {
    width: '365px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '30px',
  },
  answerBlock: {
    display: 'flex',
    flexDirection: 'column',
  },
  answerLabel: {
    fontFamily: 'Inter',
    fontSize: '30px',
    lineHeight: '36.31px',
    fontWeight: '700',
    color: '#000000',
    marginBottom: '10px',
  },
  textInput: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    border: '1px solid #f4d7c0',
    padding: '8px 13px',
    borderRadius: '4px',
  },
  textPlaceholder: {
    color: '#838383',
    fontFamily: 'Inter',
    fontSize: '30px',
    lineHeight: '36.31px',
    fontWeight: '700',
  },
  questionCorrect: {
    width: '320px',
    marginBottom: '40px',
  },
  correctText: {
    fontFamily: 'Inter',
    fontSize: '30px',
    lineHeight: '36.31px',
    fontWeight: '700',
    color: '#000000',
    marginBottom: '10px',
  },
  circleGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  circleBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  circle: {
    width: '35px',
    height: '35px',
  },
  optionText: {
    fontFamily: 'Inter',
    fontSize: '30px',
    lineHeight: '36.31px',
    fontWeight: '500',
    color: '#000000',
  },
  finishButton: {
    backgroundColor: '#fcffeaff',
    padding: '15px 50px',
    borderRadius: '25px',
    border: '2px solid #f4d7c0ff',
  },
  buttonText: {
    fontFamily: 'Jersey',
    fontSize: '48px',
    lineHeight: '48px',
    textAlign: 'center',
    color: '#000000',
  },
};

export default MakeQuestionPartTwo;
