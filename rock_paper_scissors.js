const getUserChoice = userInput => {
  if (userInput.toLowerCase() == 'rock' || userInput == 'paper' || userInput == 'scissors') {
    return userInput;
  } else {
    console.log('Please choose rock, paper, or scissors.');
  }
};

const getComputerChoice = () => {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie, well, that\'s cool!';
  }

  if (userChoice === 'rock' && computerChoice === 'scissors') {
    return 'You win!';
  } else {
    return 'You lose! OMG';
  }

  if (userChoice === 'paper' && computerChoice === 'rock') {
    return 'You win! Hooray!!';
  } else {
    return 'You lose! OMG';
  }

  if (userChoice === 'scissors' && computerChoice === 'rock') {
    return 'You win! Hooray!!';
  } else {
    return 'You lose! OMG';
  }
};

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
