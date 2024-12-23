// Aquí puedes agregar scripts interactivos
document.addEventListener('DOMContentLoaded', () => {
    // Código para interacciones adicionales
});
document.addEventListener("scroll", function() {
    const experienceSection = document.querySelector('.experience');
    const sectionPosition = experienceSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        experienceSection.style.opacity = 1; // Hacer visible
        experienceSection.style.transform = 'translateY(0)'; // Regresar a la posición original
    }
});
// Desactivar clic derecho
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            document.getElementById('warning').style.display = 'block'; // Mostrar advertencia
        });

        // Desactivar combinaciones de teclas
        document.addEventListener('keydown', function(e) {
            // Desactivar Ctrl + C, Ctrl + X, Ctrl + V y Ctrl + U
            if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'v' || e.key === 'u')) {
                e.preventDefault();
            }

            // Desactivar la tecla F12 (Desarrollador)
            if (e.key === 'F12') {
                e.preventDefault();
            }
        });

        // Desactivar arrastrar y soltar imágenes
        document.addEventListener('dragstart', function(e) {
            e.preventDefault();
        });
const carouselInner = document.querySelector('.carousel-inner');
const logos = document.querySelectorAll('.carousel-logo');
const totalLogos = logos.length;
// Reproductor
const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPause');
const backward10 = document.getElementById('backward10');
const forward10 = document.getElementById('forward10');
const progress = document.getElementById('progress');
const timeDisplay = document.getElementById('time');
const fullscreenBtn = document.getElementById('fullscreen');

