# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript bug caused by the language's dynamic typing and type coercion.  The bug arises when performing arithmetic operations with mixed data types (numbers and strings).  JavaScript implicitly converts the number to a string, leading to concatenation instead of the expected mathematical addition.

## The Bug
The `foo` function is intended to add two numbers. However, when one input is a string, JavaScript performs string concatenation.

## The Solution
The solution involves explicit type conversion using `parseInt()` or `Number()` to ensure both operands are numbers before performing addition. This makes the code's behavior predictable and avoids unexpected results.
