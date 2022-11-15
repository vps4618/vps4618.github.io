"use strict";
function counter(count) {
  let milliseconds = 0;
  for (let i = 0; i <= count; i++) {
    setTimeout(() => console.log(i), milliseconds);
    milliseconds += 1000;
  }
}
const startButton = document.getElementById("welcomeScreenStartButton");
const welcomeScreenContainer = document.getElementById(
  "welcomeScreenContainer"
);
const infoContainer = document.getElementById("infoContainer");
const infoBoxButton = document.getElementById("infoBoxButton");
const rpsGameContainer = document.getElementById("rpsGameContainer");
const rpsGameButton = document.getElementById("rpsGameButton");
const infoPara = document.getElementById("infoPara");

let isStartButtonClicked = false;
startButton.addEventListener("click", () => {
  isStartButtonClicked = true;
});

setTimeout(() => {
  if (isStartButtonClicked) {
    welcomeScreenContainer.style.display = "none";
    infoContainer.style.display = "block";
  }
  let isInfoButtonClicked = false;

  infoBoxButton.addEventListener("click", () => {
    isInfoButtonClicked = true;
  });

  setTimeout(() => {
    if (isInfoButtonClicked) {
      infoContainer.style.display = "none";

      let playerRpsPoints = 0;
      let computerRpsPoints = 0;
      let result;

      let isRpsGameButtonClicked = false;

      rpsGameContainer.style.display = "block";

      rpsGameButton.addEventListener("click", () => {
        isRpsGameButtonClicked = true;
      });

      setTimeout(() => {
        if (isRpsGameButtonClicked) {
          let playerChoice = document.getElementById("rpsGameInput").value;
          let computerChoices = ["rock", "paper", "scissors"];
          let randomInt = Math.floor(Math.random() * 3);
          let computerChoice = computerChoices[randomInt];
          if (playerChoice === computerChoice) {
            result = "tie game";
          } else if (playerChoice === "rock") {
            if (computerChoice === "paper") {
              result = `computer wins`;
            } else {
              result = `you win`;
            }
          } else if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
              result = `computer wins`;
            } else {
              result = `you win`;
            }
          } else {
            if (computerChoice === "rock") {
              result = `computer wins`;
            } else {
              result = `you win`;
            }
          }
          infoPara.textContent = result;
          rpsGameContainer.style.display = "none";
          infoContainer.style.display = "block";
        }
      }, 5000);
    }
  }, 5000);
}, 5000);
