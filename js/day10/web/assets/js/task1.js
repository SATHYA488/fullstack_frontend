// Task 1: Hoisting, Temporal Dead Zone (TDZ) & Conditional Logic
console.log("=== Topic 1: Hoisting & TDZ ===");

// 1. Var Hoisting (Declaration hoisted, initialized as undefined)
console.log("var x before init:", typeof x, x); // undefined
var x = 10;
console.log("var x after init:", x); // 10

// 2. Let & Const (TDZ - Cannot access before initialization)
try {
  // console.log(y); // ReferenceError: Cannot access 'y' before initialization
  let y = 20;
  console.log("let y after init:", y);
} catch (e) {
  console.error("TDZ Error:", e.message);
}

// 3. Conditional Logic
let age = 20;
if (age >= 18) {
  console.log("Eligible to vote (Age:", age, ")");
} else {
  console.log("Not eligible to vote");
}
