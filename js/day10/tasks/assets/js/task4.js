
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(sum(10, 20, 30));


const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr);
