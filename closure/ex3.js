function x() {
  let a = 100; // Inside this x fun scope, a variable a is declared and assigned the value 100.

  // Then, a function y is declared. This function logs the value of a to the console when called.
  // Function bundled with its lexical environment is known as a closure.
  function y() {
    console.log(a);
  }

  // The function x returns the function y.
  return y; // Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to
}

let z = x(); // When x is called, it creates a new scope. //
console.log(z); // Its not just that function alone it returns but the entire closure

// Hence, when y is eventually called, it can still access the variable a from the scope of x.

/**
 * 
 * Creating a closure:

let z = x(); calls the function x and assigns the returned function y to the variable z.

console.log(z); logs the function y itself to the console.

If you call z() later, it will execute the function y and log 100 to the console, demonstrating that y still has access to the variable a.
 */