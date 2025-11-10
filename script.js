// Scroll suave al hacer clic en el menú o botón
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Manejador simple del formulario
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Gracias por tu mensaje. Nos pondremos en contacto pronto 💗");
    this.reset();
});
