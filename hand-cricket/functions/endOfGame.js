// end result
export function endOfGame() {
  hideContainer(cricketGameContainer);
  showContainer(endGameContainer);

  // processing final result of handcricket game
  if (playerCricketPoints > computerCricketPoints) {
    // play sound
    playerWinningCricketSound.play();

    endResultPara.innerHTML = `
        <img src="../images/player.jpg" alt="player image">
        
        Your Total Points - ${playerCricketPoints}

        <br>
        
        <img  src="../images/computer.jpg" alt="computer image">

        Computer Total Points - ${computerCricketPoints}

        <br>
        Final Result - 
        
        <img src="../images/player.jpg" alt="player image">

        <b>You</b> won this handCricket Game by ${
          playerCricketPoints - computerCricketPoints
        } points!!!
      `;
  } else if (playerCricketPoints < computerCricketPoints) {
    // play sound
    playerLosingCricketSound.play();

    endResultPara.innerHTML = `
        <img src="../images/player.jpg" alt="player image">

        Your Total Points - ${playerCricketPoints}
        
        <br>

        <img src="../images/computer.jpg" alt="computer image">

        Computer Total Points - ${computerCricketPoints}
        
        <br>
        
        Final Result - 
        
        <img src="../images/computer.jpg" alt="computer image">

        <b>Computer</b> won this handCricket Game by ${
          computerCricketPoints - playerCricketPoints
        } points.
      `;
  } else {
    // play sound
    buttonClickSound.play();

    endResultPara.innerHTML = `
    <img src="../images/player.jpg" alt="player image">

    Your Total Points - ${playerCricketPoints}
    
    <br>

    <img src="../images/computer.jpg" alt="computer image">

    Computer Total Points - ${computerCricketPoints}
    
    <br>
    
    Final Result - Draw Game !!!
  `;
  }

  // adding click event listener to replay button
  document.getElementById("replayButton").addEventListener("click", () => {
    // play sound
    yesSound.play();

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

    threeInputsPlayerEnteredInRow = [];

    hideContainer(endGameContainer);
    showContainer(rpsGameContainer);

    // reset rock,paper scissors game
    rpsResultPara.innerHTML = "";

    let rpsSelect = document.getElementById("rpsInputSelect");
    rpsSelect.selectedIndex = 0;
    rpsButton.innerText = "Enter";
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
    cricketButton.innerText = "Enter";
    cricketButton.removeAttribute("onclick");
    cricketButton.setAttribute("onclick", "addCricketPoints()");
    whoBat.innerText = "";

    // reset final container
    endResultPara.innerHTML = "";
  });
}
