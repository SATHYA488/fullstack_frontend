//  var 
console.log(myVar); 
var myVar = "Hello Var";

//  let 
try {
  console.log(myLet); 
} catch (e) {
  console.log("Error with let:", e.message);
}
let myLet = "Hello Let";

// const 
try {
  console.log(myConst); 
} catch (e) {
  console.log("Error with const:", e.message);
}
const myConst = "Hello Const";

// Function Declaration
console.log(myFunc()); 
function myFunc() {
  return "Hello Function";
}
