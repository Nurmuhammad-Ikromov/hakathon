const burgerBtn = document.querySelector(".burger-btn");
const nav = document.querySelector(".site-header__nav");

burgerBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
