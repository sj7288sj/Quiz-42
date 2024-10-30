import Button from '../components/Button.js';

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
		  {
			question: "What is ReactJS?",
			choices: [
			  "Server-side framework",
			  "User Interface framework",
			  "both a and b",
			  "None of the above",
			],
			type: "MCQs",
			correctAnswer: "User Interface framework",
		  },
		  {
			question:
			  "Identify the one which is used to pass data to components from outside",
			choices: ["Render with arguments", "setState", "PropTypes", "props"],
			type: "MCQs",
			correctAnswer: "props",
		  },
		  {
			question: "In which language is React.js written?",
			choices: ["Python", "Java", "C#", "JavaScript"],
			type: "MCQs",
			correctAnswer: "JavaScript",
		  },
		  {
			question: "What is Babel?",
			choices: [
			  "JavaScript interpreter",
			  "JavaScript transpiler",
			  "JavaScript compiler",
			  "None of the above",
			],
			type: "MCQs",
			correctAnswer: "JavaScript compiler",
		  },
		],
	  };
  const index = 0; // Assuming you want the first question
    // Assuming the structure of quizModule is similar to your previous example
    const quizQuestion = jsQuizz.questions[index];
      // Destructure the question object
      const { correctAnswer, choices } = quizQuestion;

      // Select incorrect answers by filtering out the correct answer
      const incorrectAnswers = choices.filter(choice => choice !== correctAnswer);
      // Randomly select 3 incorrect answers
      const selectedIncorrectAnswers = incorrectAnswers.sort(() => 0.5 - Math.random()).slice(0, 3);
      // Combine the correct answer with the selected incorrect answers
      const allAnswers = [correctAnswer, ...selectedIncorrectAnswers];
      // Shuffle the answers for random order
      const shuffled = allAnswers.sort(() => 0.5 - Math.random());

      // Update state
 // No dependencies, runs once when the component mounts

  // Render the component
 // Render the component
return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.text}>Subject_name</span>
        <span style={styles.text}>difficulty</span>
        <span style={styles.text}>correct / total</span>
      </div>

      <div style={styles.questionContainer}>
        <span style={styles.questionNumber}>1</span>
        <h2>{quizQuestion.question}</h2>  {/* Corrected here */}
        <div style={styles.answersContainer}>
          {shuffled.map((answer, index) => (
            <div key={index} style={styles.answer}>
              <span style={styles.answerNumber}>
                {['①', '②', '③', '④'][index]}
              </span>
              <span style={styles.answerText}>
                {answer}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.nextButton}>
        <Button text="Next" click={() => {}} />
      </div>

      <div style={styles.goToMain}>
        <Button text="Go to main" click="/" />
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
    backgroundImage: `url('https://placeholder.pics/svg/412x917')`,
    backgroundSize: 'cover',
    padding: '20px',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '20px',
  },
  text: {
    fontFamily: 'Jersey',
    fontSize: '32px',
    lineHeight: '32px',
    color: '#000000',
  },

  questionContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '20px',
    width: '100%',
  },
  questionNumber: {
    fontFamily: 'Jersey',
    fontSize: '80px',
    lineHeight: '80px',
    color: '#000000',
    marginRight: '20px',
  },
  questionText: {
    fontFamily: 'Inter',
    fontSize: '23px',
    lineHeight: '27.84px',
    fontWeight: '700',
    color: '#000000',
  },
  answersContainer: {
    width: '100%',
    marginBottom: '30px',
  },
  answer: {
    display: 'flex',
    marginBottom: '10px',
  },
  answerNumber: {
    fontFamily: 'Jersey',
    fontSize: '30px',
    lineHeight: '30px',
    color: '#000000',
    width: '48px',
  },
  answerText: {
    fontFamily: 'Inter',
    fontSize: '19px',
    lineHeight: '22.99px',
    color: '#000000',
    width: '320px',
  },
  nextButton: {
    backgroundColor: '#fcffeaff',
    padding: '15px 50px',
    borderRadius: '25px',
    border: '2px solid #f4d7c0ff',
    marginBottom: '10px',
  },
  buttonText: {
    fontFamily: 'Jersey',
    fontSize: '48px',
    lineHeight: '48px',
    textAlign: 'center',
    color: '#000000',
  },
  goToMain: {
    border: '2px solid #f4d7c0ff',
    borderRadius: '25px',
    padding: '10px',
    backgroundColor: '#ffeceaff',
  },
  mainText: {
    fontFamily: 'Jersey',
    fontSize: '20px',
    lineHeight: '20px',
    textAlign: 'center',
    color: '#000000',
  },
};

export default QuizLayout;
