document.addEventListener("DOMContentLoaded", function () {
  let slideActual = 0;
  const slides = document.querySelectorAll(".slide");
  const tiempoTransicion = 300; // ms

  function cambiarSlide(direccion) {
    // Oculta el slide actual con fade out
    slides[slideActual].style.opacity = 0;
    slides[slideActual].style.transition = `opacity ${tiempoTransicion}ms ease`;
    
    setTimeout(() => {
      slides[slideActual].classList.remove("activo");
      
      // Calcula nuevo slide
      slideActual = (slideActual + direccion + slides.length) % slides.length;
      
      // Muestra nuevo slide con fade in
      slides[slideActual].classList.add("activo");
      slides[slideActual].style.opacity = 0;
      setTimeout(() => {
        slides[slideActual].style.opacity = 1;
      }, 10);
    }, tiempoTransicion);
  }

  window.cambiarSlide = cambiarSlide;
});

// Dark mode
document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  
  // Comprobar preferencias
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = localStorage.getItem('theme');
  
  // Aplicar tema inicial
  if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    enableDarkMode();
  }
  
  // Evento del botón
  darkModeToggle.addEventListener('click', function() {
    if (body.classList.contains('dark-mode')) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
  
  function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    updateToggleIcon();
  }
  
  function disableDarkMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    updateToggleIcon();
  }
  
  function updateToggleIcon() {
    const icon = darkModeToggle.querySelector('.icon');
    if (body.classList.contains('dark-mode')) {
      icon.textContent = '🌞';
      icon.title = 'Modo claro';
    } else {
      icon.textContent = '🌚';
      icon.title = 'Modo oscuro';
    }
  }
  
  // Inicializar icono
  updateToggleIcon();
});

