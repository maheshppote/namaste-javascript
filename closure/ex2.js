function outerFunction() {
  let score = 100;
  // console.log(score)

  // let gets = function getScore(){
  //     console.log(`This is private ${score}`)
  // }

  // return gets();

  return {
    increment: function () {
      return score++;
    },
    decrement: function () {
      return score--;
    },
  };
}

let result = outerFunction();

console.log(result.increment());
console.log(result.increment());
console.log(result.decrement());
console.log(result.decrement());
console.log(result.decrement());
console.log(result.decrement());
