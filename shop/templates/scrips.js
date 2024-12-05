document.addEventListener("DOMContentLoaded", () => {
    // Define the products array
    const products = [
      {
        name: "لباس ورزشی مردانه",
        description: "لباسی راحت و مناسب برای ورزش",
        price: ۲۵۰۰۰۰,
        image: "images/product1.jpg",
      },
      {
        name: "کفش اسپرت زنانه",
        description: "کفشی شیک و مناسب برای فعالیت‌های روزمره",
        price: ۳۵۰۰۰۰,
        image: "images/product2.jpg",
      },
      {
        name: "کیف دستی چرمی",
        description: "کیف دستی با طراحی کلاسیک و کیفیت بالا",
        price: ۴۵۰۰۰۰,
        image: "images/product3.jpg",
      },
    ];
  
    // Get the product list container
    const productList = document.getElementById("product-list");
  
    // Dynamically generate product cards
    products.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("col-md-4");
  
      card.innerHTML = `
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text"><strong>${product.price.toLocaleString("fa-IR")} تومان</strong></p>
            <button class="btn btn-primary">خرید</button>
          </div>
        </div>
      `;
  
      productList.appendChild(card);
    });
  
    // Add event listeners for "Buy" buttons
    const buttons = document.querySelectorAll(".btn-primary");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        alert("محصول به سبد خرید اضافه شد!");
      });
    });
  });
  