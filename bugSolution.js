function foo(a, b) {
  // Explicit type conversion to numbers
  a = Number(a);
  b = Number(b);
  
  // Check for NaN (Not a Number) after conversion to handle invalid input
  if (isNaN(a) || isNaN(b)) {
    return "Invalid input: Operands must be numbers";
  }
  
  return a + b; 
}

console.log(foo(1, "2")); // Output: 3
console.log(foo("abc", 2)); // Output: Invalid input: Operands must be numbers
console.log(foo(1, 2)); // Output: 3