const btnMobileNav = document.querySelector(".btn-mobile-nav");
const navMain = document.querySelector(".nav-main");

const iconOpen = document.querySelector(".open-icon");
const iconClose = document.querySelector(".close-icon");

btnMobileNav.addEventListener("click", () => {
  navMain.classList.toggle("active");
  iconOpen.classList.toggle("open");
  iconClose.classList.toggle("open");
});
