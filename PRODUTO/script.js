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
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
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
    const slides = document.querySelectorAll('.carousel-images img'); // Pega todas as imagens do carrossel
    const totalSlides = slides.length;
  
    // Atualiza o índice da imagem
    currentIndex += direction;
  
    // Se for menor que 0, vai para a última imagem
    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    }
  
    // Se for maior que o total de imagens, vai para a primeira
    if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }
  
    // Calcula o deslocamento (em porcentagem) para a posição da imagem
    const offset = -currentIndex * 100;
  
    // Aplica a transformação para mover as imagens
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
  }
  
  // Validar o formulário de feedback
  document.querySelector('form').addEventListener('submit', function(event) {
    const input = document.querySelector('input[type="text"]');
    if (input.value.trim() === '') {
        alert('Por favor, digite seu feedback!');
        event.preventDefault(); // Impede o envio do formulário
    }
  });
  