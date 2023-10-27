const marcoPuntaje = document.querySelector('.puntaje');
let puntajeActual = 0;
const puntajeMaximo = 5;

const htmlMapa = Array.from(Array(puntajeMaximo)).map((item, i) => {
    return `<div class="item item-${i}" data-pos="${i}"></div>`;
});

marcoPuntaje.innerHTML = htmlMapa.join("");//insertar los div de estrellas en el html

document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("mouseover", e => {
        const posicion = item.getAttribute("data-pos");

        if (puntajeActual === parseInt(posicion) + 1) {
            return
        }

        document.querySelectorAll(".item").forEach(coloreado => {
            if (coloreado.classList.contains("select")) {
                coloreado.classList.remove("select");
            }
        })

        for (let i = 0; i <= posicion; i++) {
            const divPadre = document.querySelector(`.item-${i}`);
            if (!divPadre.classList.contains("select")) {
                divPadre.classList.add("select")
            }
        }

        puntajeActual = parseInt(posicion) + 1;
    });

    item.addEventListener("click", (e) => {
        const posicion = item.getAttribute("data-pos");
        puntajeActual = parseInt(posicion) + 1;
        console.log(puntajeActual);
    })
})