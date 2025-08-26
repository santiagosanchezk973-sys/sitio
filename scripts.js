
window.onload = function() {
    if (!sessionStorage.getItem('bienvenidaMostrada')) {
        alert('¡BIENVENIDO!');
        sessionStorage.setItem('bienvenidaMostrada', 'si');
    }
};

