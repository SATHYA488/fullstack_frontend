let add=()=>{
    console.log("this is processs");
   value() 
}


let value=()=>{
    console.log("running");
    
}

add(value)


let num=(a,callback)=>{
   let  result=a+12;

    callback(result)
}

let declare=(output)=>{
    console.log(output);
    
}

num(10,declare)
