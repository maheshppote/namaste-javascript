// function expression

function abc() {
  console.log("I am a declaredd or statment dunction");
}
abc();

let def = function () {
  console.log("I am a function expression");
};
def();

let anonymous = function () {
  console.log("I am a anonymous fun");
};

// Named fun
let namFun = function greet() {
  console.log("Good morning!");
};
namFun();

// first class function/ first class citizen functions.

function sayHello(callback){
    callback()
}

sayHello("fun arg:", namFun)
