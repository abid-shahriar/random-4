const toggleBtn = document.querySelector(".toggle-btn");
const menuContainer = document.querySelector(".menu_container");

toggleBtn.addEventListener("click", (e) => {
  menuContainer.classList.toggle("open");
});
