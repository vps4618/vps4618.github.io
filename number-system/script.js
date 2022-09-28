"use strict";

import { binaryToDecimal } from "./binaryToDecimal.js";
import { octalToDecimal } from "./octalToDecimal.js";
import { hexaToDecimal } from "./hexaToDecimal.js";
import { decimalToBinary } from "./decimalToBinary.js";
import { decimalToOctal } from "./decimalToOctal.js";
import { decimalToHexa } from "./decimalToHexa.js";

function click() {
  var input = document.getElementById("input").value;
  var para1 = document.getElementById("para1");
  var para2 = document.getElementById("para2");
  var para3 = document.getElementById("para3");
  var para4 = document.getElementById("para4");
  var select = document.getElementById("select");
  var selectedOption = select.options[select.selectedIndex].value;

  if (selectedOption == 1) {
    const decimal = binaryToDecimal(input, input.length);
    para1.textContent = "Decimal : " + decimal;
    para2.textContent = "Binary : " + input;
    para3.textContent = "Octal : " + decimalToOctal(decimal, 4);
    para4.textContent = "Hexa Decimal : " + decimalToHexa(decimal, 4);
  } else if (selectedOption == 2) {
    const decimal = octalToDecimal(input, input.length);
    para1.textContent = "Decimal : " + decimal;
    para2.textContent = "Binary : " + decimalToBinary(decimal, 4);
    para3.textContent = "Octal : " + input;
    para4.textContent = "Hexa Decimal : " + decimalToHexa(decimal, 4);
  } else if (selectedOption == 3) {
    const decimal = hexaToDecimal(input, input.length);
    para1.textContent = "Decimal : " + decimal;
    para2.textContent = "Binary : " + decimalToBinary(decimal, 4);
    para3.textContent = "Octal : " + decimalToOctal(decimal, 4);
    para4.textContent = "Hexa Decimal : " + input;
  } else if (selectedOption == 4) {
    const decimal = input;
    para1.textContent = "Decimal : " + decimal;
    para2.textContent = "Binary : " + decimalToBinary(decimal, 4);
    para3.textContent = "Octal : " + decimalToOctal(decimal, 4);
    para4.textContent = "Hexa Decimal : " + decimalToHexa(decimal, 4);
  }
}

var submit = document.getElementById("button");
submit.addEventListener("click", click);
