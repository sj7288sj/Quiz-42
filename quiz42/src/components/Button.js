function Button(props){
	const style =  {
	backgroundColor: '#fcffeaff',
    borderRadius: '25px',
    padding: '15px 50px',
    border: '2px solid #f4d7c0',
	}

	return(
		<button style={style}>
			{props.text}
		</button>

	)

}
export default Button