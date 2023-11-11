const body = document.querySelector('body');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => {
    toggle.classList.toggle("toggleBlanco");//por defecto en off
    body.classList.toggle("toggleBlanco");//cambia la clase toggleBlanco en true o false
})