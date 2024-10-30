import Button from '../components/Button.js';
import background from '../assets/background.png';

const QuizLayout = () => {
	const jsQuizz = {
		questions: [
		  {
			question:
			  "Which of the following is used in React.js to increase performance?",
			choices: [
			  "Virtual DOM",
			  "Original DOM", 
			  "Both A and B",
			  "None of the above",
			],
			type: "MCQs",
			correctAnswer: "Virtual DOM",
		  },
		  // ... other questions
		],
	};
	const index = 0; // Assuming you want the first question
	const quizQuestion = jsQuizz.questions[index];
	const { correctAnswer, choices } = quizQuestion;
	const incorrectAnswers = choices.filter(choice => choice !== correctAnswer);
	const selectedIncorrectAnswers = incorrectAnswers.sort(() => 0.5 - Math.random()).slice(0, 3);
	const allAnswers = [correctAnswer, ...selectedIncorrectAnswers];
	const shuffled = allAnswers.sort(() => 0.5 - Math.random());

	return (
		<div style={styles.outerContainer}>
			<div style={styles.container}>
				<div style={styles.header}>
					<span style={styles.text}>Subject_name</span>
					<span style={styles.text}>difficulty</span>
					<span style={styles.text}>correct / total</span>
				</div>

				<div style={styles.questionSection}>
					<span style={styles.questionNumber}>1</span>
					<h2 style={styles.questionText}>{quizQuestion.question}</h2>
					<div style={styles.answersContainer}>
						{shuffled.map((answer, index) => (
							<div key={index} style={styles.answer}>
								<span style={styles.answerNumber}>
									{['①', '②', '③', '④'][index]}
								</span>
								<span style={styles.answerText}>{answer}</span>
							</div>
						))}
					</div>
				</div>

				<div style={styles.buttonContainer}>
					<Button text="Next" click={() => {}} customStyle={styles.nextButton} />
					<Button text="Go to main" click="/" customStyle={styles.goToMain} />
				</div>
			</div>
		</div>
	);
};

const styles = {
	outerContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100vw',
		height: '100vh',
    backgroundImage: `url(${background})`,
	},

	container: {
		width: '412px',
		height: '917px',
		backgroundColor: '#ffffff',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
    backgroundImage: `url(${background})`,
		backgroundSize: 'cover',
		padding: '20px',
		overflow: 'auto',
		boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', 
		borderRadius: '10px', 
	},

	header: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
		marginBottom: '40px',
	},

	text: {
		fontFamily: 'Jersey',
		fontSize: '32px',
		color: '#000000',
	},

	questionSection: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		textAlign: 'center',
		marginTop: 'auto',
		marginBottom: 'auto',
	},

	questionNumber: {
		fontFamily: 'Jersey',
		fontSize: '80px',
		color: '#000000',
		marginBottom: '20px',
	},

	questionText: {
		fontFamily: 'Inter',
		fontSize: '24px',
		fontWeight: '700',
		color: '#000000',
		marginBottom: '30px',
		textAlign: 'center',
		padding: '0 20px',
	},

	answersContainer: {
		width: '90%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '15px',
	},

	answer: {
		display: 'flex',
		alignItems: 'center',
		padding: '12px 20px',
		backgroundColor: '#f8f8f8',
		borderRadius: '15px',
		width: '100%',
		transition: 'all 0.3s ease',
		cursor: 'pointer',
	},

	answerNumber: {
		fontFamily: 'Jersey',
		fontSize: '30px',
		color: '#000000',
		width: '48px',
	},

	answerText: {
		fontFamily: 'Inter',
		fontSize: '19px',
		color: '#000000',
		width: '320px',
	},

	buttonContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '20px',
		marginTop: '20px',
		marginBottom: '30px',
	},

	nextButton: {
		backgroundColor: '#fcffeaff',
		padding: '15px 60px',
		borderRadius: '25px',
		border: '2px solid #f4d7c0ff',
		boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
		transition: 'all 0.3s ease',
	},

	goToMain: {
		border: '2px solid #f4d7c0ff',
		borderRadius: '25px',
		padding: '12px 30px',
		backgroundColor: '#ffeceaff',
		boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
		transition: 'all 0.3s ease',
	},
};

export default QuizLayout;
