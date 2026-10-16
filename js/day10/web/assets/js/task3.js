// Task 3: Destructuring & Modular Functions
console.log("=== Topic 3: Destructuring & Functions ===");

// 1. Array & Object Destructuring
const colors = ["Red", "Green", "Blue"];
const [firstColor, secondColor] = colors;
console.log("Destructured Colors:", firstColor, secondColor);

const userProfile = { id: 101, username: "sakthi_dev", role: "Admin" };
const { username, role } = userProfile;
console.log(`User: ${username}, Role: ${role}`);

// 2. Modular Function
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Sakthi"));
