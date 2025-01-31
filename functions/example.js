// Function Statement
function a() {
  console.log("a called");
}
a(); // Works (hoisted)

// Function Expression
var b = function () {
  console.log("b called");
};
b(); // Works (called after definition)

// Anonymous Function
var c = function () {
  console.log("I am anonymous");
};
c();

// Named Function Expression
var bb = function getbb() {
  console.log("I am a named function.");
};
bb();

// First-Class Functions
var greet = function () {
  console.log("Hello!");
};

function sayHello(callback) {
  callback();
}
sayHello(greet); // Passing function as argument

function createGreeter() {
  return function () {
    console.log("Hello from the greeter!");
  };
}
const greeter = createGreeter(); // Returning function
greeter();
