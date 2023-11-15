let eventos = [];
let arr = [];

const nombreEvento = document.querySelector('#nombreEvento');
const fechaEvento = document.querySelector('#fechaEvento');
const btnAgregar = document.querySelector('#agregar');
const listaEventos = document.querySelector('#listaEventos');

const json = cargar();//traer lo del localstorage

try {
    arr = JSON.parse(json);//convertir en json
} catch (error) {
    arr = [];
}
eventos = arr ? [...arr] : [];//si hay eventos agregelos al array del localstorage sino dejelo vacio
mostrarEventos();

document.querySelector("form").addEventListener('submit', e => {
    e.preventDefault();//apenas eschuche el evento vacia los campos
    agregarEvento();
});

function agregarEvento() {
    if (nombreEvento.value === '' || fechaEvento.value === '') {
        alert('Todos los campos son obligatorios');
        return;
    }

    if (diferenciaFecha(fechaEvento.value) < 0) {
        alert('La fecha no puede ser inferior a la fecha actual');
        return;
    }

    const nuevoEvento = {
        id: (Math.random() * 100).toString(36).slice(3),
        nombre: nombreEvento.value,
        fecha: fechaEvento.value
    };

    eventos.unshift(nuevoEvento);//agrega el evento al array

    guardar(JSON.stringify(eventos));//almacenar en el localstorage
    nombreEvento.value = '';//dejar el nombre evento vacio

    mostrarEventos();
}

function diferenciaFecha(destino) {
    let fechaDestino = new Date(destino);
    let fechaActual = new Date();

    let diferencia = fechaDestino.getTime() - fechaActual.getTime();//ms
    let dias = Math.ceil(diferencia / (1000 * 3600 * 24));//lo redondea uno por encima
    return dias;
}

function mostrarEventos() {
    if (eventos.length > 0) {
        const eventosHTML = eventos.map((evento) => {//recorre el arreglo para mostrar los eventos
            return `
            <div class="evento">
                <div class="dias">
                    <span class="diasFaltantes">${diferenciaFecha(evento.fecha)}</span>
                    <span class="texto">dias para</span>
                </div>
    
                <div class="nombreEvento">${evento.nombre}</div>
                <div class="fechaEvento">${evento.fecha}</div>
    
                <div class="acciones">
                    <button data-id="${evento.id}" class="eliminar">Eliminar</button>
                </div>
            </div>
            `
        });
        listaEventos.innerHTML = eventosHTML.join('');
        document.querySelectorAll('.eliminar').forEach(button => {//recorre todos los boton
            button.addEventListener('click', e => {
                const id = button.getAttribute('data-id');//escuche su propio id
                eventos = eventos.filter(evento => evento.id !== id);//deje todos los demas eventos idiferente del id que se dio click en el boton
    
                guardar(JSON.stringify(eventos));//actualizar el localstorage con los eventos que quedaron
    
                mostrarEventos();//mostrar los que quedaron
            });
        });
    } else {
        listaEventos.innerHTML = `
        <div class="emptyList">
            <h2>NO TIENES EVENTOS PENDIENTES</h2>
            <img src="./img/triste.png" alt="noEvents">
        </div>
        `;
    }
    
}

function guardar(datos) {
    localStorage.setItem('lista', datos);//guardar los datos en el local storage

}

function cargar() {
    return localStorage.getItem('lista');
}