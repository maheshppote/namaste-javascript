const arr = [2, 3, 4, 5, 6];

let double = function (x) {
  return x * 2;
};

let triple = function (x) {
  return x * 3;
};

let binary = function (x) {
  return x.toString(2);
};

let doubleResult = arr.map(double);
console.log(doubleResult);

let doubleResultWithArrow = arr.map((x) => x * 2); // Use arrow function
console.log("doubleResultWithArrow: ", doubleResultWithArrow);

let tripleResult = arr.map(triple);
console.log(tripleResult);

let tripleResultWithArrow = arr.map((x) => x * 3); // use arrow function
console.log("tripleResultWithArrow: ", tripleResultWithArrow);

let binaryResult = arr.map(binary);
console.log(binaryResult);

let binaryResultWithArrow = arr.map((x) => x.toString(2));
console.log("binaryResultWithArrow: ", binaryResultWithArrow);

// Emphasize that map does not modify the original array.
console.log("Original Array :", arr);

console.log(
  "-----------------------:CHAINING WITH OTHER ARRAY METHODS:------------------------------",
);

let doubleEvenNo = arr.filter((x) => x % 2 === 0).map((x) => x * 2);
console.log("doubleEvenNo - ", doubleEvenNo);
