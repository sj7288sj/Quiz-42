import React from 'react';

function ChooseTile(props)
{
	return(
	<div style={styles.attribute}>
	  <span style={styles.label}>{props.title}</span>
	  <div style={styles.dropdown}>
		<span style={styles.placeholder}>{props.substitle}</span>
		<img
		  src="https://placeholder.pics/svg/27x27"
		  alt="dropdown icon"
		  style={styles.icon}
		/>
	  </div>
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
};


export default ChooseTile;
