let outer=()=>{
     
    let a=0

    let inner=()=>{
        a++
        console.log(a);
        
    }
    return inner
}

let result=outer()

result()
result()
result()