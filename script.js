/* RESPONSIVE NAVIGATION*/
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");
const content = document.querySelector(".top-line");
const width = window.innerWidth;

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] == "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "inline-block";
    content.style.marginTop = "180px";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
    content.style.marginTop = "0px";
  }
  if (window.innerWidth > 600) {
    resetPage();
    content.style.marginTop = "0px";
  }
});
/* LIGHT/DARK MODE*/
document.addEventListener("DOMContentLoaded", (event) => {
  const toggleButton = document.getElementById("toggleButton");
  const body = document.body;

  toggleButton.addEventListener("click", () => {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
    }
  });
});
/* BACK TO HOMEPAGE*/
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");

  logo.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
/* FORM FOR PASSWORD*/
const formular = document.querySelector("form");
const password1 = document.querySelector(".password1");
const password2 = document.querySelector(".password2");
const message = document.querySelector(".message");
const notPassword = document.querySelector(".notificationPassword1");
formular.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    password1.value === password2.value &&
    password1.value != "" &&
    password2.value != ""
  ) {
    message.textContent = "Hesla se shodují.";
    message.style.color = "green";
  } else if (
    password1.value != password2.value &&
    password1.value != "" &&
    password2.value != ""
  ) {
    message.textContent = "Hesla se neshodují, zkuste to znovu";
    message.style.color = "red";
  } else if (password1.value == "" || password2.value == "") {
    message.textContent = "Vyplňte obě pole";
    message.style.color = "red";
  }
});
/*SCROLLING and BACKBUTTON*/
const backButton = document.querySelector(".backButton");
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
});
backButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
