window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav"); // adjust selector
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});