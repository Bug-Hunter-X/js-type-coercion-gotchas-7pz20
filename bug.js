function foo(a, b) {
  return a + b;
}

console.log(foo(1, "2")); // Output: "12"

// The bug is that JavaScript does a string concatenation instead of a numerical addition when one of the operands is a string.  This is because Javascript is dynamically typed and will try to coerce the number into a string before concatenation.
