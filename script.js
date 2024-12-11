function actualizarPerfil(nombre, descripcion) {
    document.getElementById('nombre').textContent = nombre;
    document.getElementById('descripcion').textContent = descripcion;
}


actualizarPerfil("Paredes Jhony", "Ingeniero en Sistemas de la Información.");


function changeLight(color) {

    document.getElementById('red').style.backgroundColor = 'gray';
    document.getElementById('yellow').style.backgroundColor = 'gray';
    document.getElementById('green').style.backgroundColor = 'gray';

    
    if (color === 'red') {
        document.getElementById('red').style.backgroundColor = 'red';
    } else if (color === 'yellow') {
        document.getElementById('yellow').style.backgroundColor = 'yellow';
    } else if (color === 'green') {
        document.getElementById('green').style.backgroundColor = 'green';
    }
}


const header = document.getElementById('header');
