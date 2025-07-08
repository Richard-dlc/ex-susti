// Script para funcionalidades interactivas en la página de fotogrametría

// Validación del formulario de contacto
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(e) {
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !mensaje) {
        alert("Por favor, completa todos los campos del formulario.");
        e.preventDefault();
    } else if (!correo.includes("@") || !correo.includes(".")) {
        alert("Ingresa un correo electrónico válido.");
        e.preventDefault();
    } else {
        alert("Mensaje enviado correctamente. ¡Gracias!");
    }
});

// Lógica para acordeón
const acordeones = document.querySelectorAll(".acordeon");
acordeones.forEach(btn => {
    btn.addEventListener("click", function() {
        this.classList.toggle("activo");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});

// Función para galería interactiva
function mostrarImagen(imagen) {
    const nuevaVentana = window.open("", "Imagen", "width=800,height=600");
    nuevaVentana.document.write(`<img src="${imagen.src}" alt="${imagen.alt}" style="width:100%; height:auto;">`);
}

// Mapa interactivo usando Leaflet
const mapa = L.map('map').setView([-9.528, -77.528], 6); // Coordenadas aproximadas de Áncash, Perú
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mapa);
L.marker([-9.528, -77.528]).addTo(mapa)
    .bindPopup('Zona de estudio: Áncash, Perú')
    .openPopup();
