// script.js

// Hacer que el carrusel cambie automáticamente cada 2 segundos
var myCarousel = document.querySelector('#projectsCarousel');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000, // 2 segundos
  ride: 'carousel'
});

// Validar el formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtén los valores del formulario
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Validar campos (esto es un ejemplo simple, puedes mejorarlo)
    if (name && email && message) {
        alert('¡Gracias por tu mensaje, ' + name + '!');
        // Aquí puedes enviar los datos a tu servidor o servicio de email
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
