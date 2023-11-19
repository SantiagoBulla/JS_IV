let progreso = document.querySelector('.progreso');
let porcentaje = document.querySelector('.porcentaje');
let celebracion = document.querySelector('body');
let avance = 0;


let tiempo = setInterval(() => {
    avance += 1;
    progreso.style.width = `${avance}%`;//avanza la barra de progreso
    if (avance === 100) {
        clearInterval(tiempo);
        celebracion.classList.add('celebracion');
        porcentaje.textContent = `¡Mision cumplida!`
        porcentaje.style.color = '#FF8C00'
    }else{
        porcentaje.textContent = `${avance}%`
    }
}, 1000);