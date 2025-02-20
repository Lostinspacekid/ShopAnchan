function toggleMenu() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
}

function filterProducts() {
  const filterValue = document.getElementById("product-filter").value;
  const products = document.querySelectorAll(".product-card");

  products.forEach((product) => {
    if (filterValue === "all" || product.getAttribute("data-category") === filterValue) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

function searchProducts() {
  const searchQuery = document.getElementById("product-search").value.toLowerCase();
  const products = document.querySelectorAll(".product-card");

  products.forEach((product) => {
    const productName = product.querySelector("h3").textContent.toLowerCase();
    if (productName.includes(searchQuery)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
