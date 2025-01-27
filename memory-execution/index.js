var abc = 1;
A();
B();
console.log(abc);

function A() {
  var abc = 10;
  console.log(abc);
}

function B() {
  var abc = 100;
  console.log(abc);
}
