import React, { useState } from 'react';

function TextTile(props)
{
	const [inputValue, setInputValue] = useState(''); // Initialize input value with props.text

  const handleChange = (event) => {
    setInputValue(event.target.value); // Update state as user types
  };

  return (
    <div style={styles.attribute}>
      <span style={styles.label}>{props.title}</span>
      <div style={styles.box}>
        <input
          type="text" // Use type text for single-line input
          value={inputValue} // Controlled input
          onChange={handleChange} // Update state on change
          style={styles.input} // Apply styles to the input
          placeholder={props.text} // Placeholder text
        />
      </div>
    </div>
  );
}


const styles = {
	input: {
		flex: 1, // Allow input to fill the available space
		padding: '10px', // Padding for the input
		border: 'none', // Remove border on input
		outline: 'none', // Remove outline on focus
		fontSize: '16px', // Font size for the input
		borderRadius: '5px', // Match the box's border radius
	  },
	box: {
		display: 'flex', // Use flexbox for layout
		alignItems: 'center', // Center the text vertically
		padding: '10px', // Padding inside the box
		border: '1px solid #ccc', // Light gray border
		borderRadius: '5px', // Rounded corners
		backgroundColor: '#fff', // White background
		minHeight: '50px', // Minimum height for the input field
		width: '100%', // Full width
		boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
		transition: 'border-color 0.3s ease', // Transition for hover effect
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
  
export default TextTile;
