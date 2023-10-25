let esqueleto = 'off';
let esqueletoStop = document.getElementById('esqueletoquieto');
let btnClick = new Audio('C:/Users/57305/Documents/ADSO/TRIMESTRE_IV/JS_IV/baileMultimedia/sound/botonbailar.mp3');
let btnPlayMusic = new Audio('C:/Users/57305/Documents/ADSO/TRIMESTRE_IV/JS_IV/baileMultimedia/sound/audio.mp3');

function bailar() {
    if (esqueleto == 'off') {
        esqueleto = 'on'
        esqueletoStop.classList.add('on');//hace una agregacion de la clase on
        esqueletoStop.addEventListener('click', () => {
            btnClick.play();
            btnPlayMusic.play();
        })
    } else {
        esqueleto = 'off'
        esqueletoStop.classList.remove('on');
        esqueletoStop.addEventListener('click', () => {
            btnPlayMusic.pause();
        })
    }
}