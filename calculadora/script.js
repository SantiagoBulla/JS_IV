const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonSelected = boton.textContent;

        if (boton.id === 'limpiar') {
            pantalla.textContent = '0';
            return
        }

        if (boton.id === 'borrar') {
            if (pantalla.textContent.length === 1 || pantalla.textContent === 'Error') {
                pantalla.textContent = '0';
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === 'igual') {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = 'Error';
            }
            return;
        }

        if (pantalla.textContent === '0' || pantalla.textContent === 'Error') {
            pantalla.textContent = botonSelected;
        } else if (botonSelected === '/' && pantalla.textContent.slice(-1) === '/') {
            return; //obtiene el ultimo valor de pantalla y valida si el boton seleccionado fue /, de ser asi retorna el programa evitando la duplicidad
        } else {
            pantalla.textContent += botonSelected;
        }
    })
})