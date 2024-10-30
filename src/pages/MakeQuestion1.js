import React from 'react';

const MakeQuestion = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.headerText}>Make Question</span>
      </div>

      <div style={styles.attributeContainer}>
        <div style={styles.attribute}>
          <span style={styles.label}>Subject</span>
          <div style={styles.dropdown}>
            <span style={styles.placeholder}>select subject</span>
            <img
              src="https://placeholder.pics/svg/27x27"
              alt="dropdown icon"
              style={styles.icon}
            />
          </div>
        </div>

        <div style={styles.attribute}>
          <span style={styles.label}>Difficulty</span>
          <div style={styles.dropdown}>
            <span style={styles.placeholder}>select difficulty</span>
            <img
              src="https://placeholder.pics/svg/27x27"
              alt="dropdown icon"
              style={styles.icon}
            />
          </div>
        </div>

        <div style={styles.attribute}>
          <span style={styles.label}>Question</span>
          <div style={styles.textarea}>
            <span style={styles.textPlaceholder}>write question</span>
          </div>
        </div>
      </div>

      <div style={styles.nextButton}>
        <span style={styles.nextButtonText}>Next</span>
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
  attributeContainer: {
    width: '365px',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  attribute: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontFamily: 'Inter',
    fontSize: '30px',
    lineHeight: '36.31px',
    fontWeight: '700',
    color: '#000000',
    marginBottom: '10px',
  },
  dropdown: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f6f6f6',
    border: '1px solid #f4d7c0',
    padding: '8px 13px',
    borderRadius: '4px',
  },
  placeholder: {
    color: '#838383',
    fontFamily: 'Inter',
    fontSize: '30px',
    lineHeight: '36.31px',
    fontWeight: '700',
  },
  icon: {
    width: '27px',
    height: '27px',
  },
  textarea: {
    display: 'flex',
    alignItems: 'flex-start',
    backgroundColor: '#f6f6f6',
    border: '1px solid #f4d7c0',
    padding: '8px 13px',
    borderRadius: '4px',
    height: '200px',
  },
  textPlaceholder: {
    color: '#838383',
    fontFamily: 'Inter',
    fontSize: '20px',
    lineHeight: '24.2px',
    fontWeight: '700',
  },
  nextButton: {
    marginTop: '50px',
    backgroundColor: '#fcffeaff',
    padding: '15px 50px',
    borderRadius: '25px',
    border: '2px solid #f4d7c0ff',
  },
  nextButtonText: {
    fontFamily: 'Jersey',
    fontSize: '48px',
    lineHeight: '48px',
    textAlign: 'center',
    color: '#000000',
  },
};

export default MakeQuestion;
