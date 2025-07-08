// ========================
// Modal de Servicios
// ========================
function abrirModal(tipo) {
  const modal = document.getElementById('modal-servicio');
  const titulo = document.getElementById('modal-titulo');
  const descripcion = document.getElementById('modal-descripcion');

  const datos = {
    aceite: {
      titulo: 'Cambio de Aceite',
      descripcion: 'Incluye cambio de aceite de motor con productos de alta calidad y revisión general del vehículo.'
    },
    frenos: {
      titulo: 'Revisión de Frenos',
      descripcion: 'Inspección completa del sistema de frenos, ajuste y limpieza de discos y pastillas.'
    },
    diagnostico: {
      titulo: 'Diagnóstico Eléctrico',
      descripcion: 'Evaluación con scanner automotriz para detectar fallas electrónicas en tu vehículo.'
    }
  };

  if (datos[tipo]) {
    titulo.textContent = datos[tipo].titulo;
    descripcion.textContent = datos[tipo].descripcion;
    modal.classList.remove('hidden');
  }
}

function cerrarModal() {
  document.getElementById('modal-servicio').classList.add('hidden');
}

// Cerrar modal de servicio con Escape o clic fuera
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') cerrarModal();
});

document.getElementById('modal-servicio').addEventListener('click', function (e) {
  if (e.target === this) cerrarModal();
});

// ========================
// Modal de Mensaje (Éxito / Error)
// ========================
function mostrarMensaje(titulo, texto) {
  document.getElementById('modal-mensaje-titulo').textContent = titulo;
  document.getElementById('modal-mensaje-texto').textContent = texto;
  document.getElementById('modal-mensaje').classList.remove('hidden');
}

function cerrarMensaje() {
  document.getElementById('modal-mensaje').classList.add('hidden');
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') cerrarMensaje();
});

document.getElementById('modal-mensaje').addEventListener('click', function (e) {
  if (e.target === this) cerrarMensaje();
});

// ========================
// Validación del Formulario
// ========================
document.getElementById("formulario-reparacion").addEventListener("submit", function (e) {
  e.preventDefault();

  const tarjeta = document.getElementById("tarjeta").value.trim();
  const cvv = document.getElementById("cvv").value.trim();
  const nombre = document.getElementById("nombre").value.trim();
  const titular = document.getElementById("titular").value.trim();

  const errores = [];

  if (nombre.length < 2) {
    errores.push("El nombre del cliente es obligatorio.");
  }

  if (!/^\d{16}$/.test(tarjeta.replace(/\s/g, ''))) {
    errores.push("El número de tarjeta debe tener 16 dígitos.");
  }

  if (!/^\d{3}$/.test(cvv)) {
    errores.push("El CVV debe tener 3 dígitos.");
  }

  if (titular.length < 2) {
    errores.push("El nombre del titular es obligatorio.");
  }

  if (errores.length > 0) {
    mostrarMensaje("Errores en el formulario", errores.join("\n"));
    return;
  }

  mostrarMensaje("¡Solicitud enviada!", "Tu solicitud fue enviada correctamente. Pronto nos contactaremos contigo.");
  this.reset();
});
