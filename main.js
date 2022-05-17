window.addEventListener('scroll', onScroll)

onScroll() // Quando carregar o arquivos executa o onScroll
function onScroll() { // Gerenciar os diversos Scrolls da página
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function showNavOnScroll(){ // Mostrar o navigation ao fazer o scroll
  if (scrollY > 0) {
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  }
}

function showBackToTopButtonOnScroll() { // Mostrar o botão Back to top ao fazer o scroll
  if (scrollY > 550) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }  
}


function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
  #home,
  #home img, 
  #home .stats, 
  #services
  #services header,
  #services .card
  #about, 
  #about header,
  #about .content `);
