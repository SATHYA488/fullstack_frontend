const title = document.getElementById("title")
const page = document.querySelectorAll(".page")


title.textContent =" this is my page";



page.forEach( pages  => {
    pages.textContent = "this is a paragraph";
       pages.style.color = "blue" ;  
       pages.style.fontSize = "20px" 
});









