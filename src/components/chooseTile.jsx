import React from 'react';
import { useState } from 'react';

function ChooseTile(props) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
  
	const toggleDropdown = () => setIsOpen(!isOpen);
  
	const handleOptionClick = (option) => {
	  setSelectedOption(option);
	  setIsOpen(false);
	};
  
	return (
	  <div style={styles.attribute}>
		<span style={styles.label}>{props.title}</span>
		<div style={styles.dropdown} onClick={toggleDropdown}>
		  <span style={styles.placeholder}>{selectedOption ? selectedOption : props.text}</span>
		  <img
			src="https://banner2.cleanpng.com/20180906/ijt/kisspng-computer-icons-arrow-triangle-image-file-antu-draw-triangle4-svg-wikimedia-commons-1713943642703.webp"
			alt="dropdown icon"
			style={styles.icon}
		  />
		</div>
		{isOpen && (
		  <div style={styles.optionsList}>
			{props.option.map((option, index) => (
			  <div
				key={index}
				style={styles.option}
				onClick={() => handleOptionClick(option)}
			  >
				<div style={{display: 'flex', flexDirection: 'row' }}><div style={styles.button}></div>{option}</div>
				
			  </div>
			))}
		  </div>
		)}
	  </div>
	);
  }

const styles = {

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
  optionsList: {
    position: 'relative', // Change to 'fixed' if you want it to remain on the viewport
    //top: '100%', // This positions it directly below the dropdown
    left: '0',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '2px 4px 12px rgba(0, 0, 0, 0.2)',
    marginTop: '4px',
    zIndex: 1,
    maxHeight: '200px', // Set a maximum height
    overflowY: 'auto',  // Add vertical scrolling
  },
  option: {
	marginLeft: '10px',
    padding: '8px 12px',
    fontSize: '16px',
    color: '#333',
    cursor: 'pointer',
  },
  button: {
    width: '20px',
    height: '20px',
    borderRadius: '4px',// Change to '50%' for a circle
    backgroundColor: 'grey',
	marginRight: '12px',
  },

};

export default ChooseTile;
