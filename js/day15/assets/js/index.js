 const btn = document.getElementById("btn")

 const title = document.getElementById("title")

const ison=true

 btn.addEventListener("click",()=>{
     
       ison = !ison

       if (title==ison) {
        btn.textContent = "show"
        title.textContent ="inside the title line"
        title.style.backGroundColor = "yellow"
       } else {
             title.style.display ="block"
       }

 })

