const card = document.getElementById("myCard");
    const btn = document.getElementById("toggleBtn");

    btn.addEventListener("click", () => {
      card.classList.toggle("dark");
      btn.textContent = card.classList.contains("dark") 
        ? "Switch to Light Theme" 
        : "Switch to Dark Theme";
    });