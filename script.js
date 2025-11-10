// Se eliminó el código del slider ya que no se necesita más

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



