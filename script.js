// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // Función para hacer scroll suave a secciones
    window.scrollToSection = function(id) {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Manejador del formulario de contacto
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Gracias por tu mensaje 💗 Nos pondremos en contacto pronto.");
            form.reset();
        });
    }
});
