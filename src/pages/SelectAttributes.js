import React from 'react';
import background from '../assets/background.png';
import Button from '../components/Button.js';
import ChooseTile from '../components/chooseTile.jsx';


const SelectAttributes = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.headerText}>Select Types</span>
      </div>
	  <div style={styles.whiteDropDown}>
      <div style={styles.attributeContainer}>
      <ChooseTile title="Subject" subtitle="select subject"/>
	  <ChooseTile title="Subject" subtitle="chose subject"/>
      <ChooseTile title="Subject" subtitle="chose subject"/>

        </div>
      </div>
		<Button text="Start" nextPathOnClick="/quizLayout"></Button>
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
	  },
	  whiteDropDown: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',              // Set background to white
		borderRadius: '20px',                   // Add curved corners
		boxShadow: '3px -3px 10px rgba(0, 0, 0, 0.4)',  // Top-right shadow
		padding: '30px',
		margin: '50px, 0',                   // Optional padding for inner spacing
	  },
	  
  header: {
    marginBottom: '50px',
  },
  headerText: {
    fontFamily: 'Jersey',
    fontSize: '60px',
    lineHeight: '60px',
    color: '#000000',
    textShadow:  '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  attributeContainer: {
    width: '365px',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
};

export default SelectAttributes;
