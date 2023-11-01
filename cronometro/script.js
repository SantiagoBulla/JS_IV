let hr = mn = sg = ms = "0" + 0, iniciarTiempo;

const btnIniciar = document.querySelector(".iniciar");
const btnDetener = document.querySelector(".detener");
const btnReiniciar = document.querySelector(".reiniciar");

btnIniciar.addEventListener('click', iniciar);
btnDetener.addEventListener('click', detener);
btnReiniciar.addEventListener('click', reiniciar);

function iniciar() {
    btnIniciar.classList.add('on');//habilitar la clase temporal
    iniciarTiempo = setInterval(() => {
        ms++;
        ms = ms < 10 ? '0' + ms : ms;
        if (ms == 100) {
            sg++;
            sg = sg < 10 ? '0' + sg : sg;
            ms = '0' + 0;
        }
        if (sg == 60) {
            mn++;
            ms = ms < 10 ? '0' + ms : ms;
            sg = '0' + 0;
        }
        if (mn == 60) {
            hr++;
            hr = hr < 10 ? '0' + hr : hr;
            mn = '0' + 0;
        }

        ingresarValor();
    }, 10)
}

function detener() {
    btnIniciar.classList.remove('on');
    clearInterval(iniciarTiempo);//dejar de refrescar el cronometro
}

function reiniciar() {
    btnIniciar.classList.remove('on');
    clearInterval(iniciarTiempo);//dejar de refrescar el cronometro
    hr = mn = sg = ms = "0" + 0;
    ingresarValor();
}

function ingresarValor(){
    document.querySelector('.milisegundo').innerHTML = ms;
    document.querySelector('.segundo').innerHTML = sg;
    document.querySelector('.minuto').innerHTML = mn;
    document.querySelector('.hora').innerHTML = hr;
}