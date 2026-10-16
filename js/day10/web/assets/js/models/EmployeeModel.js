/**
 * Model: EmployeeModel
 * Responsibility: Manages IT Engineering Personnel, Skills, Roles, and Department State.
 * Architecture: MVC - Model Layer (Zero Emojis)
 */

class EmployeeModel {
  constructor() {
    this.storageKey = 'it_employees_data';
    this.employees = this.loadInitialData();
  }

  loadInitialData() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [
      { id: 'EMP-01', name: 'Sophia Chen', email: 'sophia.chen@techcorp.internal', department: 'FullStack Engineering', role: 'Staff Engineer', skills: ['JavaScript', 'Node.js', 'React'], status: 'Active', hourlyRate: 95 },
      { id: 'EMP-02', name: 'Marcus Vance', email: 'marcus.vance@techcorp.internal', department: 'DevOps & SRE', role: 'Principal Architect', skills: ['Kubernetes', 'Terraform', 'AWS'], status: 'Active', hourlyRate: 110 },
      { id: 'EMP-03', name: 'Elena Rostova', email: 'elena.r@techcorp.internal', department: 'Cloud Infrastructure', role: 'Cloud Engineer', skills: ['GCP', 'Docker', 'Python'], status: 'Active', hourlyRate: 85 },
      { id: 'EMP-04', name: 'David Kumar', email: 'david.k@techcorp.internal', department: 'Quality Assurance', role: 'Automation Specialist', skills: ['Playwright', 'Jest', 'CI/CD'], status: 'On Leave', hourlyRate: 75 },
      { id: 'EMP-05', name: 'Sakthi Subramanian', email: 'sakthi.s@techcorp.internal', department: 'Software Architecture', role: 'Lead Solutions Architect', skills: ['System Design', 'Microservices', 'JS Logic'], status: 'Active', hourlyRate: 125 }
    ];
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.employees));
  }

  getAll() {
    return [...this.employees];
  }

  getById(id) {
    return this.employees.find(emp => emp.id === id);
  }

  add(employeeData) {
    const newEmployee = {
      id: `EMP-0${this.employees.length + 1}`,
      name: employeeData.name.trim(),
      email: employeeData.email.trim(),
      department: employeeData.department,
      role: employeeData.role.trim(),
      skills: Array.isArray(employeeData.skills) ? employeeData.skills : employeeData.skills.split(',').map(s => s.trim()),
      status: employeeData.status || 'Active',
      hourlyRate: parseFloat(employeeData.hourlyRate) || 80
    };

    this.employees.push(newEmployee);
    this.save();
    return newEmployee;
  }

  update(id, updatedFields) {
    const index = this.employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
      this.employees[index] = { ...this.employees[index], ...updatedFields };
      this.save();
      return this.employees[index];
    }
    return null;
  }

  delete(id) {
    this.employees = this.employees.filter(emp => emp.id !== id);
    this.save();
    return true;
  }

  getCountByDepartment() {
    return this.employees.reduce((acc, curr) => {
      acc[curr.department] = (acc[curr.department] || 0) + 1;
      return acc;
    }, {});
  }
}

window.EmployeeModel = EmployeeModel;
