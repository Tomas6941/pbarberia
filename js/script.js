const numeroWhatsApp = "5491112345678"; // Cambiar por tu número

function redirigirWhatsApp() {
  window.open(`https://wa.me/${numeroWhatsApp}`, '_blank');
}

function confirmarTurno() {
  const fecha = document.getElementById('fecha').value;
  const mensaje = document.getElementById('mensaje');

  if (!fecha) {
    mensaje.textContent = "Seleccioná una fecha.";
    return;
  }

  mensaje.textContent = `Turno seleccionado para el ${fecha}`;

  const texto = encodeURIComponent(`Hola, quiero reservar un turno para el ${fecha}`);
  window.open(`https://wa.me/${numeroWhatsApp}?text=${texto}`, '_blank');
}

document.getElementById('year').textContent = new Date().getFullYear();
