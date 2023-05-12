const header = document.querySelector("header");
const imagem_logo = document.querySelector("#logo");
const elipse2 = document.querySelector(".elipse2");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 20);
});
window.addEventListener("scroll", function () {
  imagem_logo.classList.toggle("Nlogo", window.scrollY > 20);
});

window.addEventListener("scroll", function () {
  //quadrado.classList.toggle("oi", window.scrollY > 800);

  if (this.window.scrollY > 1100) {
      elipse2.style.borderRadius = (scrollY/3 - 400)/4 + "%";


  }
});
