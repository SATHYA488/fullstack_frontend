
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data Loaded Successfully ✅");
  } else {
    reject("Data Loading Failed ❌");
  }
});


myPromise
  .then((result) => {
    console.log("Resolved:", result);
  })
  .catch((error) => {
    console.log("Rejected:", error); 
  })
  .finally(() => {
    console.log("Promise Completed 🎯"); 
  });
