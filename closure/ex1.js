function createCounter() {
    let count = 0; // Private variable
    return {
        increment: function increment() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
    };
}
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1