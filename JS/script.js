/*****************************************************
                VARIABLES
*****************************************************/

const btnComenzar = document.getElementById("btnComenzar");
const musica = document.getElementById("musica");

const inicio = document.getElementById("inicio");
const historia = document.getElementById("historia");

const contador = document.querySelector(".contador");
const galeria = document.querySelector(".galeria");
const carta = document.querySelector(".carta");
const propuesta = document.querySelector(".propuesta");

const textoCarta = document.getElementById("textoCarta");

const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

/*****************************************************
            FECHA DE NUESTRA HISTORIA
*****************************************************/

const fechaInicio = new Date("2022-02-27T00:00:00");

/*****************************************************
            BOTÓN COMENZAR
*****************************************************/

btnComenzar.addEventListener("click", iniciarHistoria);

function iniciarHistoria(){

    inicio.style.display = "none";

    historia.classList.remove("oculto");

    musica.play().catch(()=>{
        console.log("El navegador requiere interacción para reproducir el audio.");
    });

    iniciarContador();

    escribirCarta();

    mostrarSecciones();

}

/*****************************************************
        MOSTRAR SECCIONES POCO A POCO
*****************************************************/

function mostrarSecciones(){

    setTimeout(()=>{

        contador.classList.remove("oculto");

    },3000);

    setTimeout(()=>{

        galeria.classList.remove("oculto");

    },7000);

    setTimeout(()=>{

        carta.classList.remove("oculto");

    },11000);

    setTimeout(()=>{

        propuesta.classList.remove("oculto");

    },18000);

}

/*****************************************************
            CONTADOR
*****************************************************/

function iniciarContador(){

    actualizarContador();

    setInterval(actualizarContador,1000);

}

function actualizarContador(){

    const ahora = new Date();

    const diferencia = ahora - fechaInicio;

    const totalSegundos = Math.floor(diferencia/1000);

    const totalMinutos = Math.floor(totalSegundos/60);

    const totalHoras = Math.floor(totalMinutos/60);

    dias.textContent = Math.floor(totalHoras/24);

    horas.textContent = totalHoras % 24;

    minutos.textContent = totalMinutos % 60;

    segundos.textContent = totalSegundos % 60;

}

/*****************************************************
            CARTA
*****************************************************/

const cartaTexto = `

Mi amor ❤️

Desde aquel 27 de febrero de 2022 mi vida cambió completamente.

Jamás imaginé que una persona pudiera convertirse en mi lugar favorito.

Gracias por cada abrazo.

Gracias por cada sonrisa.

Gracias por cada consejo.

Gracias por cada momento vivido.

Contigo aprendí que el amor verdadero existe.

No importa cuántos años pasen...

Siempre seguiré eligiéndote.

Eres mi paz.

Mi alegría.

Mi compañera.

Mi mejor amiga.

Y el amor de mi vida.

Si pudiera volver atrás...

Volvería a elegirte una y mil veces.

Gracias por existir.

Te amo infinitamente.

Espero que nunca me faltes.

❤️
`;

let posicion = 0;

function escribirCarta(){

    escribir();

}

function escribir(){

    if(posicion < cartaTexto.length){

        textoCarta.textContent += cartaTexto.charAt(posicion);

        posicion++;

        setTimeout(escribir,45);

    }

}

/*****************************************************
            BOTONES DE LA PROPUESTA
*****************************************************/

const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");
const pantallaFinal = document.getElementById("final");

/*****************************************************
            BOTÓN "NO"
*****************************************************/

btnNo.addEventListener("mouseover", moverBoton);
btnNo.addEventListener("click", moverBoton);

function moverBoton(){

    const ancho = window.innerWidth - btnNo.offsetWidth - 20;
    const alto = window.innerHeight - btnNo.offsetHeight - 20;

    const x = Math.random() * ancho;
    const y = Math.random() * alto;

    btnNo.style.position = "fixed";
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;

}

/*****************************************************
            BOTÓN "SÍ"
*****************************************************/

btnSi.addEventListener("click", aceptarPropuesta);

function aceptarPropuesta(){

    propuesta.classList.add("oculto");

    pantallaFinal.classList.remove("oculto");

    crearExplosionCorazones();

}

/*****************************************************
        CORAZONES FLOTANDO
*****************************************************/

const hearts = document.getElementById("hearts");

function crearCorazon(){

    const corazon = document.createElement("div");

    corazon.innerHTML = "❤️";

    corazon.style.position = "fixed";

    corazon.style.left = Math.random()*100+"vw";

    corazon.style.bottom = "-50px";

    corazon.style.fontSize =
    Math.random()*25+20+"px";

    corazon.style.opacity =
    Math.random();

    corazon.style.transition =
    "transform 10s linear, opacity 10s";

    hearts.appendChild(corazon);

    setTimeout(()=>{

        corazon.style.transform=
        `translateY(-120vh)
        translateX(${Math.random()*200-100}px)
        rotate(${Math.random()*720}deg)`;

        corazon.style.opacity=0;

    },100);

    setTimeout(()=>{

        corazon.remove();

    },10000);

}

