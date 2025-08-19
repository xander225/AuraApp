document.addEventListener("DOMContentLoaded", function() {
    
    // --- LÓGICA PARA LA PANTALLA DE CARGA CON VIDEO ---
    const splashScreen = document.getElementById('splash-screen');
    const introVideo = document.getElementById('intro-video');
    const mainContent = document.getElementById('main-content');

    // Revisa si los elementos existen para evitar errores
    if (splashScreen && introVideo && mainContent) {
        // Escucha el evento 'ended' que se dispara cuando el video termina
        introVideo.addEventListener('ended', function() {
            // Oculta la pantalla de carga con una transición suave
            splashScreen.style.transition = 'opacity 0.5s ease-out';
            splashScreen.style.opacity = '0';

            // Muestra el contenido principal y elimina la pantalla de carga del DOM
            // después de que termine la transición de opacidad (500ms)
            setTimeout(() => {
                splashScreen.style.display = 'none';
                mainContent.classList.remove('hidden'); // Quita la clase .hidden para mostrarlo
                mainContent.style.display = 'block'; // Asegura que sea visible
            }, 500); 
        });
    }
    
    // --- LÓGICA PARA LAS ANIMACIONES DE SCROLL ---
    const sections = document.querySelectorAll('.fade-in-section');

    const options = {
        root: null, // Observa en relación al viewport
        rootMargin: '0px',
        threshold: 0.1 // Activa la animación cuando el 10% del elemento es visible
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            // Si el elemento está visible en la pantalla
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Deja de observar el elemento una vez que la animación se ha disparado
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Asigna el observador a cada una de las secciones
    sections.forEach(section => {
        observer.observe(section);
    });
});