
function scopeTest() {
    if (true) {
        var x = "var inside block";  
        let y = "let inside block";  
        const z = "const inside block"; 
        console.log("Inside block:", x, y, z);
    }
    console.log("Outside block:", x);
   
}
scopeTest();


var a = 10;
var a = 20;
console.log("Redeclared var:", a);

let b = 30;


const c = 50;


// --- Reassignment ---
let d = "hello";
d = "world";
console.log("Reassigned let:", d);

const e = "fixed";

// --- Hoisting ---
console.log("Hoisted var:", hoistedVar);
var hoistedVar = "I am hoisted";


let hoistedLet = "I am let";


const hoistedConst = "I am const";

// --- TDZ Example ---
function tdzExample() {
   
    let myLet = "Declared later";

   
    const myConst = "Declared later";

    console.log("TDZ resolved:", myLet, myConst);
}
tdzExample();