setInterval(criarCorazonesAutomaticos,700);

function criarCorazonesAutomaticos(){

    crearCorazon();

}

/*****************************************************
            ESTRELLAS
*****************************************************/

const stars = document.getElementById("stars");

for(let i=0;i<180;i++){

    const estrella=document.createElement("div");

    estrella.style.position="absolute";

    estrella.style.width="2px";

    estrella.style.height="2px";

    estrella.style.background="white";

    estrella.style.borderRadius="50%";

    estrella.style.left=Math.random()*100+"vw";

    estrella.style.top=Math.random()*100+"vh";

    estrella.style.opacity=Math.random();

    estrella.style.animation=
    `parpadear ${Math.random()*4+2}s infinite`;

    stars.appendChild(estrella);

}

/*****************************************************
        KEYFRAMES DESDE JS
*****************************************************/

const estilo=document.createElement("style");

estilo.textContent=`

@keyframes parpadear{

0%{
opacity:.2;
transform:scale(1);
}

50%{
opacity:1;
transform:scale(2);
}

100%{
opacity:.2;
transform:scale(1);
}

}

`;

document.head.appendChild(estilo);

/*****************************************************
        MENSAJE FINAL
*****************************************************/

setTimeout(()=>{

    console.log("Todo listo ❤️");
    
    },1000);

/*****************************************************
        EXPLOSIÓN DE CORAZONES
*****************************************************/

function crearExplosionCorazones(){

    for(let i=0;i<120;i++){

        const corazon=document.createElement("div");

        corazon.innerHTML="💖";

        corazon.style.position="fixed";

        corazon.style.left="50%";

        corazon.style.top="50%";

        corazon.style.fontSize=(Math.random()*30+20)+"px";

        corazon.style.pointerEvents="none";

        corazon.style.zIndex="999";

        document.body.appendChild(corazon);

        const angulo=Math.random()*Math.PI*2;

        const distancia=Math.random()*700+100;

        const x=Math.cos(angulo)*distancia;

        const y=Math.sin(angulo)*distancia;

        corazon.animate([

            {
                transform:"translate(0,0) scale(0)",
                opacity:1
            },

            {
                transform:`translate(${x}px,${y}px) scale(1.5)`,
                opacity:0
            }

        ],{

            duration:2500,
            easing:"ease-out"

        });

        setTimeout(()=>{

            corazon.remove();

        },2500);

    }

}

/*****************************************************
            BRILLO DEL ANILLO
*****************************************************/

const anillo=document.querySelector(".anillo");

setInterval(()=>{

    anillo.animate([

        {
            filter:"drop-shadow(0 0 10px gold)"
        },

        {
            filter:"drop-shadow(0 0 40px yellow)"
        },

        {
            filter:"drop-shadow(0 0 10px gold)"
        }

    ],{

        duration:1500

    });

},1800);


/*****************************************************
            FUEGOS ARTIFICIALES
*****************************************************/

function fuegosArtificiales(){

    for(let i=0;i<80;i++){

        const chispa=document.createElement("div");

        chispa.style.position="fixed";

        chispa.style.left="50%";

        chispa.style.top="50%";

        chispa.style.width="6px";

        chispa.style.height="6px";

        chispa.style.borderRadius="50%";

        chispa.style.background=
        `hsl(${Math.random()*360},100%,60%)`;

        document.body.appendChild(chispa);

        const angulo=Math.random()*360;

        const distancia=Math.random()*500;

        chispa.animate([

            {
                transform:"translate(0,0)",
                opacity:1
            },

            {
                transform:
                `translate(
                ${Math.cos(angulo)*distancia}px,
                ${Math.sin(angulo)*distancia}px
                )`,
                opacity:0
            }

        ],{

            duration:2000

        });

        setTimeout(()=>{

            chispa.remove();

        },2000);

    }

}

/*****************************************************
        DESCARGAR RECUERDO
*****************************************************/

const btnDescargar=
document.getElementById("btnDescargar");

btnDescargar.addEventListener("click",()=>{

    const contenido=`
Vanessa ❤️

Dijo que SI 💍

27/02/2022

El comienzo de nuestra historia.

Te amo infinitamente.

`;

    const archivo=new Blob([contenido],{

        type:"text/plain"

    });

    const enlace=document.createElement("a");

    enlace.href=URL.createObjectURL(archivo);

    enlace.download="NuestroRecuerdo.txt";

    enlace.click();

});

console.log("❤️ Vanessa, gracias por existir ❤️");

/*****************************************************
            APARECER
*****************************************************/

const elementos=document.querySelectorAll("section");

const observador=new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.animate([

                {

                    opacity:0,

                    transform:"translateY(80px)"

                },

                {

                    opacity:1,

                    transform:"translateY(0)"

                }

            ],{

                duration:1200

            });

        }

    });

});

elementos.forEach((e)=>{

    observador.observe(e);

});