let students = [
    {
        name: "Ravi",
        age: 22,
        course:"computer science",
        mark: 85,
        salery:40000
    },
    {
        name: "Kumar",
        age: 23,
        course:"computer science",
        mark: 90,
        salery:35000
    },
    {
        name: "Priya",
        age: 21,
        course:"computer science",
        mark: 95,
        salery:50000
    }
];
let target=40000

for(let value=0;value<=students.length-1;value++){
    if (students[value].salery>=target) {
        console.log("found it",students[value]);
    
        
    }
    
}