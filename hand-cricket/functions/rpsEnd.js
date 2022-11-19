// end rps game and show final result
export function rpsEnd() {
  hideContainer(rpsGameContainer);
  showContainer(rpsGameResultContainer);

  // checking computer obtained rps points greater than player
  if (computerRpsPoints > playerRpsPoints) {
    rpsFinalResultPara.innerHTML = `
      <img src="../images/computer.jpg" alt="computer image">
      
      computer total points - <strong>${computerRpsPoints}</strong>
      
      <br>

      <img src="../images/player.jpg" alt="player image">

      player total points - <strong>${playerRpsPoints}</strong>
      
      <br><br>
      Final result - 
      
      <img src="../images/computer.jpg" alt="computer image">

      <b>computer</b> wins rock,paper,scissors.
      `;

    // generating random ball or bat decision for computer
    let randomInt = Math.floor(Math.random() * 2);
    let computerChoiceForCricket = randomInt === 0 ? "ball" : "bat";

    // generating image for ball or bat from random choice
    let computerCricketImg = "";
    if (computerChoiceForCricket === "ball") {
      computerCricketImg = "../images/ball.png";
    } else {
      computerCricketImg = "../images/bat.png";
    }

    rpsFinalResultPara.innerHTML += `<br><br>
      <img src="../images/computer.jpg" alt="computer image">
      
      Computer decided to <strong>${computerChoiceForCricket}</strong>
      
      <img src="${computerCricketImg}" alt="${computerChoiceForCricket}">
      `;
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
      <img src="../images/computer.jpg" alt="computer image">

      computer total points - <strong>${computerRpsPoints}</strong>
      
      <br>

      <img src="../images/player.jpg" alt="player image">

      player total points - <strong>${playerRpsPoints}</strong>

      <br><br>
      Final result - 
      
      <img src="../images/player.jpg" alt="player image">

      <b>you</b> wins rock,paper,scissors.
     `;
    showContainer(ballOrBatContainer);
    whoWonRps = "player";
  }
}
