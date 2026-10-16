// const btn = document.getElementById("btn")



// const array =[]
// btn.addEventListener("click",(e)=>{
//     e.preventDefault()
//  const userName = document.getElementById("userName").value
//  const userAge = document.getElementById("userAge").value
//  const userMobile = document.getElementById("userMobile").value
// let contain = document.getElementById("contain")

// const data ={userName,userAge,userMobile}
// console.log(data);


// array.push(data)

// contain.innerHTML=""
// array.forEach((e)=>{
//    contain.innerHTML += `<div><h3>this is a name ${e.userName}</h3>
//    <p>this is a age ${e.userAge}</p>
// <p>this is a mobile ${e.userMobile}</p></div>`
// })


// })





 



const handleclick=(()=> {
       const number = document.getElementById("number").value
       const numberUser = document.getElementById("numberUser").value
 const userMobile = document.getElementById("userMobile").value
       const Contain1 = document.getElementById("Contain1")
       Contain1.textContent = number( number) + number( numberUser) + number( userMobile)
})



