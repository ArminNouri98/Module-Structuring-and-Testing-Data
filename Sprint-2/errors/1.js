function convertToPercentage(decimalNumber) {
  // Check if the input is a valid number
  if (typeof decimalNumber !== "number" || isNaN(decimalNumber)) {
    throw new Error("Input must be a valid number.");
  }
  // Multiply by 100 and append the '%' symbol
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

// Example usage
console.log(convertToPercentage(0.5));    // Output: "50%"
console.log(convertToPercentage("abc")); // Error: Input must be a valid number.
