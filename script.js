function openInstagram() {
  window.open("https://www.instagram.com/msquare_05/", "_blank");
}

function openWhatsApp() {
  window.open("https://wa.me/9902868300", "_blank");
}

function contactNow() {
  openWhatsApp();
}

/* SIDEBAR TOGGLE */
function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}

/* PRODUCT FILTER */
function filterProducts(category) {
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    const cat = product.getAttribute("data-category");

    if (category === "all" || cat === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });

  toggleMenu(); // close sidebar after click
}