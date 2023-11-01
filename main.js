function tocaSom (idElementoAudio){
    document.querySelector (idElementoAudio).play();
}
const listaDeTeclas= docuent.querySelectorAll(".tecla");

let contdor=0;
while (contador<listaDeTeclas.length){
    const efeito=listaDeTeclas[contador].classList[1];
    const idAudi='#som_'+efeito;
    listaDeTeclas[contador].onclick=function (){
        tocaSom(idAudio);
    }
    contdor= contado=+1;
    console.log(contador);
}