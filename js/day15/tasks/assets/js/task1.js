const btn = document.getElementById("btn")
const para = document.getElementById("para")
const box = document.getElementById("box")
  



btn.addEventListener("click",()=> {
    const page = document.getElementById("page")
    const title = document.querySelectorAll(".title")
   
    
    page.textContent ="when a page of a degree into a member of a connect"
    
     
     
     if (box.style.display="inline") {


         title.forEach(contain =>{
        contain.textContent = "for a member of a content of a counter of a age"
        contain.style.color = "blue"
        contain.style.fontSize ="20px"

     })
         box.style.display="inline"
         btn.textContent="hide"
         btn.style.color ="pink"

         para.style.display="none"
   

        

     } else {
        box.style.display="none"
         btn.textContent="show"
       
     }





})
