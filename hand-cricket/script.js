"use strict";

// rps global variables
let rpsCount = 1;
let playerRpsPoints = 0;
let computerRpsPoints = 0;

// cricket player global variables
let playerCricketPoints = 0;
let computerCricketPoints = 0;
let whoBatFirst;
let whoBallFirst;
let whoWonRps;
let playerFirstBatAndFailed = false;
let computerFirstBatAndFailed = false;

// element imports
const welcomeScreenContainer = document.getElementById(
  "welcomeScreenContainer"
);
const infoContainer = document.getElementById("infoContainer");
const rpsGameContainer = document.getElementById("rpsGameContainer");
const rpsResultPara = document.getElementById("rpsResultPara");
const rpsGameButton = document.getElementById("rpsGameButton");
const rpsGameResultContainer = document.getElementById(
  "rpsGameResultContainer"
);
const rpsFinalResultPara = document.getElementById("rpsFinalResultPara");
const ballOrBatContainer = document.getElementById("ballOrBatContainer");
const cricketGameContainer = document.getElementById("cricketGameContainer");
const whoBat = document.getElementById("whoBat");
const cricketResult = document.getElementById("cricketResult");
const rpsButton = document.getElementById("rpsButton");
const cricketButton = document.getElementById("cricketButton");
const endGameContainer = document.getElementById("endGameContainer");
const endResultPara = document.getElementById("endResultPara");

// start game by clicking start button
function startGame() {
  hideContainer(welcomeScreenContainer);
  showContainer(infoContainer);
}

// start rps game to choose who bat or ball first
function rpsGame() {
  hideContainer(infoContainer);
  showContainer(rpsGameContainer);
}

