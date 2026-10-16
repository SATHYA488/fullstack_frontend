
const btn = document.getElementById("userSubmit")


const result =[]
btn.addEventListener("click",(e) => {
    e.preventDefault()
const userName = document.getElementById("userName").value
const userAge = document.getElementById("userAge").value
const userMobile = document. getElementById("userMobile").value

const userData ={userName,userMobile,userAge}

console.log(userData);

result.push(userData)

console.log(result);

// window.location.reload()
if (userName && userAge && userMobile) {
        

        alert("Successfully submitted!");
    } else {
        alert("Please fill all the fields.");
    }



})
