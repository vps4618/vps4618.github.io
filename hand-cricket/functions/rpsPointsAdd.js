// rps game score counting
export function rpsPointsAdd() {
  // setting counter ids
  let counter1Id = 0;
  let counter2Id = 0;
  let counter3Id = 0;
  let counter4Id = 0;
  let counter5Id = 0;

  // disabling button for three seconds
  rpsButton.disabled = true;
  counter1Id = setTimeout(() => {
    rpsButton.disabled = false;
  }, 3000);

  // showing counter
  counter2Id = setTimeout(() => {
    rpsCounterPara.innerHTML = "timer - 0";
  }, 0);
  counter3Id = setTimeout(() => {
    rpsCounterPara.innerHTML = "timer - 1";
  }, 1000);
  counter4Id = setTimeout(() => {
    rpsCounterPara.innerHTML = "timer - 2";
  }, 2000);
  counter5Id = setTimeout(() => {
    rpsCounterPara.innerHTML = "";
  }, 3000);

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

    // initiating image source
    let computerImgSrc = "";
    let playerImgSrc = "";

    if (computerChoice === "rock") {
      computerImgSrc = "../images/rock.png";
    } else if (computerChoice === "paper") {
      computerImgSrc = "../images/paper.png";
    } else {
      computerImgSrc = "../images/scissors.png";
    }

    if (playerChoice === "rock") {
      playerImgSrc = "../images/rock.png";
    } else if (playerChoice === "paper") {
      playerImgSrc = "../images/paper.png";
    } else {
      playerImgSrc = "../images/scissors.png";
    }

    // check whether playerChoice === computerChoice then tie that round
    if (playerChoice === computerChoice) {
      //play sound
      buttonClickSound.play();

      result = `
      <img src="../images/computer.jpg" alt="computer image">

      computer - <strong>${computerChoice}</strong> 

      <img src="${computerImgSrc}" alt="${computerChoice + " img"}">
      
      <br>
      
      <img src="../images/player.jpg" alt="player image">

      player - <strong>${playerChoice}</strong>
      
      <img src="${playerImgSrc}" alt="${playerChoice + " img"}">
      
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
        //play sound
        playerLossRpsRoundSound.play();

        // computer wins this round
        result = `
        <img src="../images/computer.jpg" alt="computer image">

        computer - <strong>${computerChoice}</strong>

        <img src="${computerImgSrc}" alt="${computerChoice + " img"}">
        
        <br>
        
        <img src="../images/player.jpg" alt="player image">

        player - <strong>${playerChoice}</strong>
        
        <img src="${playerImgSrc}" alt="${playerChoice + " img"}">
        
        <br>
           
        <img src="../images/computer.jpg" alt="computer image">

        computer wins round <b>${rpsCount}</b>.`;
        rpsResultPara.innerHTML = result;
        computerRpsPoints++;
        rpsCount++;

        // checking round is 3 and player or computer obtain 2 points.If that true ,then show rps final result
        if (
          rpsCount === 3 &&
          (playerRpsPoints === 2 || computerRpsPoints === 2)
        ) {
          // clearing counters and making button enable
          clearTimeout(counter1Id);
          clearTimeout(counter2Id);
          clearTimeout(counter3Id);
          clearTimeout(counter4Id);
          clearTimeout(counter5Id);
          rpsButton.disabled = false;

          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }

        // checking round is 4 and if that true ,end rps game and show final rps game result
        if (rpsCount === 4) {
          // clearing counters and making button enable
          clearTimeout(counter1Id);
          clearTimeout(counter2Id);
          clearTimeout(counter3Id);
          clearTimeout(counter4Id);
          clearTimeout(counter5Id);
          rpsButton.disabled = false;

          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
      } else {
        //play sound
        playerWinRpsRoundSound.play();

        // player wins this round
        result = `
        <img src="../images/computer.jpg" alt="computer image">

        computer - <strong>${computerChoice}</strong>

        <img src="${computerImgSrc}" alt="${computerChoice + " img"}">

         <br>

         <img src="../images/player.jpg" alt="player image">

         player - <strong>${playerChoice}</strong>

        <img src="${playerImgSrc}" alt="${playerChoice + " img"}">

          <br>
        
          <img src="../images/player.jpg" alt="player image">

          you win round <b>${rpsCount}</b>.`;
        rpsResultPara.innerHTML = result;
        playerRpsPoints++;
        rpsCount++;
        if (
          rpsCount === 3 &&
          (playerRpsPoints === 2 || computerRpsPoints === 2)
        ) {
          // clearing counters and making button enable
          clearTimeout(counter1Id);
          clearTimeout(counter2Id);
          clearTimeout(counter3Id);
          clearTimeout(counter4Id);
          clearTimeout(counter5Id);
          rpsButton.disabled = false;

          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
        if (rpsCount === 4) {
          // clearing counters and making button enable
          clearTimeout(counter1Id);
          clearTimeout(counter2Id);
          clearTimeout(counter3Id);
          clearTimeout(counter4Id);
          clearTimeout(counter5Id);
          rpsButton.disabled = false;

          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
      }
    } else if (playerChoice === "rock") {
      if (computerChoice === "paper") {
        //play sound
        playerLossRpsRoundSound.play();

        // computer wins this round
        result = `
        <img src="../images/computer.jpg" alt="computer image">

        computer - <strong>${computerChoice}</strong>
        
        <img src="${computerImgSrc}" alt="${computerChoice + " img"}">
        
        <br>

        <img src="../images/player.jpg" alt="player image">

        player - <strong>${playerChoice}</strong>

        <img src="${playerImgSrc}" alt="${playerChoice + " img"}">
        
        <br>
          
        <img src="../images/computer.jpg" alt="computer image">

        computer wins round <b>${rpsCount}</b>.`;
        rpsResultPara.innerHTML = result;
        computerRpsPoints++;
        rpsCount++;
        if (
          rpsCount === 3 &&
          (playerRpsPoints === 2 || computerRpsPoints === 2)
        ) {
          // clearing counters and making button enable
          clearTimeout(counter1Id);
          clearTimeout(counter2Id);
          clearTimeout(counter3Id);
          clearTimeout(counter4Id);
          clearTimeout(counter5Id);
          rpsButton.disabled = false;

          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
        if (rpsCount === 4) {
          // clearing counters and making button enable
          clearTimeout(counter1Id);
          clearTimeout(counter2Id);
          clearTimeout(counter3Id);
          clearTimeout(counter4Id);
          clearTimeout(counter5Id);
          rpsButton.disabled = false;

          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
      } else {
        //play sound
        playerWinRpsRoundSound.play();

        // player wins this round
        result = `
        <img src="../images/computer.jpg" alt="computer image">

        computer - <strong>${computerChoice}</strong>
        
        <img src="${computerImgSrc}" alt="${computerChoice + " img"}">
        
        <br>

        <img src="../images/player.jpg" alt="player image">

        player - <strong>${playerChoice}</strong>

        <img src="${playerImgSrc}" alt="${playerChoice + " img"}">

          <br>

        <img src="../images/player.jpg" alt="player image">
          
          you win round <b>${rpsCount}</b>.`;
        rpsResultPara.innerHTML = result;
        playerRpsPoints++;
        rpsCount++;
        if (
          rpsCount === 3 &&
          (playerRpsPoints === 2 || computerRpsPoints === 2)
        ) {
          // clearing counters and making button enable
          clearTimeout(counter1Id);
          clearTimeout(counter2Id);
          clearTimeout(counter3Id);
          clearTimeout(counter4Id);
          clearTimeout(counter5Id);
          rpsButton.disabled = false;

          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
        if (rpsCount === 4) {
          // clearing counters and making button enable
          clearTimeout(counter1Id);
          clearTimeout(counter2Id);
          clearTimeout(counter3Id);
          clearTimeout(counter4Id);
          clearTimeout(counter5Id);
          rpsButton.disabled = false;

          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
      }
    } else {
      if (computerChoice === "rock") {
        //play sound
        playerLossRpsRoundSound.play();

        // computer wins this round
        result = `
        <img src="../images/computer.jpg" alt="computer image">

        computer - <strong>${computerChoice}</strong>
        
        <img src="${computerImgSrc}" alt="${computerChoice + " img"}">
        
        <br>

        <img src="../images/player.jpg" alt="player image">

        player - <strong>${playerChoice}</strong>

        <img src="${playerImgSrc}" alt="${playerChoice + " img"}">

          <br>

          <img src="../images/computer.jpg" alt="computer.jpg">

          computer wins round <b>${rpsCount}</b>.`;
        rpsResultPara.innerHTML = result;
        computerRpsPoints++;
        rpsCount++;
        if (
          rpsCount === 3 &&
          (playerRpsPoints === 2 || computerRpsPoints === 2)
        ) {
          // clearing counters and making button enable
          clearTimeout(counter1Id);
          clearTimeout(counter2Id);
          clearTimeout(counter3Id);
          clearTimeout(counter4Id);
          clearTimeout(counter5Id);
          rpsButton.disabled = false;

          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
        if (rpsCount === 4) {
          // clearing counters and making button enable
          clearTimeout(counter1Id);
          clearTimeout(counter2Id);
          clearTimeout(counter3Id);
          clearTimeout(counter4Id);
          clearTimeout(counter5Id);
          rpsButton.disabled = false;

          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
      } else {
        //play sound
        playerWinRpsRoundSound.play();

        // player wins this round
        result = `
        <img src="../images/computer.jpg" alt="computer image">

        computer - <strong>${computerChoice}</strong>
        
        <img src="${computerImgSrc}" alt="${computerChoice + " img"}">
        
        <br>

        <img src="../images/player.jpg" alt="player image">

        player - <strong>${playerChoice}</strong>

        <img src="${playerImgSrc}" alt="${playerChoice + " img"}">
        
          <br>

        <img src="../images/player.jpg" alt="player image">
          
          you win round <b>${rpsCount}</b>.`;
        rpsResultPara.innerHTML = result;
        playerRpsPoints++;
        rpsCount++;
        if (
          rpsCount === 3 &&
          (playerRpsPoints === 2 || computerRpsPoints === 2)
        ) {
          // clearing counters and making button enable
          clearTimeout(counter1Id);
          clearTimeout(counter2Id);
          clearTimeout(counter3Id);
          clearTimeout(counter4Id);
          clearTimeout(counter5Id);
          rpsButton.disabled = false;

          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
        if (rpsCount === 4) {
          // clearing counters and making button enable
          clearTimeout(counter1Id);
          clearTimeout(counter2Id);
          clearTimeout(counter3Id);
          clearTimeout(counter4Id);
          clearTimeout(counter5Id);
          rpsButton.disabled = false;

          rpsButton.innerText = "See rock,paper or scissors result";
          rpsButton.removeAttribute("onclick");
          rpsButton.setAttribute("onclick", "rpsEnd()");
        }
      }
    }
  }
}
