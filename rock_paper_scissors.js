const getUserChoice = userInput => {
  if (
    userInput.toLowerCase() == 'rock' ||
    userInput == 'paper' ||
    userInput == 'scissors'
  ) {
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
    return "Tie, well, that's cool!";
  }

  if (userChoice === 'rock' && computerChoice === 'scissors') {
    return 'You win!';
  }

  if (userChoice === 'paper' && computerChoice === 'rock') {
    return 'You win!';
  }

  if (userChoice === 'scissors' && computerChoice === 'paper') {
    return 'You win!';
  }

  return 'You lose! OMG';
};

const playGame = () => {
  let userChoiceInput = prompt('Scissors or Rock or Paper');
  const userChoice = getUserChoice(userChoiceInput);
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};


const playGame2 = () => {
  let userChoices = ['scissors', 'rock', 'paper'];
  let userChoiceInput = userChoices[Math.floor(Math.random() * 3)];

  const userChoice = getUserChoice(userChoiceInput);
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

// uncomment to run playGame() function that will prompt a question for the user
// playGame();

// uncomment and run the function playGame2 below to run non-prompting code
playGame2();
