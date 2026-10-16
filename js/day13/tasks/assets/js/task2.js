const head = document.getElementById("head")
const title = document.getElementById("title")
const btn = document.getElementById("btn")



btn.addEventListener("click",()=> {
    head.textContent += " this is my page"
    head.style.color ="red"
    title.textContent ="created successfully"
    title.style.color = "blue"


})

