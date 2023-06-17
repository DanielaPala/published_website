const checkbox = document.querySelector(".menu-toggle input");
const menuVoices = document.querySelectorAll("#menu li a");

menuVoices.forEach((i) => {
  i.addEventListener("click", () => {
    checkbox.checked = false;
  });
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add("small");
  } else {
    header.classList.remove("small");
  }
});
