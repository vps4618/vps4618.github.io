// hexa decimal

export function hexaToDecimal(hexa, len) {
    // Fetch the radix point
  
    var point = hexa.indexOf(".");
  
    // Update point if not found
  
    if (point === -1) point = len;
  
    var intDecimal = 0,
      fracDecimal = 0,
      hexas = 1;
  
    // Convert integral part of hexa to decimal
  
    // equivalent
  
    for (var i = point - 1; i >= 0; i--) {
      if (hexa[i] == "A") {
        intDecimal += 10 * hexas;
      } else if (hexa[i] == "B") {
        intDecimal += 11 * hexas;
      } else if (hexa[i] == "C") {
        intDecimal += 12 * hexas;
      } else if (hexa[i] == "D") {
        intDecimal += 13 * hexas;
      } else if (hexa[i] == "E") {
        intDecimal += 14 * hexas;
      } else if (hexa[i] == "F") {
        intDecimal += 15 * hexas;
      } else {
        intDecimal += (hexa[i] - "0") * hexas;
      }
      hexas *= 16;
    }
  
    // Convert fractional part of hexa to
  
    // decimal equivalent
  
    hexas = 16;
  
    for (var i = point + 1; i < len; i++) {
      if (hexa[i] == "A") {
        fracDecimal += 10 / hexas;
      } else if (hexa[i] == "B") {
        fracDecimal += 11 / hexas;
      } else if (hexa[i] == "C") {
        fracDecimal += 12 / hexas;
      } else if (hexa[i] == "D") {
        fracDecimal += 13 / hexas;
      } else if (hexa[i] == "E") {
        fracDecimal += 14 / hexas;
      } else if (hexa[i] == "F") {
        fracDecimal += 15 / hexas;
      } else {
        fracDecimal += (hexa[i] - "0") / hexas;
      }
      hexas *= 16.0;
    }
  
    // Add both integral and fractional part
  
    return intDecimal + fracDecimal;
  } 