let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function even(x) {
  return x % 2 === 0;
}

function oddNum(x) {
  return x % 2;
}

let newArr = arr.filter(even);
console.log("Even numbers: ", newArr);

// uisng arrow fun
let newArr1 = arr.filter((x) => x % 2 === 0);
console.log("With arrow fun: ", newArr1);

// oddNumber
let newArr2 = arr.filter(oddNum);
console.log("Odd Number: ", newArr2);

// By using arrow fun
let newArr3 = arr.filter((x) => x % 2);
console.log("By Arrow: ", newArr3);

// greater than > 2

let newArr4 = arr.filter((x) => x > 2);
console.log("Greater: ", newArr4);

// filter less than 4 and make it double

let newArr5 = arr.filter((x) => x < 4).map((x) => x * 2);
console.log("New Arr 5: ", newArr5);
