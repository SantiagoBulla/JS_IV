let btnPlayMusic = new Audio('C:/Users/Public/Documents/JS_IV/cuentaNavidad/resources/allWant___63654be3bebeac9___.mp3');
function obtenerTiempoFaltante(fechaLimite) {
    let ahora = new Date();
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000
    let segundosFaltante = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltante = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltante = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let diasFaltante = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return {
        segundosFaltante,
        minutosFaltante,
        horasFaltante,
        diasFaltante,
        tiempoFaltante
    }
}

// console.log(obtenerTiempoFaltante('DEC 25 2023'));
function cuentaRegresiva(tiempoFaltante, reloj, mensaje) {
    const e = document.getElementById(reloj);
    const dias = document.getElementById('dias');
    const horas = document.getElementById('horas');
    const minutos = document.getElementById('minutos');
    const segundos = document.getElementById('segundos');
    const enunciado = document.getElementById('enunciado');

    const tiempoActual = setInterval(() => {
        let  t = obtenerTiempoFaltante(tiempoFaltante);
        enunciado.innerHTML = 'Faltan para navidad'
        dias.innerHTML = t.diasFaltante;
        horas.innerHTML = t.horasFaltante;
        minutos.innerHTML = t.minutosFaltante;
        segundos.innerHTML = t.segundosFaltante;
        // e.innerHTML = `${t.diasFaltante}d:${t.horasFaltante}h:${t.minutosFaltante}m:${t.segundosFaltante}sg`;

        if(t.tiempoFaltante <= 1){
            clearInterval(tiempoActual);
            enunciado.innerHTML = mensaje;
            horas.innerHTML = '00';
            minutos.innerHTML = '00';
            segundos.innerHTML = '00';
            dias.innerHTML = '00';
            const btn = document.getElementById("btnPlay");
            btn.classList.add('off');
            const btn2 = document.getElementById("btnPause");
            btn2.classList.add('off');
        }

    }, 1000);

};

cuentaRegresiva('Nov 8 2023 22:36:00','cuentaRegresiva','Feliz navidad');

function play(){
    let divPapaNoel = document.getElementById('papaNoelBaila');
    divPapaNoel.classList.add('on');
    btnPlayMusic.play();
}

function pause(){
    let divPapaNoel = document.getElementById('papaNoelBaila');
    divPapaNoel.classList.remove('on');
}