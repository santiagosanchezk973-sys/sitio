
function validarContacto() {
    var nombre = document.getElementById('nombre');
    var email = document.getElementById('email');
    var mensaje = document.getElementById('mensaje');

    if (!nombre.value.trim()) {
        alert('Por favor, escribe tu nombre.');
        nombre.focus();
        return false;
    }
    if (!email.value.trim()) {
        alert('Por favor, escribe tu correo.');
        email.focus();
        return false;
    }
    if (!mensaje.value.trim()) {
        alert('Por favor, escribe tu mensaje.');
        mensaje.focus();
        return false;
    }
    // Si todo está bien, permite el envío
    return true;
}