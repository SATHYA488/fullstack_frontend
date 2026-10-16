const userName =document.getElementById("userName")
const userEmail =document.getElementById("userEmail")
const userMobile =document.getElementById("userMobile")
const btn =document.getElementById("btn")
const myForm = document.getElementById("myForm")

btn.addEventListener("click",(e)=>{
      e.preventDefault()
      const name=userName.value
      const email=userEmail.value
      const mobile=userMobile.value

      const data = {userid:Date.now(),name,email,mobile}
      const formdata = JSON.parse(localStorage.getItem("isvalue")) || []

      const emailchecked = formdata.find((e)=>e.email == email)
      if (emailchecked) {
        alert("already register")
        return
      }

      
      formdata.push(data)
      localStorage.setItem("isvalue",JSON.stringify( formdata))

      alert("register successfully")

      myForm.reset()

      setInterval(()=>{
        window.location.href ="login.html"
      },2000)
      

})