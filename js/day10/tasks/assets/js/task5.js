const studentInfo = (name, course, city = "Chennai") =>
    `My name is ${name}, I study ${course}, and I live in ${city}.`;

console.log(studentInfo("Ravi", "JavaScript"));
