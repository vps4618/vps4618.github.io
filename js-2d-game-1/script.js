function gameOn() {
  setInterval(moveBg, 100);
  setInterval(runAnimation, 100);
}

var bgMoveValue = 0;
function moveBg() {
  bgMoveValue = bgMoveValue - 20;
  document.getElementById("main").style.backgroundPositionX =
    bgMoveValue + "px";
}

var runImageNo = 1;
function runAnimation() {
  runImageNo++;
  if (runImageNo == 9) {
    runImageNo = 1;
  }
  var redHatBoyImage = document.getElementById("redHatBoy");
  redHatBoyImage.src = "Run (" + runImageNo + ").png";
}
