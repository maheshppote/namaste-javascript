// Calculate area, circumference and diameter

let radius = [3, 1, 2, 4];

let area = function (radius) {
  return Math.PI * radius * radius;
};

let circumference = function (radius) {
  return 2 * Math.PI * radius;
};

let diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  // This is the higher order function
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i])); // It takes another function as an argument
  }
  return output;
};

console.log("-------------------------------------------------");
console.log("calculateArea: 1", calculate(radius, area));
console.log("calculateCircumference: 1", calculate(radius, circumference));
console.log("calculateDiameter: 1", calculate(radius, diameter));
console.log("-------------------------------------------------");

console.log("mapArea: 2", radius.map(area));
console.log("mapCircumference: 2", radius.map(circumference));
console.log("mapDiameter: 2", radius.map(diameter));

Array.prototype.calculate2 = function (logic) {
  // This is the higher order function
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i])); // It takes another function as an argument
  }
  return output;
};
console.log("-------------------------------------------------");

// create user define function like map
console.log("calculateArea 3: ", radius.calculate2(area));
console.log("calculateCircumference 3: ", radius.calculate2(circumference));
console.log("calculateDiameter 3: ", radius.calculate2(diameter));
