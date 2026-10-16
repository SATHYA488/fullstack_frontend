
    const employees = []; // Array to store employee objects
    const form = document.getElementById("employeeForm");
    const table = document.getElementById("employeeTable");

    form.addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent page reload

      // Get input values
      const name = document.getElementById("empName").value.trim();
      const department = document.getElementById("department").value.trim();
      const salary = document.getElementById("salary").value.trim();

      // Create employee object
      const employee = { name, department, salary };

      // Store in array
      employees.push(employee);

      // Clear input fields
      form.reset();

      // Display all employees
      displayEmployees();
    });

    function displayEmployees() {
      // Clear table rows except header
      table.innerHTML = `<tr>
                          <th>Name</th>
                          <th>Department</th>
                          <th>Salary</th>
                        </tr>`;

      employees.forEach(emp => {
        const row = table.insertRow();
        row.insertCell(0).innerText = emp.name;
        row.insertCell(1).innerText = emp.department;
        row.insertCell(2).innerText = emp.salary;
      });
    }
 