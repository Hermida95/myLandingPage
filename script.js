// ===== ANIMACIÓN DE CARGA =====

// Variable para controlar si ya se mostró la animación en esta sesión
let loaderShown = false;

//Función principal que inicia todo
function initLoader() {
    // Verificar si ya se mostró en esta sesión del navegador
    const hasSeenLoader = sessionStorage.getItem('loaderShown');
    
    if (hasSeenLoader === 'true') {
        // Ya se mostró, ocultar inmediatamente
        const loader = document.getElementById('loader-container');
        if (loader) {
            loader.style.display = 'none';
        }
        return; // Salir de la función
    }
    
    // Marcar que ya se mostró (se guarda en la sesión del navegador)
    sessionStorage.setItem('loaderShown', 'true');
    
    // Reproducir el sonido
    const sound = document.getElementById('loader-sound');
    if (sound) {
        sound.play().catch(err => {
            console.log('No se pudo reproducir el audio automáticamente:', err);
        });
    }
    // Esperar 2 segundos (tiempo para que se dibujen las líneas y el relleno)
    setTimeout(() => {
        createParticles(); // Crear las partículas que explotan
        explodeAndReveal(); // Hacer la explosión y revelar la web
    }, 2000);
}

// Función que crea las partículas
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 80; // Número de partículas
    
    // Crear cada partícula
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Posición inicial: centro de la pantalla
        particle.style.left = '50%';
        particle.style.top = '50%';
        
        // Calcular ángulo aleatorio para la dirección
        const angle = (Math.PI * 2 * i) / particleCount; // Distribución uniforme
        const velocity = 100 + Math.random() * 150; // Velocidad aleatoria
        
        // Calcular hacia dónde va la partícula
        const deltaX = Math.cos(angle) * velocity;
        const deltaY = Math.sin(angle) * velocity;
        
        // Añadir la partícula al contenedor
        particlesContainer.appendChild(particle);
        
        // Animar la partícula con un pequeño retraso
        setTimeout(() => {
            particle.style.opacity = '1';
            particle.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0)`;
            particle.style.transition = 'all 0.8s ease-out';
        }, 10);
    }
}

// Función que hace la explosión final y revela la web
function explodeAndReveal() {
    const loader = document.getElementById('loader-container');
    
    // Después de 800ms (tiempo de la explosión)
    setTimeout(() => {
        loader.classList.add('fade-out'); // Añadir clase para desaparecer
        
        // Después de que termine el fade-out
        setTimeout(() => {
            loader.style.display = 'none'; // Quitar completamente del DOM
        }, 800);
    }, 800);
}

// Ejecutar cuando la página cargue
window.addEventListener('load', initLoader);

// ===== SLIDER =====
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

