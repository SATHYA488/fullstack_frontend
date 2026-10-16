const fruits = ["Apple", "Mango", "Orange"];
const vegetables = ["Carrot", "Potato"];

console.log("Initial Fruits:", fruits);
console.log("Initial Vegetables:", vegetables);


fruits.push("Banana");
console.log("After Push:", fruits);


fruits.pop();
console.log("After Pop:", fruits);


fruits.unshift("Grapes");
console.log("After Unshift:", fruits);


fruits.shift();
console.log("After Shift:", fruits);


console.log("Total Length of Fruits Array:", fruits.length);


let finalResult = fruits.concat(vegetables);
console.log("Final Result:", finalResult);
