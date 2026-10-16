// Task 6: ES6 Classes & Form Validation Logic
console.log("=== Topic 6: Classes & Form Validation ===");

// 1. Validator Class
class FormValidator {
  static validateEmail(email) {
    const isValid = email.includes("@") && email.includes(".");
    return isValid ? "Valid Email" : "Invalid Email";
  }

  static validatePassword(password) {
    return password.length >= 6 ? "Strong Password" : "Password too short";
  }
}

console.log("Email Check ('test@gmail.com'):", FormValidator.validateEmail("test@gmail.com"));
console.log("Email Check ('invalid-email'):", FormValidator.validateEmail("invalid-email"));
console.log("Password Check ('123456'):", FormValidator.validatePassword("123456"));
