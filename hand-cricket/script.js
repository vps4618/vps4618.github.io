"use strict";
let rpsCount = 1;
let playerRpsPoints = 0;
let computerRpsPoints = 0;

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

function startGame() {
  hideContainer(welcomeScreenContainer);
  showContainer(infoContainer);
}

function rpsGame() {
  hideContainer(infoContainer);
  showContainer(rpsGameContainer);
}

function rpsReplay() {
  if (rpsCount !== 4) {
    let result;
    let player = document.getElementById("rpsGameInput").value;
    let playerChoice = player.trim();
    if (
      playerChoice !== "rock" &&
      playerChoice !== "paper" &&
      playerChoice !== "scissors"
    ) {
      result = `Invalid Input.Back to round ${rpsCount}`;
      rpsResultPara.textContent = result;
      document.getElementById("rpsGameInput").value = "";
      return;
    }

    let computerChoices = ["rock", "paper", "scissors"];
    let randomInt = Math.floor(Math.random() * 3);
    let computerChoice = computerChoices[randomInt];

    if (playerChoice === computerChoice) {
      result = `computer-${computerChoice}, player-${playerChoice} -> Tie game.Back to round ${rpsCount}`;
      rpsResultPara.textContent = result;
      document.getElementById("rpsGameInput").value = "";
      return;
    } else if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        result = `computer-${computerChoice}, player-${playerChoice} -> computer wins round ${rpsCount}`;
        rpsResultPara.textContent = result;
        computerRpsPoints++;
        document.getElementById("rpsGameInput").value = "";
        rpsCount++;
        if (rpsCount === 4) {
          rpsEnd(result);
        }
      } else {
        result = `computer-${computerChoice}, player-${playerChoice} -> you win round ${rpsCount}`;
        rpsResultPara.textContent = result;
        playerRpsPoints++;
        document.getElementById("rpsGameInput").value = "";
        rpsCount++;
        if (rpsCount === 4) {
          rpsEnd(result);
        }
      }
    } else if (playerChoice === "rock") {
      if (computerChoice === "paper") {
        result = `computer-${computerChoice}, player-${playerChoice} -> computer wins round ${rpsCount}`;
        rpsResultPara.textContent = result;
        computerRpsPoints++;
        document.getElementById("rpsGameInput").value = "";
        rpsCount++;
        if (rpsCount === 4) {
          rpsEnd(result);
        }
      } else {
        result = `computer-${computerChoice}, player-${playerChoice} -> you win round ${rpsCount}`;
        rpsResultPara.textContent = result;
        playerRpsPoints++;
        document.getElementById("rpsGameInput").value = "";
        rpsCount++;
        if (rpsCount === 4) {
          rpsEnd(result);
        }
      }
    } else {
      if (computerChoice === "rock") {
        result = `computer-${computerChoice}, player-${playerChoice} -> computer wins round ${rpsCount}`;
        rpsResultPara.textContent = result;
        computerRpsPoints++;
        document.getElementById("rpsGameInput").value = "";
        rpsCount++;
        if (rpsCount === 4) {
          rpsEnd(result);
        }
      } else {
        result = `computer-${computerChoice}, player-${playerChoice} -> you win round ${rpsCount}`;
        rpsResultPara.textContent = result;
        playerRpsPoints++;
        document.getElementById("rpsGameInput").value = "";
        rpsCount++;
        if (rpsCount === 4) {
          rpsEnd(result);
        }
      }
    }
  }
}

function rpsEnd(resultOf3rdRound) {
  hideContainer(rpsGameContainer);
  showContainer(rpsGameResultContainer);
  if (computerRpsPoints > playerRpsPoints) {
    rpsFinalResultPara.innerHTML = `3rd round result - ${resultOf3rdRound} <br><br> computer total points - ${computerRpsPoints} , player total points - ${playerRpsPoints} > Final result - computer wins rock,paper,scissors.`;

    let randomInt = Math.floor(Math.random() * 2);
    let computerChoiceForCricket = randomInt === 0 ? "ball" : "bat";

    rpsFinalResultPara.innerHTML += `<br><br> Computer decided to ${computerChoiceForCricket}`;
  } else {
    rpsFinalResultPara.innerHTML = `3rd round result - ${resultOf3rdRound} <br><br> computer total points - ${computerRpsPoints} , player total points - ${playerRpsPoints} > Final result - you wins rock,paper,scissors.`;
    showContainer(ballOrBatContainer);
  }
}

function hideContainer(container) {
  container.style.display = "none";
}

function showContainer(container) {
  container.style.display = "block";
}
