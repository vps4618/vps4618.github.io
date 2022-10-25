"use strict";
function key(event) {
  if (event.keyCode == 13) {
    // event.which == 13 also works
    if (w == 0) {
      w = setInterval(r, 100);
      setInterval(b, 100);
    }
  }
}
function clickMe(){
  if (w == 0) {
    w = setInterval(r, 100);
    setInterval(b, 100);
  }
}
var w = 0;

// run code
var i = 1;

function r() {
  i = i + 1;
  if (i == 9) {
    i = 1;
  }
  var image = document.getElementById("x");
  image.src = "Run (" + i + ").png";
}

// move background in x axis
var y = 0;

function b() {
  y = y - 20;
  document.getElementById("b").style.backgroundPositionX = y + "px";
}
