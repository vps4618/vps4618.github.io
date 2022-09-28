//decimal to octal
export function decimalToHexa(num, k_prec) {
  let hexa = "";

  // Fetch the integral part of decimal number

  let Integral = parseInt(num, 10);

  // Fetch the fractional part decimal number

  let fractional = num - Integral;

  // Conversion of integral part to

  // hexa equivalent

  while (Integral > 0) {
    let rem = Integral % 16;

    // Append 0 in hexa

    // hexa +=rem

    if (rem == 10) {
      rem = "A";
    } else if (rem == 11) {
      rem = "B";
    } else if (rem == 12) {
      rem = "C";
    } else if (rem == 13) {
      rem = "D";
    } else if (rem == 14) {
      rem = "E";
    } else if (rem == 15) {
      rem = "F";
    } else {
      rem = rem;
    }

    hexa += rem;

    Integral = parseInt(Integral / 16, 10);
  }

  // Reverse string to get original hexa

  // equivalent

  hexa = reverse(hexa);

  // Append point before conversion of

  // fractional part

  hexa += ".";

  // Conversion of fractional part to

  // hexa equivalent

  while (k_prec-- > 0) {
    // Find next bit in fraction

    fractional *= 16;

    let fract_bit = parseInt(fractional, 10);

    fractional -= fract_bit;

    if (fract_bit == 10) {
      fract_bit = "A";
    } else if (fract_bit == 11) {
      fract_bit = "B";
    } else if (fract_bit == 12) {
      fract_bit = "C";
    } else if (fract_bit == 13) {
      fract_bit = "D";
    } else if (fract_bit == 14) {
      fract_bit = "E";
    } else if (fract_bit == 15) {
      fract_bit = "F";
    } else {
      fract_bit = fract_bit;
    }

    hexa += fract_bit;
  }

  return hexa;
}
  function reverse(input) {
    let temparray = input.split("");

    let left,
      right = 0;

    right = temparray.length - 1;

    for (left = 0; left < right; left++, right--) {
      // Swap values of left and right

      let temp = temparray[left];

      temparray[left] = temparray[right];

      temparray[right] = temp;
    }

    return temparray.join("");
  }

