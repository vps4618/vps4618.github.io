// starting cricket game
export function cricketGameStart() {
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
