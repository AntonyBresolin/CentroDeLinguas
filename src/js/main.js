const header = document.querySelector("header");
const imagem_logo = document.querySelector("#logo");


window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 40);
});

window.addEventListener("scroll", function () {
    imagem_logo.classList.toggle("Nlogo", window.scrollY > 20);
});


