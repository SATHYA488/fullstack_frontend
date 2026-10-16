
    const students = []; // Array to store student objects
    const form = document.getElementById("studentForm");
    const studentList = document.getElementById("studentList");

    form.addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent page reload

      // Get input values
      const name = document.getElementById("name").value.trim();
      const age = document.getElementById("age").value.trim();
      const city = document.getElementById("city").value.trim();

      // Create student object
      const student = { name, age, city };

      // Store in array
      students.push(student);

      // Clear input fields
      form.reset();

      // Display all students
      displayStudents();
    });

    function displayStudents() {
      studentList.innerHTML = ""; // Clear previous list

      students.forEach((student, index) => {
        const div = document.createElement("div");
        div.classList.add("student-card");
        div.innerHTML = `<strong>${index + 1}. ${student.name}</strong><br>
                         Age: ${student.age}<br>
                         City: ${student.city}`;
        studentList.appendChild(div);
      });
    }
 