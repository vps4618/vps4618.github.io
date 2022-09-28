export const binaryToDecimal = (binary, len) => {
    // Fetch the radix point
  
    var point = binary.indexOf(".");
  
    // Update point if not found
  
    if (point === -1) point = len;
  
    var intDecimal = 0,
      fracDecimal = 0,
      twos = 1;
  
    // Convert integral part of binary to decimal
  
    // equivalent
  
    for (var i = point - 1; i >= 0; i--) {
      intDecimal += (binary[i] - "0") * twos;
  
      twos *= 2;
    }
  
    // Convert fractional part of binary to
  
    // decimal equivalent
  
    twos = 2;
  
    for (var i = point + 1; i < len; i++) {
      fracDecimal += (binary[i] - "0") / twos;
  
      twos *= 2.0;
    }
  
    // Add both integral and fractional part
  
    return intDecimal + fracDecimal;
  }