// rps game score counting
function rpsPointsAdd() {
  // checking whether rpsCount not equals to 4
  if (rpsCount !== 4) {
    let result;

    // getting user rps input
    let select = document.getElementById("rpsInputSelect");
    let playerChoice = select.options[select.selectedIndex].value;

    // randomly choosing computer rps input
    let computerChoices = ["rock", "paper", "scissors"];
    let randomInt = Math.floor(Math.random() * 3);
    let computerChoice = computerChoices[randomInt];

    // check whether playerChoice === computerChoice then tie that round
    if (playerChoice === computerChoice) {
      result = `computer - <strong>${computerChoice}</strong> ,
       player - <strong>${playerChoice}</strong>
      <br>
      <b>Tie game.</b>
      <br>
      Back to round ${rpsCount}.
      <br>
      Enter input again.`;
      rpsResultPara.innerHTML = result;
      return;

      // checking playerChoice === paper
    } else if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        // computer wins this round
        result = `computer - <strong>${computerChoice}</strong>
         , player - <strong>${playerChoice}</strong>
         <br>
         computer wins round <b>${rpsCount}</b>.`;
        rpsResultPara.innerHTML = result;
        computerRpsPoints++;
        rpsCount++;

        // checking round is 3 and player or computer obtain 2 points.If that true ,then show rps final result
        if (
          rpsCount === 3 &&
          (playerRpsPoints === 2 || computerRpsPoints === 2)
        ) {
          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }

        // checking round is 4 and if that true ,end rps game and show final rps game result
        if (rpsCount === 4) {
          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
      } else {
        // player wins this round
        result = `computer - <strong>${computerChoice}</strong> , player - <strong>${playerChoice}</strong>
        <br>
        you win round <b>${rpsCount}</b>.`;
        rpsResultPara.innerHTML = result;
        playerRpsPoints++;
        rpsCount++;
        if (
          rpsCount === 3 &&
          (playerRpsPoints === 2 || computerRpsPoints === 2)
        ) {
          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
        if (rpsCount === 4) {
          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
      }
    } else if (playerChoice === "rock") {
      if (computerChoice === "paper") {
        // computer wins this round
        result = `computer - <strong>${computerChoice}</strong> , player - <strong>${playerChoice}</strong>
        <br>
        computer wins round <b>${rpsCount}</b>.`;
        rpsResultPara.innerHTML = result;
        computerRpsPoints++;
        rpsCount++;
        if (
          rpsCount === 3 &&
          (playerRpsPoints === 2 || computerRpsPoints === 2)
        ) {
          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
        if (rpsCount === 4) {
          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
      } else {
        // player wins this round
        result = `computer - <strong>${computerChoice}</strong> , player - <strong>${playerChoice}</strong>
        <br>
        you win round <b>${rpsCount}</b>.`;
        rpsResultPara.innerHTML = result;
        playerRpsPoints++;
        rpsCount++;
        if (
          rpsCount === 3 &&
          (playerRpsPoints === 2 || computerRpsPoints === 2)
        ) {
          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
        if (rpsCount === 4) {
          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
      }
    } else {
      if (computerChoice === "rock") {
        // computer wins this round
        result = `computer - <strong>${computerChoice}</strong> , player - <strong>${playerChoice}</strong>
        <br>
        computer wins round <b>${rpsCount}</b>.`;
        rpsResultPara.innerHTML = result;
        computerRpsPoints++;
        rpsCount++;
        if (
          rpsCount === 3 &&
          (playerRpsPoints === 2 || computerRpsPoints === 2)
        ) {
          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
        if (rpsCount === 4) {
          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
      } else {
        // player wins this round
        result = `computer - <strong>${computerChoice}</strong> , player - <strong>${playerChoice}</strong>
        <br>
        you win round <b>${rpsCount}</b>.`;
        rpsResultPara.innerHTML = result;
        playerRpsPoints++;
        rpsCount++;
        if (
          rpsCount === 3 &&
          (playerRpsPoints === 2 || computerRpsPoints === 2)
        ) {
          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
        if (rpsCount === 4) {
          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
      }
    }
  }
}

// end rps game and show final result
function rpsEnd() {
  hideContainer(rpsGameContainer);
  showContainer(rpsGameResultContainer);

  // checking computer obtained rps points greater than player
  if (computerRpsPoints > playerRpsPoints) {
    rpsFinalResultPara.innerHTML = `
    computer total points - <strong>${computerRpsPoints}</strong> , player total points - <strong>${playerRpsPoints}</strong>
    <br><br>
    Final result - <b>computer</b> wins rock,paper,scissors.
    <hr>`;

    // generating random ball or bat decision for computer
    let randomInt = Math.floor(Math.random() * 2);
    let computerChoiceForCricket = randomInt === 0 ? "ball" : "bat";

    rpsFinalResultPara.innerHTML += `<br><br> Computer decided to <strong>${computerChoiceForCricket}</strong>`;
    whoWonRps = "computer";

    // assigning values to whoBatFirst
    if (computerChoiceForCricket === "bat") {
      whoBatFirst = "computer";
      whoBallFirst = "player";
    } else {
      whoBallFirst = "computer";
      whoBatFirst = "player";
    }
  } else {
    rpsFinalResultPara.innerHTML = `
    computer total points - <strong>${computerRpsPoints}</strong> , player total points - <strong>${playerRpsPoints}</strong>
    <br><br>
    Final result - <b>you</b> wins rock,paper,scissors.
    <hr>`;
    showContainer(ballOrBatContainer);
    whoWonRps = "player";
  }
}

// starting cricket game
function cricketGameStart() {
  hideContainer(rpsGameResultContainer);
  showContainer(cricketGameContainer);

  // checking is player won rps
  if (whoWonRps === "player") {
    let ballOrBatSelect = document.getElementById("ballOrBatSelect");
    let playerChoiceToCricket =
      ballOrBatSelect.options[ballOrBatSelect.selectedIndex].value;

    if (playerChoiceToCricket === "bat") {
      whoBatFirst = "player";
      whoBallFirst = "computer";
    } else {
      whoBallFirst = "player";
      whoBatFirst = "computer";
    }
  }

  // changing names ,player and you
  let whoBatParaText;
  if (whoBatFirst === "player") {
    whoBatParaText = "you";
  } else {
    whoBatParaText = "computer";
  }
  whoBat.textContent = "Batting - " + whoBatParaText;
}

// add cricket points
function addCricketPoints() {
  // checking whether player batting first and player not out
  if (whoBatFirst === "player" && !playerFirstBatAndFailed) {
    // getting player cricket point choice
    let select = document.getElementById("cricketSelect");
    let playerChoice = select.options[select.selectedIndex].value;

    // generating random value for computer
    let computerChoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let randomInt = Math.floor(Math.random() * 10);
    let computerChoice = computerChoices[randomInt];

    // checking player value and computer value equal
    if (playerChoice === computerChoice.toString()) {
      cricketResult.innerHTML = `
        player - ${playerChoice}
        <br>
        computer - ${computerChoice}
        <br>
        you <b>out</b>.
        <br>
        Now computer batting, you balling.
      `;
      //if so player first bat and out becomes true
      playerFirstBatAndFailed = true;

      whoBat.textContent = "Batting - computer";

      // 1 point added to player
    } else if (playerChoice === "1") {
      playerCricketPoints += 1;
      cricketResult.innerHTML = returnResultOfCricket(
        "you",
        "your",
        playerCricketPoints,
        playerChoice,
        computerChoice,
        1
      );

      // 2 point added to player
    } else if (playerChoice === "2") {
      playerCricketPoints += 2;
      cricketResult.innerHTML = returnResultOfCricket(
        "you",
        "your",
        playerCricketPoints,
        playerChoice,
        computerChoice,
        2
      );

      // 3 points added to player
    } else if (playerChoice === "3") {
      playerCricketPoints += 3;
      cricketResult.innerHTML = returnResultOfCricket(
        "you",
        "your",
        playerCricketPoints,
        playerChoice,
        computerChoice,
        3
      );

      // 4 points added to player
    } else if (playerChoice === "4") {
      playerCricketPoints += 4;
      cricketResult.innerHTML = returnResultOfCricket(
        "you",
        "your",
        playerCricketPoints,
        playerChoice,
        computerChoice,
        4
      );

      // 5 point added to player
    } else if (playerChoice === "5") {
      playerCricketPoints += 5;
      cricketResult.innerHTML = returnResultOfCricket(
        "you",
        "your",
        playerCricketPoints,
        playerChoice,
        computerChoice,
        5
      );

      // 6 point added to player
    } else if (playerChoice === "6") {
      playerCricketPoints += 6;
      cricketResult.innerHTML = returnResultOfCricket(
        "you",
        "your",
        playerCricketPoints,
        playerChoice,
        computerChoice,
        6
      );

      // 7 point added to player
    } else if (playerChoice === "7") {
      playerCricketPoints += 7;
      cricketResult.innerHTML = returnResultOfCricket(
        "you",
        "your",
        playerCricketPoints,
        playerChoice,
        computerChoice,
        7
      );

      // 8 point added to player
    } else if (playerChoice === "8") {
      playerCricketPoints += 8;
      cricketResult.innerHTML = returnResultOfCricket(
        "you",
        "your",
        playerCricketPoints,
        playerChoice,
        computerChoice,
        8
      );

      // 9 point added to player
    } else if (playerChoice === "9") {
      playerCricketPoints += 9;
      cricketResult.innerHTML = returnResultOfCricket(
        "you",
        "your",
        playerCricketPoints,
        playerChoice,
        computerChoice,
        9
      );

      // 10 point added to player
    } else {
      playerCricketPoints += 10;
      cricketResult.innerHTML = returnResultOfCricket(
        "you",
        "your",
        playerCricketPoints,
        playerChoice,
        computerChoice,
        10
      );
    }
    // checking computer bat first and not out
  } else if (whoBatFirst === "computer" && !computerFirstBatAndFailed) {
    let select = document.getElementById("cricketSelect");
    let playerChoice = select.options[select.selectedIndex].value;
    let computerChoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let randomInt = Math.floor(Math.random() * 10);
    let computerChoice = computerChoices[randomInt].toString();
    if (playerChoice === computerChoice) {
      cricketResult.innerHTML = `
        player - ${playerChoice}
        <br>
        computer - ${computerChoice}
        <br>
        computer <b>out</b>.
        <br>
        Now computer balling, you batting.
      `;

      // if computer value equal to player value,computer out
      computerFirstBatAndFailed = true;
      whoBat.textContent = "Batting - you";

      // 1 points added to computer
    } else if (computerChoice === "1") {
      computerCricketPoints += 1;
      cricketResult.innerHTML = returnResultOfCricket(
        "computer",
        "computer's",
        computerCricketPoints,
        playerChoice,
        computerChoice,
        1
      );

      // 2 points added to computer
    } else if (computerChoice === "2") {
      computerCricketPoints += 2;
      cricketResult.innerHTML = returnResultOfCricket(
        "computer",
        "computer's",
        computerCricketPoints,
        playerChoice,
        computerChoice,
        2
      );

      // 3 points added to computer
    } else if (computerChoice === "3") {
      computerCricketPoints += 3;
      cricketResult.innerHTML = returnResultOfCricket(
        "computer",
        "computer's",
        computerCricketPoints,
        playerChoice,
        computerChoice,
        3
      );

      // 4 points added to computer
    } else if (computerChoice === "4") {
      computerCricketPoints += 4;
      cricketResult.innerHTML = returnResultOfCricket(
        "computer",
        "computer's",
        computerCricketPoints,
        playerChoice,
        computerChoice,
        4
      );

      // 5 points added to computer
    } else if (computerChoice === "5") {
      computerCricketPoints += 5;
      cricketResult.innerHTML = returnResultOfCricket(
        "computer",
        "computer's",
        computerCricketPoints,
        playerChoice,
        computerChoice,
        5
      );

      // 6 points added to computer
    } else if (computerChoice === "6") {
      computerCricketPoints += 6;
      cricketResult.innerHTML = returnResultOfCricket(
        "computer",
        "computer's",
        computerCricketPoints,
        playerChoice,
        computerChoice,
        6
      );

      // 7 points added to computer
    } else if (computerChoice === "7") {
      computerCricketPoints += 7;
      cricketResult.innerHTML = returnResultOfCricket(
        "computer",
        "computer's",
        computerCricketPoints,
        playerChoice,
        computerChoice,
        7
      );

      // 8 points added to computer
    } else if (computerChoice === "8") {
      computerCricketPoints += 8;
      cricketResult.innerHTML = returnResultOfCricket(
        "computer",
        "computer's",
        computerCricketPoints,
        playerChoice,
        computerChoice,
        8
      );

      // 9 points added to computer
    } else if (computerChoice === "9") {
      computerCricketPoints += 9;
      cricketResult.innerHTML = returnResultOfCricket(
        "computer",
        "computer's",
        computerCricketPoints,
        playerChoice,
        computerChoice,
        9
      );

      // 10 points added to computer
    } else {
      computerCricketPoints += 10;
      cricketResult.innerHTML = returnResultOfCricket(
        "computer",
        "computer's",
        computerCricketPoints,
        playerChoice,
        computerChoice,
        10
      );
    }

    // checking player first bat and out,then batting computer
  } else if (playerFirstBatAndFailed) {
    let cricketSelect = document.getElementById("cricketSelect");
    let playerChoice = cricketSelect.options[cricketSelect.selectedIndex].value;
    let computerChoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let randomInt = Math.floor(Math.random() * 10);
    let computerChoice = computerChoices[randomInt].toString();

    // if computer value equal to player value ending gameby letting user to click see result button
    if (playerChoice === computerChoice) {
      cricketResult.innerHTML = `
      player - ${playerChoice}
      <br>
      computer - ${computerChoice}
      <br>
      End.Click button to see result.
    `;
      cricketButton.innerText = "See Result";
      cricketButton.removeAttribute("onclick");
      cricketButton.setAttribute("onclick", "endOfGame()");

      // 1 points added to computer
    } else if (computerChoice === "1") {
      computerCricketPoints += 1;
      cricketResult.innerHTML = returnResultOfCricket(
        "computer",
        "computer's",
        computerCricketPoints,
        playerChoice,
        computerChoice,
        1
      );
      
      // 2 points added to computer
    } else if (computerChoice === "2") {
      computerCricketPoints += 2;
      cricketResult.innerHTML = returnResultOfCricket(
        "computer",
        "computer's",
        computerCricketPoints,
        playerChoice,
        computerChoice,
        2
      );

      // 3 points added to computer
    } else if (computerChoice === "3") {
      computerCricketPoints += 3;
      cricketResult.innerHTML = returnResultOfCricket(
        "computer",
        "computer's",
        computerCricketPoints,
        playerChoice,
        computerChoice,
        3
      );

      // 4 points added to computer
    } else if (computerChoice === "4") {
      computerCricketPoints += 4;
      cricketResult.innerHTML = returnResultOfCricket(
        "computer",
        "computer's",
        computerCricketPoints,
        playerChoice,
        computerChoice,
        4
      );

      // 5 points added to computer
    } else if (computerChoice === "5") {
      computerCricketPoints += 5;
      cricketResult.innerHTML = returnResultOfCricket(
        "computer",
        "computer's",
        computerCricketPoints,
        playerChoice,
        computerChoice,
        5
      );

      // 6 points added to computer
    } else if (computerChoice === "6") {
      computerCricketPoints += 6;
      cricketResult.innerHTML = returnResultOfCricket(
        "computer",
        "computer's",
        computerCricketPoints,
        playerChoice,
        computerChoice,
        6
      );

      // 7 points added to computer
    } else if (computerChoice === "7") {
      computerCricketPoints += 7;
      cricketResult.innerHTML = returnResultOfCricket(
        "computer",
        "computer's",
        computerCricketPoints,
        playerChoice,
        computerChoice,
        7
      );

      // 8 points added to computer
    } else if (computerChoice === "8") {
      computerCricketPoints += 8;
      cricketResult.innerHTML = returnResultOfCricket(
        "computer",
        "computer's",
        computerCricketPoints,
        playerChoice,
        computerChoice,
        8
      );

      // 9 points added to computer
    } else if (computerChoice === "9") {
      computerCricketPoints += 9;
      cricketResult.innerHTML = returnResultOfCricket(
        "computer",
        "computer's",
        computerCricketPoints,
        playerChoice,
        computerChoice,
        9
      );

      // 10 points added to computer
    } else {
      computerCricketPoints += 10;
      cricketResult.innerHTML = returnResultOfCricket(
        "computer",
        "computer's",
        computerCricketPoints,
        playerChoice,
        computerChoice,
        10
      );
    }

    // checking computer first bat and out,then player batting
  } else if (computerFirstBatAndFailed) {
    let cricketSelect = document.getElementById("cricketSelect");
    let playerChoice = cricketSelect.options[cricketSelect.selectedIndex].value;
    let computerChoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let randomInt = Math.floor(Math.random() * 10);
    let computerChoice = computerChoices[randomInt].toString();

    // if computer input equals to player input then game end and user can see result
    if (playerChoice === computerChoice) {
      cricketResult.innerHTML = `
      player - ${playerChoice}
      <br>
      computer - ${computerChoice}
      <br>
      End.Click button to see result.
    `;
      cricketButton.innerText = "See Result";
      cricketButton.removeAttribute("onclick");
      cricketButton.setAttribute("onclick", "endOfGame()");

      // 1 points added to player
    } else if (playerChoice === "1") {
      playerCricketPoints += 1;
      cricketResult.innerHTML = returnResultOfCricket(
        "you",
        "your",
        playerCricketPoints,
        playerChoice,
        computerChoice,
        1
      );

      // 2 points added to player
    } else if (playerChoice === "2") {
      playerCricketPoints += 2;
      cricketResult.innerHTML = returnResultOfCricket(
        "you",
        "your",
        playerCricketPoints,
        playerChoice,
        computerChoice,
        2
      );

      // 3 points added to player
    } else if (playerChoice === "3") {
      playerCricketPoints += 3;
      cricketResult.innerHTML = returnResultOfCricket(
        "you",
        "your",
        playerCricketPoints,
        playerChoice,
        computerChoice,
        3
      );

      // 4 points added to player
    } else if (playerChoice === "4") {
      playerCricketPoints += 4;
      cricketResult.innerHTML = returnResultOfCricket(
        "you",
        "your",
        playerCricketPoints,
        playerChoice,
        computerChoice,
        4
      );

      // 5 points added to player
    } else if (playerChoice === "5") {
      playerCricketPoints += 5;
      cricketResult.innerHTML = returnResultOfCricket(
        "you",
        "your",
        playerCricketPoints,
        playerChoice,
        computerChoice,
        5
      );

      // 6 points added to player
    } else if (playerChoice === "6") {
      playerCricketPoints += 6;
      cricketResult.innerHTML = returnResultOfCricket(
        "you",
        "your",
        playerCricketPoints,
        playerChoice,
        computerChoice,
        6
      );

      // 7 points added to player
    } else if (playerChoice === "7") {
      playerCricketPoints += 7;
      cricketResult.innerHTML = returnResultOfCricket(
        "you",
        "your",
        playerCricketPoints,
        playerChoice,
        computerChoice,
        7
      );

      // 8 points added to player
    } else if (playerChoice === "8") {
      playerCricketPoints += 8;
      cricketResult.innerHTML = returnResultOfCricket(
        "you",
        "your",
        playerCricketPoints,
        playerChoice,
        computerChoice,
        8
      );

      // 9 points added to player
    } else if (playerChoice === "9") {
      playerCricketPoints += 9;
      cricketResult.innerHTML = returnResultOfCricket(
        "you",
        "your",
        playerCricketPoints,
        playerChoice,
        computerChoice,
        9
      );

      // 10 points added to player
    } else {
      playerCricketPoints += 10;
      cricketResult.innerHTML = returnResultOfCricket(
        "you",
        "your",
        playerCricketPoints,
        playerChoice,
        computerChoice,
        10
      );
    }
  }
}

// function to hide containers
function hideContainer(container) {
  container.style.display = "none";
}

//function to show containers
function showContainer(container) {
  container.style.display = "block";
}

// function to return result
function returnResultOfCricket(
  whoBat,
  whoseTotalPoints,
  whoseTotalPointsVariable,
  playerChoice,
  computerChoice,
  pointsEarned
) {
  return `
  player - ${playerChoice}
  <br>
  computer - ${computerChoice}
  <br>
  ${whoBat} earn ${pointsEarned} points.
  <br>
  ${whoseTotalPoints} total points  - ${whoseTotalPointsVariable}
`;
}

// end result
function endOfGame() {
  hideContainer(cricketGameContainer);
  showContainer(endGameContainer);

  // processing final result of handcricket game
  if (playerCricketPoints > computerCricketPoints) {
    endResultPara.innerHTML = `
      Your Total Points - ${playerCricketPoints} , Computer Total Points - ${computerCricketPoints}
      <br>
      Final Result - <b>You</b> won this handCricket Game by ${
        playerCricketPoints - computerCricketPoints
      } points!!!
    `;
  } else {
    endResultPara.innerHTML = `
      Your Total Points - ${playerCricketPoints} , Computer Total Points - ${computerCricketPoints}
      <br>
      Final Result - <b>Computer</b> won this handCricket Game by ${
        computerCricketPoints - playerCricketPoints
      } points.
    `;
  }

  // adding click event listener to replay button
  document.getElementById("replayButton").addEventListener("click", () => {
    // reset global variables
    rpsCount = 1;
    playerRpsPoints = 0;
    computerRpsPoints = 0;

    playerCricketPoints = 0;
    computerCricketPoints = 0;
    whoBatFirst = "";
    whoBallFirst = "";
    whoWonRps = "";
    playerFirstBatAndFailed = false;
    computerFirstBatAndFailed = false;

    hideContainer(endGameContainer);
    showContainer(rpsGameContainer);

    // reset rock,paper scissors game
    rpsResultPara.innerHTML = "";

    let rpsSelect = document.getElementById("rpsInputSelect");
    rpsSelect.selectedIndex = 0;
    rpsButton.innerText = "Ok";
    rpsButton.removeAttribute("onclick");
    rpsButton.setAttribute("onclick", "rpsPointsAdd()");

    // reset rps result container
    rpsFinalResultPara.innerHTML = "";
    let batBallSelect = document.getElementById("ballOrBatSelect");
    batBallSelect.selectedIndex = 0;
    hideContainer(ballOrBatContainer);

    // reset hand cricket game
    cricketResult.innerHTML = "";
    let cricketSelect = document.getElementById("cricketSelect");
    cricketSelect.selectedIndex = 0;
    cricketButton.innerText = "Ok";
    cricketButton.removeAttribute("onclick");
    cricketButton.setAttribute("onclick", "addCricketPoints()");
    whoBat.innerText = "";

    // reset final container
    endResultPara.innerHTML = "";
  });
}
