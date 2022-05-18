window.addEventListener("scroll", onScroll);

onScroll(); // Quando carregar o arquivos executa o onScroll
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

// Ativar o menu na seção que estiver aparecendo
function activateMenuAtCurrentSection(section) {
  // Linha alvo
  const targetLine = scrollY + innerHeight / 2;

  // Verificar se a seção passou da linha
  // Quais daos vou precisar?

  // O topo da seção
  const sectionTop = section.offsetTop;

  // Altura da seção
  const sectionHeight = section.offsetHeight;

  // O topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  // Verificar se a base está abaixo da linha imaginaria alo
  // Quais dados vou precisar?

  // A seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight;

  // O final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  // Limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(
    `.menu a[href*=${section.getAttribute(sectionId)}]`,
  );

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function showNavOnScroll() {
  // Mostrar o navigation ao fazer o scroll
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  // Mostrar o botão Back to top ao fazer o scroll
  if (scrollY > 550) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
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
