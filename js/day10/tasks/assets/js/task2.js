
// mormal function
function add(a, b) {
    return a + b;
}

function square(n) {
    return n * n;
}

// arrow function-explit
const sum = (c, d) => {
    return c + d;
};

const cube = (m) => {
    return m * m;
};

console.log(sum(10, 20));   
console.log(cube(5)); 

// arrow function-implit
const value = (a, b) => a + b;

const three = n => n * n;

console.log(value(15, 25));   
console.log(three(6));    

