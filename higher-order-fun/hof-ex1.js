// A function which takes another function as an argument or returns a function from it is known as higher
// order function.

// E.g -

function x(y) {
  console.log(y());
}

function y() {
  console.log("hello i am 'y' a higher order fun.");
}

x(y);
