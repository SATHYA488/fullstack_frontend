
fetch("https://www.aboutamazon.in/about-us")
  .then((response) => {
   
    return response.json();
  })
  .then((data) => {
   
    console.log("Fetched Data:", data);
  })
  .catch((error) => {
    // Handle errors
    console.error("Error:", error);
  });
