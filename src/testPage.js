import logo from './assets/logo.svg';

const testPage = () => {
	return (
	  <div style={styles.container}>
		<div style={styles.quizHeader}>
		  <span style={styles.quizText}>QUIZ</span>
		  <img
			src={logo}
			alt="42 Logo"
			style={styles.logo}
		  />
		</div>
		<div style={styles.buttonContainer}>
		  <Button text='2' />
		  <Button text='3'/>
		</div>
	  </div>
	);
  };

export default testPage
  