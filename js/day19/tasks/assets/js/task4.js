
const fetchData = async () => {
  try {
    // Simulating a Promise
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data Loaded Successfully ✅");
        // reject("Data Loading Failed ❌"); 
      }, 2000);
    });

    console.log("Result:", result);
  } catch (error) {
    console.log("Error:", error);
  }
};


fetchData();
