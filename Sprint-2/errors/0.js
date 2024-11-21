// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str; // Return the input unchanged if it's not a string or empty
  }
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
console.log(capitalise("hello"));  // Output: "Hello"
console.log(capitalise(""));       // Output: ""
console.log(capitalise(null));     // Output: null
console.log(capitalise(42));       // Output: 42
