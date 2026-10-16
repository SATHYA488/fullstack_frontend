// Task 9: Array Methods (map, filter, reduce, push, pop) & Inventory Management
console.log("=== Topic 9: Array Methods & Inventory ===");

let inventory = ["Pen", "Book", "Laptop"];
console.log("Initial Inventory:", inventory);

// 1. Array Push
inventory.push("Mouse");
console.log("Updated Inventory (after push):", inventory);

// 2. Array Filter
const longNamedItems = inventory.filter(item => item.length > 4);
console.log("Items with length > 4:", longNamedItems);

// 3. Array Map
const catalogLabels = inventory.map((item, idx) => `#${idx + 1} SKU: ${item.toUpperCase()}`);
console.log("Catalog SKU List:", catalogLabels);
