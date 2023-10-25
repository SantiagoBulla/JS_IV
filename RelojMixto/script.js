const deg = 6;

const horas = document.querySelector('.hora');
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');

setInterval(() => {
    let tiempo = new Date();

    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;

    horas.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;

})

function reloj(){
    let tiempoGlobal = new Date();

    let hora = tiempoGlobal.getHours();
    let minutos = tiempoGlobal.getMinutes();
    let segundos = tiempoGlobal.getSeconds();
    let formato = hora >= 12 ? 'PM' : 'AM';

    hora = (hora % 12) || 12; // el residuo sera la hora en formato de 12 si es 0 significa que son las 12:00

    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos <10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    let resultado = `${hora} : ${minutos} : ${segundos} ${formato}`;
    let relojHtml = document.querySelector('.reloj-digital');
    relojHtml.innerHTML = resultado;
}

setInterval(reloj,1000)