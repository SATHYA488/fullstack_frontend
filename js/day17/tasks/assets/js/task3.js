
    const products = []; 
    const form = document.getElementById("productForm");
    const productList = document.getElementById("productList");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

     
      const name = document.getElementById("productName").value.trim();
      const price = document.getElementById("price").value.trim();
      const category = document.getElementById("category").value.trim();

     
      const product = { name, price, category };

     
      products.push(product);

    
      form.reset();

      
      displayProducts();
    });

    function displayProducts() {
      productList.innerHTML = ""; 

      products.forEach((product, index) => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `<strong>${index + 1}. ${product.name}</strong><br>
                          Price: ₹${product.price}<br>
                          Category: ${product.category}`;
        productList.appendChild(card);
      });
    }
 