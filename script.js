// Se eliminó el código del slider ya que no se necesita más

// Intersection Observer para animaciones de entrada
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100); // Staggered animation
      }
    });
  }, observerOptions);

  // Observar elementos para animar
  const animateElements = document.querySelectorAll('.sobre-mi-item, .proyecto, .tech-item, .experiencia-item');
  animateElements.forEach(el => observer.observe(el));

  // Dark mode
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
      icon.innerHTML = '<img src="img/sun.svg" alt="Modo claro" width="24" height="24">';
      icon.title = 'Modo claro';
    } else {
      icon.innerHTML = '<img src="img/moon.svg" alt="Modo oscuro" width="24" height="24">';
      icon.title = 'Modo oscuro';
    }
  }

  // Inicializar icono
  updateToggleIcon();
});



