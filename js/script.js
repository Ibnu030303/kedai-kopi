// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.addEventListener("click", function (e) {
  navbarNav.classList.toggle("active");
  e.preventDefault();
});

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", function (e) {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
});

// Toggle class untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
const shoppingCartButton = document.querySelector("#shopping-cart-button");

shoppingCartButton.addEventListener("click", function (e) {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
});

// Menghilangkan nav dan search form ketika mengklik di luar elemen
document.addEventListener("click", function (e) {
  const isHamburgerMenuClicked = hamburgerMenu.contains(e.target);
  const isNavbarNavClicked = navbarNav.contains(e.target);
  const isSearchButtonClicked = searchButton.contains(e.target);
  const isSearchFormClicked = searchForm.contains(e.target);
  const isShoppingCartButtonClicked = shoppingCartButton.contains(e.target);
  const isShoppingCartClicked = shoppingCart.contains(e.target);

  if (!isHamburgerMenuClicked && !isNavbarNavClicked) {
    navbarNav.classList.remove("active");
  }

  if (!isSearchButtonClicked && !isSearchFormClicked) {
    searchForm.classList.remove("active");
  }

  if (!isShoppingCartButtonClicked && !isShoppingCartClicked) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  });
});

// Klik Tombol Close
document.querySelector(".modal .close-icon").addEventListener("click", (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
});

// Klik di luar modal
window.addEventListener("click", (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
});
