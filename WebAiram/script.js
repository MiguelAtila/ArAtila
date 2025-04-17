// Carrusel misión / visión
let index = 0;
const carrusel = document.getElementById('carrusel');
setInterval(() => {
  index = (index + 1) % 2;
  carrusel.style.transform = `translateX(-${index * 100}%)`;
}, 5000);

// Formulario
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Formulario enviado correctamente. ¡Gracias por contactarnos!');
});
