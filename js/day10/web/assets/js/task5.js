// Task 5: Default Parameters & Object Handling Logic
console.log("=== Topic 5: Default Parameters & Object Handling ===");

// 1. Default Parameters
function createStudent(name = "Unknown Student", marks = 0, course = "JavaScript") {
  return { name, marks, course };
}

const student1 = createStudent("Arun", 85, "FullStack");
console.log("Student Record 1:", student1.name, "-", student1.marks, "marks in", student1.course);

const student2 = createStudent();
console.log("Default Student:", student2);
