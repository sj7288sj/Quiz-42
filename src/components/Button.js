import { useNavigate } from "react-router-dom"

function Button(props){
	const navigate = useNavigate()
	const style =  {
		backgroundColor: '#fcffeaff',
		borderRadius: '25px',
		padding: '15px 50px',
		border: '2px solid #f4d7c0',
		margin: '20px 0',
	}
	return(
		<button
		style={style} 
		onClick={()=> {navigate(props.click)}}
		>
			{props.text}
		</button>
	)

}
export default Button