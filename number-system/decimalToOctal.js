//decimal to octal
export function decimalToOctal(num, k_prec) {
  let octal = "";

  // Fetch the integral part of decimal number

  let Integral = parseInt(num, 10);

  // Fetch the fractional part decimal number

  let fractional = num - Integral;

  // Conversion of integral part to

  // octal equivalent

  while (Integral > 0) {
    let rem = Integral % 8;

    // Append 0 in octal

    // octal +=rem

    octal += String.fromCharCode(rem + "0".charCodeAt());

    Integral = parseInt(Integral / 8, 10);
  }

  // Reverse string to get original octal

  // equivalent

  octal = reverse(octal);

  // Append point before conversion of

  // fractional part

  octal += ".";

  // Conversion of fractional part to

  // octal equivalent

  while (k_prec-- > 0) {
    // Find next bit in fraction

    fractional *= 8;

    let fract_bit = parseInt(fractional, 10);

    fractional -= fract_bit;

    octal += String.fromCharCode(fract_bit + "0".charCodeAt());
  }

  return octal;
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
