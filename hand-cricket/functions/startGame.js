// start game by clicking start button
export function startGame() {
  buttonClickSound.play();
  hideContainer(welcomeScreenContainer);
  showContainer(infoContainer);
}
