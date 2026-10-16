// Task 4: Rest & Spread Operators + Array Handling
console.log("=== Topic 4: Rest & Spread Operators ===");

// 1. Rest Parameters (Collect multiple arguments into array)
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum All (10, 20, 30, 40):", sumAll(10, 20, 30, 40));

// 2. Spread Operator (Expand array elements)
const baseNumbers = [10, 20, 30];
const expandedNumbers = [...baseNumbers, 40, 50];
console.log("Spread Array:", expandedNumbers);
console.log("Reduced Sum:", baseNumbers.reduce((a, b) => a + b, 0));
