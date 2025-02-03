let binary = function (x) {
    // Input validation: Check if x is a valid integer
    if (typeof x !== 'number' || !Number.isInteger(x)) {
      return 'Invalid input'; // Provide meaningful feedback
    }
    // Handle negative numbers
    if (x < 0) {
      return '-' + Math.abs(x).toString(2); // Convert absolute value and add a negative sign
    }
    // Convert valid integers to binary
    return x.toString(2);
  };
  
  // Test array with various inputs
  let arr = [2, 3, 4, 5, 2.5, "3", null, -5];
  let binaryResult = arr.map(binary);
  console.log(binaryResult);