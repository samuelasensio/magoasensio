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
