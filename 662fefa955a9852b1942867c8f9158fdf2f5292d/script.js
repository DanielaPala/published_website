const checkbox = document.querySelector(".menu-toggle input");
const menuVoices = document.querySelectorAll(".header-menu li a");
const dimmer = document.querySelector(".dimmer");

menuVoices.forEach((i) => {
  i.addEventListener("click", () => {
    checkbox.checked = false;
  });
});

dimmer.addEventListener("click", () => {
  console.log("ciao");
  checkbox.checked = false;
});

