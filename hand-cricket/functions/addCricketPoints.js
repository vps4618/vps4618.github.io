// add cricket points
export function addCricketPoints() {
  // setting counter ids
  let counter1Id = 0;
  let counter2Id = 0;
  let counter3Id = 0;
  let counter4Id = 0;
  let counter5Id = 0;

  // disabling button for three seconds
  cricketButton.disabled = true;
  counter1Id = setTimeout(() => {
    cricketButton.disabled = false;
  }, 3000);

  // showing counter
  counter2Id = setTimeout(() => {
    cricketCounterPara.innerHTML = "timer - 0";
  }, 0);
  counter3Id = setTimeout(() => {
    cricketCounterPara.innerHTML = "timer - 1";
  }, 1000);
  counter4Id = setTimeout(() => {
    cricketCounterPara.innerHTML = "timer - 2";
  }, 2000);
  counter5Id = setTimeout(() => {
    cricketCounterPara.innerHTML = "";
  }, 3000);

  // checking whether player batting first and player not out
  if (whoBatFirst === "player" && !playerFirstBatAndFailed) {
    // getting player cricket point choice
    let select = document.getElementById("cricketSelect");
    let playerChoice = select.options[select.selectedIndex].value;

    // generating random value for computer
    let computerChoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let randomInt = Math.floor(Math.random() * 10);
    let computerChoice = computerChoices[randomInt].toString();

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

    // checking player value and computer value equal
    if (playerChoice === computerChoice) {
      // play sound
      playerOutSound.play();

      cricketResult.innerHTML = `
      
          <img src="../images/player.jpg" alt="player image">

          player - ${playerChoice}

          <img src="${playerChoiceImg}" alt="${playerChoice + " img"}">
          
          <br>
          
          <img src="../images/computer.jpg" alt="computer image">

          computer - ${computerChoice}

          <img src="${computerChoiceImg}" alt="${computerChoice + " img"}">
          
          <br>
          
          <img src="../images/player.jpg" alt="player image">

          you <b style="color:red">Out</b>.
          <br>
          Now 
          
          <img src="../images/computer.jpg" alt="computer image">

          computer batting, 
          
          <img src="../images/player.jpg" alt="player image">

          you balling.
        `;
      //if so player first bat and out becomes true
      playerFirstBatAndFailed = true;

      whoBat.textContent = "Batting - computer";

      // 1 point added to player
    } else if (playerChoice === "1") {
      // play sound
      buttonClickSound.play();

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
      // play sound
      buttonClickSound.play();

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
      // play sound
      buttonClickSound.play();

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
      // play sound
      buttonClickSound.play();

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
      // play sound
      buttonClickSound.play();

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
      // play sound
      buttonClickSound.play();

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
      // play sound
      buttonClickSound.play();

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
      // play sound
      buttonClickSound.play();

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
      // play sound
      buttonClickSound.play();

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
      // play sound
      buttonClickSound.play();

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

    if (playerChoice === computerChoice) {
      // play sound
      computerOutSound.play();

      cricketResult.innerHTML = `
           
      <img src="../images/player.jpg" alt="player image">

      player - ${playerChoice}

      <img src="${playerChoiceImg}" alt="${playerChoice + " img"}">
      
      <br>
      
      <img src="../images/computer.jpg" alt="computer image">

      computer - ${computerChoice}

      <img src="${computerChoiceImg}" alt="${computerChoice + " img"}">
      
      <br>
      
      <img src="../images/computer.jpg" alt="computer image">

      computer <b style="color:red">Out</b>.
      <br>
      Now 
      
      <img src="../images/player.jpg" alt="player image">

      you batting, 
      
      <img src="../images/computer.jpg" alt="computer image">

      computer balling.
        `;

      // if computer value equal to player value,computer out
      computerFirstBatAndFailed = true;
      whoBat.textContent = "Batting - you";

      // 1 points added to computer
    } else if (computerChoice === "1") {
      // play sound
      buttonClickSound.play();

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
      // play sound
      buttonClickSound.play();

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
      // play sound
      buttonClickSound.play();

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
      // play sound
      buttonClickSound.play();

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
      // play sound
      buttonClickSound.play();

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
      // play sound
      buttonClickSound.play();

      // play sound
      buttonClickSound.play();

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
      // play sound
      buttonClickSound.play();

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
      // play sound
      buttonClickSound.play();

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
      // play sound
      buttonClickSound.play();

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
      // play sound
      buttonClickSound.play();

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

    // if computer value equal to player value ending gameby letting user to click see result button
    if (playerChoice === computerChoice) {
      // play sound
      computerOutSound.play();

      makingCricketGameEnd(
        playerChoice,
        computerChoice,
        playerChoiceImg,
        computerChoiceImg,
        counter1Id,
        counter2Id,
        counter3Id,
        counter4Id,
        counter5Id
      );

      // 1 points added to computer
    } else if (computerChoice === "1") {
      // play sound
      buttonClickSound.play();

      computerCricketPoints += 1;

      // checking whether computer already passed player, then end game.
      if (computerCricketPoints > playerCricketPoints) {
        makingCricketGameEnd(
          playerChoice,
          computerChoice,
          playerChoiceImg,
          computerChoiceImg,
          counter1Id,
          counter2Id,
          counter3Id,
          counter4Id,
          counter5Id
        );
      } else {
        cricketResult.innerHTML = returnResultOfCricket(
          "computer",
          "computer's",
          computerCricketPoints,
          playerChoice,
          computerChoice,
          1
        );
      }

      // 2 points added to computer
    } else if (computerChoice === "2") {
      // play sound
      buttonClickSound.play();

      computerCricketPoints += 2;

      if (computerCricketPoints > playerCricketPoints) {
        makingCricketGameEnd(
          playerChoice,
          computerChoice,
          playerChoiceImg,
          computerChoiceImg,
          counter1Id,
          counter2Id,
          counter3Id,
          counter4Id,
          counter5Id
        );
      } else {
        cricketResult.innerHTML = returnResultOfCricket(
          "computer",
          "computer's",
          computerCricketPoints,
          playerChoice,
          computerChoice,
          2
        );
      }
      // 3 points added to computer
    } else if (computerChoice === "3") {
      // play sound
      buttonClickSound.play();

      computerCricketPoints += 3;

      if (computerCricketPoints > playerCricketPoints) {
        makingCricketGameEnd(
          playerChoice,
          computerChoice,
          playerChoiceImg,
          computerChoiceImg,
          counter1Id,
          counter2Id,
          counter3Id,
          counter4Id,
          counter5Id
        );
      } else {
        cricketResult.innerHTML = returnResultOfCricket(
          "computer",
          "computer's",
          computerCricketPoints,
          playerChoice,
          computerChoice,
          3
        );
      }
      // 4 points added to computer
    } else if (computerChoice === "4") {
      // play sound
      buttonClickSound.play();

      computerCricketPoints += 4;

      if (computerCricketPoints > playerCricketPoints) {
        makingCricketGameEnd(
          playerChoice,
          computerChoice,
          playerChoiceImg,
          computerChoiceImg,
          counter1Id,
          counter2Id,
          counter3Id,
          counter4Id,
          counter5Id
        );
      } else {
        cricketResult.innerHTML = returnResultOfCricket(
          "computer",
          "computer's",
          computerCricketPoints,
          playerChoice,
          computerChoice,
          4
        );
      }
      // 5 points added to computer
    } else if (computerChoice === "5") {
      // play sound
      buttonClickSound.play();

      computerCricketPoints += 5;

      if (computerCricketPoints > playerCricketPoints) {
        makingCricketGameEnd(
          playerChoice,
          computerChoice,
          playerChoiceImg,
          computerChoiceImg,
          counter1Id,
          counter2Id,
          counter3Id,
          counter4Id,
          counter5Id
        );
      } else {
        cricketResult.innerHTML = returnResultOfCricket(
          "computer",
          "computer's",
          computerCricketPoints,
          playerChoice,
          computerChoice,
          5
        );
      }
      // 6 points added to computer
    } else if (computerChoice === "6") {
      // play sound
      buttonClickSound.play();

      computerCricketPoints += 6;

      if (computerCricketPoints > playerCricketPoints) {
        makingCricketGameEnd(
          playerChoice,
          computerChoice,
          playerChoiceImg,
          computerChoiceImg,
          counter1Id,
          counter2Id,
          counter3Id,
          counter4Id,
          counter5Id
        );
      } else {
        cricketResult.innerHTML = returnResultOfCricket(
          "computer",
          "computer's",
          computerCricketPoints,
          playerChoice,
          computerChoice,
          6
        );
      }
      // 7 points added to computer
    } else if (computerChoice === "7") {
      // play sound
      buttonClickSound.play();

      computerCricketPoints += 7;

      if (computerCricketPoints > playerCricketPoints) {
        makingCricketGameEnd(
          playerChoice,
          computerChoice,
          playerChoiceImg,
          computerChoiceImg,
          counter1Id,
          counter2Id,
          counter3Id,
          counter4Id,
          counter5Id
        );
      } else {
        cricketResult.innerHTML = returnResultOfCricket(
          "computer",
          "computer's",
          computerCricketPoints,
          playerChoice,
          computerChoice,
          7
        );
      }
      // 8 points added to computer
    } else if (computerChoice === "8") {
      // play sound
      buttonClickSound.play();

      computerCricketPoints += 8;

      if (computerCricketPoints > playerCricketPoints) {
        makingCricketGameEnd(
          playerChoice,
          computerChoice,
          playerChoiceImg,
          computerChoiceImg,
          counter1Id,
          counter2Id,
          counter3Id,
          counter4Id,
          counter5Id
        );
      } else {
        cricketResult.innerHTML = returnResultOfCricket(
          "computer",
          "computer's",
          computerCricketPoints,
          playerChoice,
          computerChoice,
          8
        );
      }
      // 9 points added to computer
    } else if (computerChoice === "9") {
      // play sound
      buttonClickSound.play();

      computerCricketPoints += 9;

      if (computerCricketPoints > playerCricketPoints) {
        makingCricketGameEnd(
          playerChoice,
          computerChoice,
          playerChoiceImg,
          computerChoiceImg,
          counter1Id,
          counter2Id,
          counter3Id,
          counter4Id,
          counter5Id
        );
      } else {
        cricketResult.innerHTML = returnResultOfCricket(
          "computer",
          "computer's",
          computerCricketPoints,
          playerChoice,
          computerChoice,
          9
        );
      }
      // 10 points added to computer
    } else {
      // play sound
      buttonClickSound.play();

      computerCricketPoints += 10;

      if (computerCricketPoints > playerCricketPoints) {
        makingCricketGameEnd(
          playerChoice,
          computerChoice,
          playerChoiceImg,
          computerChoiceImg,
          counter1Id,
          counter2Id,
          counter3Id,
          counter4Id,
          counter5Id
        );
      } else {
        cricketResult.innerHTML = returnResultOfCricket(
          "computer",
          "computer's",
          computerCricketPoints,
          playerChoice,
          computerChoice,
          10
        );
      }
    }
    // checking computer first bat and out,then player batting
  } else if (computerFirstBatAndFailed) {
    let cricketSelect = document.getElementById("cricketSelect");
    let playerChoice = cricketSelect.options[cricketSelect.selectedIndex].value;
    let computerChoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let randomInt = Math.floor(Math.random() * 10);
    let computerChoice = computerChoices[randomInt].toString();

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

    // if computer input equals to player input then game end and user can see result
    if (playerChoice === computerChoice) {
      // play sound
      playerOutSound.play();

      makingCricketGameEnd(
        playerChoice,
        computerChoice,
        playerChoiceImg,
        computerChoiceImg,
        counter1Id,
        counter2Id,
        counter3Id,
        counter4Id,
        counter5Id
      );

      // 1 points added to player
    } else if (playerChoice === "1") {
      // play sound
      buttonClickSound.play();

      playerCricketPoints += 1;

      if (playerCricketPoints > computerCricketPoints) {
        makingCricketGameEnd(
          playerChoice,
          computerChoice,
          playerChoiceImg,
          computerChoiceImg,
          counter1Id,
          counter2Id,
          counter3Id,
          counter4Id,
          counter5Id
        );
      } else {
        cricketResult.innerHTML = returnResultOfCricket(
          "you",
          "your",
          playerCricketPoints,
          playerChoice,
          computerChoice,
          1
        );
      }
      // 2 points added to player
    } else if (playerChoice === "2") {
      // play sound
      buttonClickSound.play();

      playerCricketPoints += 2;

      if (playerCricketPoints > computerCricketPoints) {
        makingCricketGameEnd(
          playerChoice,
          computerChoice,
          playerChoiceImg,
          computerChoiceImg,
          counter1Id,
          counter2Id,
          counter3Id,
          counter4Id,
          counter5Id
        );
      } else {
        cricketResult.innerHTML = returnResultOfCricket(
          "you",
          "your",
          playerCricketPoints,
          playerChoice,
          computerChoice,
          2
        );
      }
      // 3 points added to player
    } else if (playerChoice === "3") {
      // play sound
      buttonClickSound.play();

      playerCricketPoints += 3;

      if (playerCricketPoints > computerCricketPoints) {
        makingCricketGameEnd(
          playerChoice,
          computerChoice,
          playerChoiceImg,
          computerChoiceImg,
          counter1Id,
          counter2Id,
          counter3Id,
          counter4Id,
          counter5Id
        );
      } else {
        cricketResult.innerHTML = returnResultOfCricket(
          "you",
          "your",
          playerCricketPoints,
          playerChoice,
          computerChoice,
          3
        );
      }
      // 4 points added to player
    } else if (playerChoice === "4") {
      // play sound
      buttonClickSound.play();

      playerCricketPoints += 4;

      if (playerCricketPoints > computerCricketPoints) {
        makingCricketGameEnd(
          playerChoice,
          computerChoice,
          playerChoiceImg,
          computerChoiceImg,
          counter1Id,
          counter2Id,
          counter3Id,
          counter4Id,
          counter5Id
        );
      } else {
        cricketResult.innerHTML = returnResultOfCricket(
          "you",
          "your",
          playerCricketPoints,
          playerChoice,
          computerChoice,
          4
        );
      }
      // 5 points added to player
    } else if (playerChoice === "5") {
      // play sound
      buttonClickSound.play();

      playerCricketPoints += 5;

      if (playerCricketPoints > computerCricketPoints) {
        makingCricketGameEnd(
          playerChoice,
          computerChoice,
          playerChoiceImg,
          computerChoiceImg,
          counter1Id,
          counter2Id,
          counter3Id,
          counter4Id,
          counter5Id
        );
      } else {
        cricketResult.innerHTML = returnResultOfCricket(
          "you",
          "your",
          playerCricketPoints,
          playerChoice,
          computerChoice,
          5
        );
      }
      // 6 points added to player
    } else if (playerChoice === "6") {
      // play sound
      buttonClickSound.play();

      playerCricketPoints += 6;

      if (playerCricketPoints > computerCricketPoints) {
        makingCricketGameEnd(
          playerChoice,
          computerChoice,
          playerChoiceImg,
          computerChoiceImg,
          counter1Id,
          counter2Id,
          counter3Id,
          counter4Id,
          counter5Id
        );
      } else {
        cricketResult.innerHTML = returnResultOfCricket(
          "you",
          "your",
          playerCricketPoints,
          playerChoice,
          computerChoice,
          6
        );
      }
      // 7 points added to player
    } else if (playerChoice === "7") {
      // play sound
      buttonClickSound.play();

      playerCricketPoints += 7;

      if (playerCricketPoints > computerCricketPoints) {
        makingCricketGameEnd(
          playerChoice,
          computerChoice,
          playerChoiceImg,
          computerChoiceImg,
          counter1Id,
          counter2Id,
          counter3Id,
          counter4Id,
          counter5Id
        );
      } else {
        cricketResult.innerHTML = returnResultOfCricket(
          "you",
          "your",
          playerCricketPoints,
          playerChoice,
          computerChoice,
          7
        );
      }
      // 8 points added to player
    } else if (playerChoice === "8") {
      // play sound
      buttonClickSound.play();

      playerCricketPoints += 8;

      if (playerCricketPoints > computerCricketPoints) {
        makingCricketGameEnd(
          playerChoice,
          computerChoice,
          playerChoiceImg,
          computerChoiceImg,
          counter1Id,
          counter2Id,
          counter3Id,
          counter4Id,
          counter5Id
        );
      } else {
        cricketResult.innerHTML = returnResultOfCricket(
          "you",
          "your",
          playerCricketPoints,
          playerChoice,
          computerChoice,
          8
        );
      }
      // 9 points added to player
    } else if (playerChoice === "9") {
      // play sound
      buttonClickSound.play();

      playerCricketPoints += 9;

      if (playerCricketPoints > computerCricketPoints) {
        makingCricketGameEnd(
          playerChoice,
          computerChoice,
          playerChoiceImg,
          computerChoiceImg,
          counter1Id,
          counter2Id,
          counter3Id,
          counter4Id,
          counter5Id
        );
      } else {
        cricketResult.innerHTML = returnResultOfCricket(
          "you",
          "your",
          playerCricketPoints,
          playerChoice,
          computerChoice,
          9
        );
      }
      // 10 points added to player
    } else {
      // play sound
      buttonClickSound.play();

      playerCricketPoints += 10;

      if (playerCricketPoints > computerCricketPoints) {
        makingCricketGameEnd(
          playerChoice,
          computerChoice,
          playerChoiceImg,
          computerChoiceImg,
          counter1Id,
          counter2Id,
          counter3Id,
          counter4Id,
          counter5Id
        );
      } else {
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
}
