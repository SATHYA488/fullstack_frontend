let students = [
    {
        name: "Ravi",
        age: 22,
        course:"computer science",
        mark: 85
    },
    {
        name: "Kumar",
        age: 23,
        course:"computer science",
        mark: 90
    },
    {
        name: "Priya",
        age: 21,
        course:"computer science",
        mark: 95
    }
];

for(let value=0;value<=students.length-1;value++){
    if (students[value].mark>90) {
        console.log("great");
        
    } else{
        console.log("good mark");
        
    }
    console.log(students[value].name);
    
}