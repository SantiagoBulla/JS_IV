function reloj(){
    let tiempoGlobal = new Date();

    let hora = tiempoGlobal.getHours();
    let minutos = tiempoGlobal.getMinutes();
    let segundos = tiempoGlobal.getSeconds();

    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos <10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    let resultado = `${hora} : ${minutos} : ${segundos}`;
    let relojHtml = document.querySelector('.reloj');
    relojHtml.innerHTML = resultado;
}

setInterval(reloj,1000)