
const btnout = document.getElementById("btnout")



document.addEventListener("DOMContentLoaded",()=>{


const checked = localStorage.getItem("isactive")

if(!checked) {
    alert("please enter a login page")
    window.location.href = "login.html"
    return;
}



   const showing = document.getElementById("showing")

   const even = JSON.parse(localStorage.getItem("isactive"))
   showing.innerHTML =`<h2>hi! ${even.name}</h2>
   <p>this is your ${even.email}</p><p>this is your ${even.mobile}</p>`


})


btnout.addEventListener("click",()=>{
    localStorage.removeItem("isactive")
    window.location.href = "login.html"
})