// Message in the window that brings the user from "About Us" to "Where to Find Us"
window.addEventListener("DOMContentLoaded", () => {
  const findUs = document.getElementById("find_us");
  if (findUs) {
    findUs.addEventListener("click", () => {
      alert("Flying away...");
      window.open("findus.html", "_self");
    });
  }

  const logIn = document.getElementById("log_in");
  if (logIn) {
    logIn.addEventListener("click", () => {
      alert("Joining the colony...");
      window.open("home.html", "_self");
    });
  }

  const register = document.getElementById("register_button");
  if (register) {
    register.addEventListener("click", () => {
      alert("Almost there!");
      window.open("login.html", "_self");
    });
  }

  // Changing the pic in About Us while hovering
  const img = document.getElementById("about-us-pic");
  if (img) {
    const originalSrc = img.src;

    img.addEventListener("mouseover", () => {
      img.src = "images/group_of_bats_hello.png";
    });

    img.addEventListener("mouseout", () => {
      img.src = originalSrc;
    });
  }

  // Accessibility banner
  setTimeout(() => {
    const banner = document.getElementById("theme_banner");
    if (banner) {
      banner.style.display = "none";
    }
  }, 10000);
});

//Dark Mode & Light Mode
const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;
const foot = document.querySelector("footer");

const introElements = document.querySelectorAll(".intro");
const tableOfContentsContainer = document.querySelectorAll(".table-of-contents");
const homePageBodyContainer = document.querySelectorAll(".home-page-body");
const welcomeToTheColonyContainer = document.querySelectorAll(".welcome-to-the-colony");
const formContainer = document.querySelectorAll(".form");

toggleBtn.addEventListener("click", ()=>{
    body.classList.toggle("light-mode");
    foot.classList.toggle("light-mode");
    introElements.forEach(el => el.classList.toggle("light-mode"));
    tableOfContentsContainer.forEach(el => el.classList.toggle("light-mode"));
    homePageBodyContainer.forEach(el => el.classList.toggle("light-mode"));
    welcomeToTheColonyContainer.forEach(el => el.classList.toggle("light-mode"));
    formContainer.forEach(el => el.classList.toggle("light-mode"));

    if (body.classList.contains("light-mode")){
        toggleBtn.textContent = "Switch to dark mode";
    } else {
        toggleBtn.textContent = "Switch to light mode";
    }
});

const confirmButton = document.getElementById("confirm_button");
confirmButton.addEventListener("mouseover", ()=>{
  confirmButton.classList.toggle("active");
});

const logIn = document.getElementById("log_in");
logIn.addEventListener("mouseover", ()=>{
  confirmButton.classList.toggle("active");
});

const cancel = document.getElementById("cancel_button");
cancel.addEventListener("mouseover", ()=>{
  cancel.classList.toggle("active");
});