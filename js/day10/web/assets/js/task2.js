// Task 2: Arrow Functions & Looping Logic
console.log("=== Topic 2: Arrow Functions & Looping Logic ===");

// 1. Arrow Functions
const square = (n) => n * n;
const multiply = (a, b) => a * b;
console.log("Square of 6:", square(6));
console.log("Multiply 4 * 5:", multiply(4, 5));

// 2. Looping Logic (for & while)
console.log("--- For Loop Execution ---");
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

console.log("--- While Loop Execution ---");
let count = 1;
while (count <= 3) {
  console.log("While Loop Step:", count);
  count++;
}
