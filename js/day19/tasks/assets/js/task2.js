
const myPromise = new Promise((resolve, reject) => {
  let success = true; 
  if (success) {
    resolve("Operation Successful ✅");
  } else {
    reject("Operation Failed ❌");
  }
});


myPromise
  .then((message) => {
    console.log("Resolved:", message);
  })
  .catch((error) => {
    console.log("Rejected:", error);
  });
