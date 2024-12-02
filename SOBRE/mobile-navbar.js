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
      link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
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

// Inicializando o MobileNavbar
const mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-list", ".nav-list li");
mobileNavbar.init();

let currentIndex = 0;

// Função para mover os slides
function moveSlide(direction) {
  const slides = document.querySelectorAll('.carousel-images img');
  const carouselWidth = document.querySelector('.carousel').offsetWidth;
  const totalSlides = slides.length;
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  const offset = -currentIndex * carouselWidth;
  document.querySelector('.carousel-images').style.transform = `translateX(${offset}px)`;
}

// Automatizar o carrossel
setInterval(() => {
  moveSlide(1);
}, 5500);

// Validar o formulário de feedback
document.querySelector('form').addEventListener('submit', function(event) {
  const input = document.querySelector('input[type="text"]');
  if (input.value.trim() === '') {
    alert('Por favor, digite seu feedback!');
    event.preventDefault();
  }
});
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

