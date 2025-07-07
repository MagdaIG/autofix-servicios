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

  titulo.textContent = datos[tipo].titulo;
  descripcion.textContent = datos[tipo].descripcion;
  modal.classList.remove('hidden');
}

function cerrarModal() {
  document.getElementById('modal-servicio').classList.add('hidden');
}
