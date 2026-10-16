const numbers = [45, 12, 89, 34, 67, 90, 23];
let max = numbers[0];

for (let num of numbers) {
  if (num > max) {
    max = num;
  }
}
console.log("Highest number:", max);
