 
    const btn = document.getElementById("toggleBtn");
    const details = document.getElementById("details");

    btn.addEventListener("click", () => {
      details.classList.toggle("show");
      btn.textContent = details.classList.contains("show") ? "Hide Details" : "Show Details";
    });
  