
const userEmail =document.getElementById("userEmail")
const userMobile =document.getElementById("userMobile")
const login =document.getElementById("btnlogin")
const myForm = document.getElementById("myForm")

login.addEventListener("click",(e)=>{
      e.preventDefault()
      
      const email=userEmail.value
      const mobile=userMobile.value

      
      const formdata = JSON.parse(localStorage.getItem("isvalue"))

 
     
      const data = formdata.find((e)=>e.email == email && e.mobile == mobile)
      console.log(data);

      if(data){
        localStorage.setItem("isactive",JSON.stringify(data))
        myForm.reset()
        setInterval(()=>{
            window.location.href = "index.html"
        },1000)
      }else{
        alert("invlid password");
        
      }
      

   

})