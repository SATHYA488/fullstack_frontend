const numbers = [10, 20, 30];
let newArr = [];


for (let i = 0; i < numbers.length; i++) {
    newArr+= numbers[i]; 
}


newArr[newArr.length] = 40;

console.log(newArr);
