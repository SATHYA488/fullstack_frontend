  let add = (a,b)=>{
    const sum = a+b
     console.log(sum);
     
  }

  add(20,20)



  const addSum = (c,callback)=>{
     const value = c*10
    
     console.log(value);
      callback(value)


  }

  const num =(output)=>{


    console.log("process of number",output);

    
    
  }

  addSum(10, num)