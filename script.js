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

// Reproduce o pausa el video
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = '⏸️';
    } else {
        video.pause();
        playPauseBtn.textContent = '▶️';
    }
});

// Retrocede 10 segundos
backward10.addEventListener('click', () => {
    video.currentTime -= 10;
});

// Avanza 10 segundos
forward10.addEventListener('click', () => {
    video.currentTime += 10;
});

// Actualiza la barra de progreso y el tiempo
video.addEventListener('timeupdate', () => {
    const duration = video.duration;
    const currentTime = video.currentTime;
    progress.value = (currentTime / duration) * 100;
    timeDisplay.textContent = formatTime(currentTime) + ' / ' + formatTime(duration);
});

// Actualiza el tiempo del video al arrastrar la barra de progreso
progress.addEventListener('input', () => {
    video.currentTime = (progress.value / 100) * video.duration;
});

// Formato de tiempo
function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Pantalla completa
fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});


