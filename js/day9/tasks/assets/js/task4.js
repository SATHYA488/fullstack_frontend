
// globel scope
var name="sathya"
let course="fs"
const batch="four"

console.log(name,course,batch);


let result={name,course,batch}

console.log(result);


// function scope

function add() {

    var team="csk"
    let captain="msd"
    const number="seven"

    console.log(team,captain,number);
    
    
    let brand={team,captain,number}
    console.log(brand);
}
 add()


//  block scope

if (true) {
    var country="india"
    let states="tamilnadu"
    const district="dharmapuri"

    console.log(country,states,district);

    let world={country,states,district}
    console.log(world);
}





