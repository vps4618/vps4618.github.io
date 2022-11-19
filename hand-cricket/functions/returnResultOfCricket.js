// function to return result
export function returnResultOfCricket(
  whoBat,
  whoseTotalPoints,
  whoseTotalPointsVariable,
  playerChoice,
  computerChoice,
  pointsEarned
) {
  // getting hand sign image according player and computer inputs
  let playerChoiceImg = "";
  let computerChoiceImg = "";

  if (playerChoice === "1") {
    playerChoiceImg = "../images/1.png";
  } else if (playerChoice === "2") {
    playerChoiceImg = "../images/2.png";
  } else if (playerChoice === "3") {
    playerChoiceImg = "../images/3.png";
  } else if (playerChoice === "4") {
    playerChoiceImg = "../images/4.png";
  } else if (playerChoice === "5") {
    playerChoiceImg = "../images/5.png";
  } else if (playerChoice === "6") {
    playerChoiceImg = "../images/6.png";
  } else if (playerChoice === "7") {
    playerChoiceImg = "../images/7.png";
  } else if (playerChoice === "8") {
    playerChoiceImg = "../images/8.png";
  } else if (playerChoice === "9") {
    playerChoiceImg = "../images/9.png";
  } else {
    playerChoiceImg = "../images/10.png";
  }

  if (computerChoice === "1") {
    computerChoiceImg = "../images/1.png";
  } else if (computerChoice === "2") {
    computerChoiceImg = "../images/2.png";
  } else if (computerChoice === "3") {
    computerChoiceImg = "../images/3.png";
  } else if (computerChoice === "4") {
    computerChoiceImg = "../images/4.png";
  } else if (computerChoice === "5") {
    computerChoiceImg = "../images/5.png";
  } else if (computerChoice === "6") {
    computerChoiceImg = "../images/6.png";
  } else if (computerChoice === "7") {
    computerChoiceImg = "../images/7.png";
  } else if (computerChoice === "8") {
    computerChoiceImg = "../images/8.png";
  } else if (computerChoice === "9") {
    computerChoiceImg = "../images/9.png";
  } else {
    computerChoiceImg = "../images/10.png";
  }

  // getting image source according to whoBat
  let whoBatImage = "";
  if (whoBat === "you") {
    whoBatImage = "../images/player.jpg";
  } else {
    whoBatImage = "../images/computer.jpg";
  }

  return `
  <img src="../images/player.jpg" alt="player image">
    
  player - ${playerChoice}

  <img src="${playerChoiceImg}" alt="${playerChoice + " img"}">

    <br>

    <img src="../images/computer.jpg" alt="computer image">

    computer - ${computerChoice}

    <img src="${computerChoiceImg}" alt="${computerChoice + " img"}">

    <br>

    <img src="${whoBatImage}" alt="${whoBat + " image"}">

    ${whoBat} earn ${pointsEarned} points.
    
    <br>

    <img src="${whoBatImage}" alt="${whoseTotalPoints + " image"}">

    ${whoseTotalPoints} total points  - ${whoseTotalPointsVariable}
  `;
}
