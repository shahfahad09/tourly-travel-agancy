const header = document.querySelector("[data-header]");
const goTop = document.querySelector("[data-go-top]");
const menuBtn = document.querySelector("[data-menu-btn]");
const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("active");
    goTop.classList.add("active");
  } else {
    header.classList.remove("active");
    goTop.classList.remove("active");
  }
});

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");

  const icon = menuBtn.querySelector("ion-icon");
  if (navbar.classList.contains("active")) {
    icon.setAttribute("name", "close-outline");
  } else {
    icon.setAttribute("name", "menu-outline");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuBtn.querySelector("ion-icon").setAttribute("name", "menu-outline");
  });
});

const form = document.querySelector(".travel-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your travel inquiry has been submitted.");
});
