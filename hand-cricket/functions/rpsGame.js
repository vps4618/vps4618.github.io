// start rps game to choose who bat or ball first
export function rpsGame() {
  // play sound
  buttonClickSound.play();

  hideContainer(imgContainer);
  showContainer(rpsGameContainer);
}
