const button = document.getElementById("content");

button.addEventListener("click", () => {
  fetch("https://www.hotstar.com/in/home") 
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
     
      data.forEach(element => {
        console.log(element.title);
      });
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
});
