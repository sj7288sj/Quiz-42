import React from 'react';
import background from '../assets/background.png';
import ChooseTile from '../components/chooseTile';

const MakeQuestion = () => {
	const subjects = ["Libft", "ft_printf", "get_next_line", "Born2beroot", "push_swap", "minitalk", "so_long", "pipex", "Philosophers", "minishell", "cub3D", "NetPractice", "ft_server", "CPP Modules", "Inception", "ft_containers", "ft_irc", "webserv", "ft_transcendence"];
	const level = ["easy", "medium", "hard"];
  return (
	<div style={styles.container}>
	<div style={styles.header}>
	  <span style={styles.headerText}>Select Types</span>
	</div>
	<div style={styles.whiteDropDown}>
	<div style={styles.attributeContainer}>
	<ChooseTile title="Subject" text="select subject" option={subjects}/>
	<ChooseTile title="Difficulty" text="select difficulty" option={level}/>

	  </div>

      <div style={styles.nextButton}>
        <span style={styles.nextButtonText}>Next</span>
      </div>
	  </div>
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
		overflow: 'auto',
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
  nextButton: {
    marginTop: '50px',
    backgroundColor: '#fcffeaff',
    padding: '15px 50px',
    borderRadius: '25px',
    border: '2px solid #f4d7c0ff',
  },
  nextButtonText: {
    fontFamily: 'Jersey',
    fontSize: '48px',
    lineHeight: '48px',
    textAlign: 'center',
    color: '#000000',
  },
};

export default MakeQuestion;
