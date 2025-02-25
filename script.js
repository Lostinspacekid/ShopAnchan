// Toggle Hamburger Menu
function toggleMenu() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("open");
}

// Filter Products
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

// Search Products
function searchProducts() {
  const query = document.getElementById("product-search").value.toLowerCase();
  const products = document.querySelectorAll(".product-card");

  products.forEach((product) => {
    const productText = product.textContent.toLowerCase();
    product.style.display = productText.includes(query) ? "block" : "none";
  });
}
