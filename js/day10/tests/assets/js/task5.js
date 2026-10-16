const numbers = [10, 15, 20, 25, 30, 35, 40];
let total = 0;

for (let num of numbers) {
  if (num % 2 !== 0) {
    console.log(num);
    total += num;
  }
}
console.log("Total of odd numbers:", total);
