
const btn = document.getElementById("btn")

 const arr =[]
btn.addEventListener("click",(e)=>{
    e.preventDefault()
const name = document.getElementById("userName").value
const age = document.getElementById("userAge").value
const mobile = document.getElementById("userMobile").value
const table = document.getElementById("table")

const data ={name,age,mobile}

arr.push(data);

table.innerHTML=""
arr.forEach((array)=>{
    table.innerHTML+=`<tr><td>${array.name}</td><td>${array.mobile}</td><td>${array.age}</td></tr>`
})

})