// Task 10: ES6+ Features & Reporting / Analytics Logic
console.log("=== Topic 10: Reporting & Analytics Logic ===");

let sales = [200, 300, 150];
console.log("Quarterly Sales Numbers:", sales);

// 1. Calculate Average Sales using reduce()
let total = sales.reduce((acc, curr) => acc + curr, 0);
let avg = total / sales.length;
console.log("Total Sales:", total);
console.log("Average Sales:", avg.toFixed(2));

// 2. Analytics Max & Min
const maxSale = Math.max(...sales);
const minSale = Math.min(...sales);
console.log(`Peak Quarter: $${maxSale}, Lowest Quarter: $${minSale}`);
