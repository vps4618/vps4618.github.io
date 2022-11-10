//Your First Interactive Game
function startGame() {
  let playGame = confirm("Shall we play rock, paper or scissors ? 😊");
  if (playGame) {
    alert("This game has 5 rounds.🟢");
    gameLogic();
  } else {
    alert("Ok, maybe next time. 🔆");
  }
}

function gameLogic() {
  var playerOnePoints = 0;
  var computerPoints = 0;
  var isGameEnd = false;

  var round = 1;
  while (round <= 5) {
    let playerChoice = prompt(
      `Round ${round}\nPlease enter rock, paper or scissors. 💫`
    );
    if (playerChoice) {
      let playerOne = playerChoice.trim().toLowerCase();
      if (
        playerOne === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissors"
      ) {
        let computerChoice = Math.floor(Math.random() * 3 + 1);
        let computer =
          computerChoice === 1
            ? "rock"
            : computerChoice === 2
            ? "paper"
            : "scissors";
        if (playerOne === computer) {
          alert(
            `Tie Game !\nplayer - ${playerOne} , computer - ${computer}\nBack to round ${round} 😃`
          );
          continue;
        } else if (playerOne === "rock") {
          if (computer === "paper") {
            computerPoints++;
            alert(
              `computer - ${computer} , player - ${playerOne}\nComputer wins round ${round} 😉`
            );
          } else {
            playerOnePoints++;
            alert(
              `computer - ${computer} , player - ${playerOne}\nPlayer wins round ${round} 🤩`
            );
          }
        } else if (playerOne === "paper") {
          if (computer === "scissors") {
            computerPoints++;
            alert(
              `computer - ${computer} , player - ${playerOne}\nComputer wins round ${round} 😉`
            );
          } else {
            playerOnePoints++;
            alert(
              `computer - ${computer} , player - ${playerOne}\nPlayer wins round ${round} 🤩`
            );
          }
        } else {
          if (computer === "rock") {
            computerPoints++;
            alert(
              `computer - ${computer} , player - ${playerOne}\nComputer wins round ${round} 😉`
            );
          } else {
            playerOnePoints++;
            alert(
              `computer - ${computer} , player - ${playerOne}\nPlayer wins round ${round} 🤩`
            );
          }
        }
      } else {
        alert(
          `You didn't enter rock, paper or scissors. Back to Round ${round} 🙂`
        );
        continue;
      }
    } else {
      if (playerChoice === null) {
        alert("I guess you changed your mind. Maybe next time. 😏");
        isGameEnd = true;
        break;
      } else {
        alert("Invalid input 😑. Back to round " + round);
        continue;
      }
    }
    round++;
  }

  // end of rounds

  if (!isGameEnd) {
    if (computerPoints > playerOnePoints) {
      alert(
        `Final winner - Computer\nPlayer total points - ${playerOnePoints} , Computer total points - ${computerPoints} 🎉🎉`
      );
    } else {
      alert(
        `Final winner - Player !!!\nPlayer total points - ${playerOnePoints} , Computer total points - ${computerPoints} 🎉🎉`
      );
    }

    let playAgain = confirm("Play Again ? 😎");
    playAgain ? gameLogic() : alert("Ok, thanks for playing. 🤗");
  }
}
