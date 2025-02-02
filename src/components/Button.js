import React from 'react';
import { useNavigate } from "react-router-dom";

function Button(props) {
  const navigate = useNavigate();
  
  // Optional args to URL query string
  const argsString = props.args ? new URLSearchParams(props.args).toString() : '';

  const style = {
    layout: {
      margin: '30px 0',
      backgroundColor: '#fcffeaff',
      padding: '15px 50px',
      borderRadius: '25px',
      border: '2px solid #f4d7c0ff',
      width: '400px',
    },
    text: {
      fontFamily: 'Jersey',
      fontSize: '48px',
      lineHeight: '48px',
      textAlign: 'center',
      color: '#000000',
    },
  };

  return (
    <button
      style={style.layout}
      onClick={() => {
        if (argsString)
          navigate(`${props.nextPathOnClick}?${argsString}`);
        else
          navigate(props.nextPathOnClick);
      }}
    >
      <span style={style.text}>{props.text}</span>
    </button>
  );
}

export default Button;
