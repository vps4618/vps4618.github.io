export function makingCricketGameEnd(playerChoice,computerChoice,playerChoiceImg,computerChoiceImg,counter1Id,counter2Id,counter3Id,counter4Id,counter5Id) {
  cricketResult.innerHTML = `
    <img src="../images/player.jpg" alt="player image">

    player - ${playerChoice}

    <img src="${playerChoiceImg}" alt="${playerChoice + " img"}">
    
    <br>

    <img src="../images/computer.jpg" alt="computer.jpg">

    computer - ${computerChoice}

    <img src="${computerChoiceImg}" alt="${computerChoice + " img"}">
    
    <br>

    End.Click button to see result.
  `;

  // clearing counters and making button enable
  clearTimeout(counter1Id);
  clearTimeout(counter2Id);
  clearTimeout(counter3Id);
  clearTimeout(counter4Id);
  clearTimeout(counter5Id);
  cricketButton.disabled = false;

  cricketButton.innerText = "See Result";
  cricketButton.removeAttribute("onclick");
  cricketButton.setAttribute("onclick", "endOfGame()");
}
