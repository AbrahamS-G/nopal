function formatearFecha(fecha) {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return fecha.toLocaleDateString('es-ES', opciones);
}

// Obtener la fecha actual
const fechaActual = new Date();
const fechaFormateada = formatearFecha(fechaActual);

// Insertar la fecha en el elemento con id 'fecha'
document.getElementById('fecha').textContent = fechaFormateada;