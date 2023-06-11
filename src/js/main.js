const header = document.querySelector(".header");
const imagem_logo = document.querySelector("#logo");
const notificacao_topo = document.querySelector(".topo");
const close_btn_notificacao = document.querySelector(".fechar-notificacao");
const background_celular = document.querySelector(".backgroud-menu");
const midias_sociais = document.querySelector(".midias-celular");




window.addEventListener("scroll", function () {
  if(this.window.innerWidth > 820){
    header.classList.toggle("scrollado", window.scrollY > 0);
  }
});


close_btn_notificacao.addEventListener("click", function () {
  notificacao_topo.style.display = "none";
});

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
      
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 1s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      background_celular.classList.toggle("background-celular-ativo");
      midias_sociais.classList.toggle("midias-celular-ativo");
      header.classList.toggle("header-celular-ativo");
      
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();


