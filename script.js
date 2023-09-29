const navOpen = document.getElementById("nav-open");
const navClose = document.getElementById("nav-close");
const navBar = document.getElementById("nav");

navOpen.onclick = () => {
  navBar.classList.add("active");
  navOpen.style.display = "none";
  navClose.style.display = "block";
};

navClose.onclick = () => {
  navBar.classList.remove("active");
  navOpen.style.display = "block";
  navClose.style.display = "none";
};
