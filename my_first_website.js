// Message in the window that brings the user from "About Us" to "Where to Find Us"
window.addEventListener("DOMContentLoaded", () => {
  const findUs = document.getElementById("find_us");
  if (findUs) {
    findUs.addEventListener("click", () => {
      alert("Flying away...");
      window.open("findus.html", "_self");
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
      console.log("Hiding banner...");
      banner.style.display = "none";
    } else {
      console.log("Banner element not found!");
    }
  }, 10000);
});

//Dark Mode & Light Mode
const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

const introElements = document.querySelectorAll(".intro");
const tableOfContentsContainer = document.querySelectorAll(".table-of-contents");
const homePageBodyContainer = document.querySelectorAll(".home-page-body");
const welcomeToTheColonyContainer = document.querySelectorAll(".welcome-to-the-colony");
const formContainer = document.querySelectorAll(".form");

toggleBtn.addEventListener("click", ()=>{
    body.classList.toggle("light-mode");
    introElements.forEach(el => el.classList.toggle("light-mode"));
    tableOfContentsContainer.forEach(el => el.classList.toggle("light-mode"));
    homePageBodyContainer.forEach(el => el.classList.toggle("light-mode"));
    welcomeToTheColonyContainer.forEach(el => el.classList.toggle("light-mode"));
    formContainer.forEach(el => el.classList.toggle("light-mode"));
    if (body.classList.contains("light-mode")){
        toggleBtn.textContent = "Switch to dark mode"
    }
    else {
        toggleBtn.textContent = "Switch to light mode"
    }
})
