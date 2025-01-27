var a = 10; // global space

function abc() {
  a = 100; // block space
}

console.log(window.a);
console.log(a);
console.log(this.a);

if (this === window) {
  console.log("both are same.");
}
