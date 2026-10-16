const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    const page =document.getElementById("page")
       
    page.classList.add("active")

    


})


const theriyadhu = document.getElementById("theriyadhu")

theriyadhu.addEventListener("click",()=> {
    const roja =document.getElementById("roja")

    roja.classList.toggle("active")
    roja.style.fontSize ="20px"
    roja.style.textAlign =" center"
    roja.textContent = "where are you"

    roja.textContent = roja.classList.contains("active")
    ? "what" : "whwn" ;
     
 
})