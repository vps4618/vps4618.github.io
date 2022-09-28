// octal

export function octalToDecimal(octal, len) {
  // Fetch the radix point

  var point = octal.indexOf(".");

  // Update point if not found

  if (point === -1) point = len;

  var intDecimal = 0,
    fracDecimal = 0,
    eights = 1;

  // Convert integral part of octal to decimal

  // equivalent

  for (var i = point - 1; i >= 0; i--) {
    intDecimal += octal[i] * eights;

    eights *= 8;
  }

  console.log(intDecimal);
  // Convert fractional part of octal to

  // decimal equivalent

  eights = 8;

  for (var i = point + 1; i < len; i++) {
    fracDecimal += octal[i] / eights;

    eights *= 8.0;
  }

  // Add both integral and fractional part

  return intDecimal + fracDecimal;
}

