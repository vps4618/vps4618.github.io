// || add sounds
// || add styles

"use strict";

alert(window.innerWidth);

// importing functions
import { addCricketPoints } from "./functions/addCricketPoints.js";
import { cricketGameStart } from "./functions/cricketGameStart.js";
import { endOfGame } from "./functions/endOfGame.js";
import { hideContainer } from "./functions/hideContainer.js";
import { returnResultOfCricket } from "./functions/returnResultOfCricket.js";
import { rpsEnd } from "./functions/rpsEnd.js";
import { rpsGame } from "./functions/rpsGame.js";
import { rpsPointsAdd } from "./functions/rpsPointsAdd.js";
import { showContainer } from "./functions/showContainer.js";
import { startGame } from "./functions/startGame.js";
import { makingCricketGameEnd } from "./functions/makingCricketGameEnd.js";
import { showImg } from "./functions/showImg.js";

// sounds
const playerWinRpsRoundSound = new Audio("sounds/playerWinRpsRound.mp3");
const playerLossRpsRoundSound = new Audio("sounds/playerLossRpsRound.mp3");
const buttonClickSound = new Audio("sounds/buttonClick.mp3");
const computerOutSound = new Audio("sounds/computerOut.mp3");
const okSound = new Audio("sounds/ok.mp3");
const playerLosingCricketSound = new Audio("sounds/playerLosingCricket.wav");
const playerOutSound = new Audio("sounds/playerOut.mp3");
const playerWinningCricketSound = new Audio("sounds/playerWinningCricket.mp3");
const rpsResultSound = new Audio("sounds/rpsResult.wav");
const yesSound = new Audio("sounds/yes.mp3");

// sounds exposing to window
window.buttonClickSound = buttonClickSound;
window.playerLossRpsRoundSound = playerLossRpsRoundSound;
window.playerWinRpsRoundSound = playerWinRpsRoundSound;
window.computerOutSound = computerOutSound;
window.okSound = okSound;
window.playerLosingCricketSound = playerLosingCricketSound;
window.playerOutSound = playerOutSound;
window.playerWinningCricketSound = playerWinningCricketSound;
window.rpsResultSound = rpsResultSound;
window.yesSound = yesSound;

// rps global variables
let rpsCount = 1;
let playerRpsPoints = 0;
let computerRpsPoints = 0;

// fixing reference errors after import functions
window.rpsCount = rpsCount;
window.playerRpsPoints = playerRpsPoints;
window.computerRpsPoints = computerRpsPoints;

// cricket player global variables
let playerCricketPoints = 0;
let computerCricketPoints = 0;
let whoBatFirst;
let whoBallFirst;
let whoWonRps;
let playerFirstBatAndFailed = false;
let computerFirstBatAndFailed = false;

// fixing reference errors after import functions
window.playerCricketPoints = playerCricketPoints;
window.computerCricketPoints = computerCricketPoints;
window.whoBatFirst = whoBatFirst;
window.whoBallFirst = whoBallFirst;
window.whoWonRps = whoWonRps;
window.playerFirstBatAndFailed = playerFirstBatAndFailed;
window.computerFirstBatAndFailed = computerFirstBatAndFailed;

// element imports
// these variables didn't throw errors eventhough functions imported, beacuse these are belong to window object
const welcomeScreenContainer = document.getElementById(
  "welcomeScreenContainer"
);
const infoContainer = document.getElementById("infoContainer");
const rpsGameContainer = document.getElementById("rpsGameContainer");
const rpsResultPara = document.getElementById("rpsResultPara");
const rpsGameResultContainer = document.getElementById(
  "rpsGameResultContainer"
);
const rpsFinalResultPara = document.getElementById("rpsFinalResultPara");
const ballOrBatContainer = document.getElementById("ballOrBatContainer");
const cricketGameContainer = document.getElementById("cricketGameContainer");
const imgContainer = document.getElementById("imgContainer");
const whoBat = document.getElementById("whoBat");
const cricketResult = document.getElementById("cricketResult");
const rpsButton = document.getElementById("rpsButton");
const cricketButton = document.getElementById("cricketButton");
const endGameContainer = document.getElementById("endGameContainer");
const endResultPara = document.getElementById("endResultPara");
const rpsCounterPara = document.getElementById("rpsCounterPara");
const cricketCounterPara = document.getElementById("cricketCounterPara");

// ES6 Modules: Undefined onclick function after import
/* 
Module creates a scope to avoid name collisions.

Either expose your function to window object
*/
window.startGame = startGame;
window.showContainer = showContainer;
window.rpsPointsAdd = rpsPointsAdd;
window.rpsGame = rpsGame;
window.rpsEnd = rpsEnd;
window.returnResultOfCricket = returnResultOfCricket;
window.hideContainer = hideContainer;
window.endOfGame = endOfGame;
window.cricketGameStart = cricketGameStart;
window.addCricketPoints = addCricketPoints;
window.makingCricketGameEnd = makingCricketGameEnd;
window.showImg = showImg;
