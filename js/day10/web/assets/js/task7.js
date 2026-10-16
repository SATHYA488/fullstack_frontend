// Task 7: Promises, Async/Await & Authentication Logic
console.log("=== Topic 7: Promises & Authentication Logic ===");

let registeredUser = { username: "admin", password: "1234" };

function authenticateAsync(u, p) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (u === registeredUser.username && p === registeredUser.password) {
        resolve({ status: "success", message: "Login Success", token: "AUTH_TOKEN_998877" });
      } else {
        reject(new Error("Login Failed: Incorrect username or password"));
      }
    }, 100);
  });
}

// Execute login check
authenticateAsync("admin", "1234")
  .then(res => console.log("Auth Result:", res.message, "| Token:", res.token))
  .catch(err => console.error("Auth Failed:", err.message));
