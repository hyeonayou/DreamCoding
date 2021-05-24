const toggleBtn = document.querySelector(".status-bar__toogleBtn");
const menu = document.querySelector(".status-bar__menu");
const icon = document.querySelector(".status-bar__img");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icon.classList.toggle("active");
});
