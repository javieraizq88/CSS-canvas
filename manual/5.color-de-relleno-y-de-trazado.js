function aleatorio(inferior, superior) {
    numPosibilidades = superior - inferior
    aleat = Math.random() * numPosibilidades
    aleat = Math.floor(aleat)
    return parseInt(inferior) + aleat
}
function colorAleatorio() {
    return "rgb(" + aleatorio(0, 255) + "," + aleatorio(0, 255) + "," + aleatorio(0, 255) + ")";
}

function cuadradosAleatorios(){
    for(i=0; i<300; i+=10){
       for(j=0; j<250; j+=10){
          contexto.fillStyle = colorAleatorio();
          contexto.fillRect(i,j,10,10)
       }
    }
 }

 //variable global contexto sin inicializar
var contexto;

window.onload = function(){
   //Recibimos el elemento canvas
   contexto = cargaContextoCanvas('micanvas');
   if(contexto){
      //Si tengo el contexto, defino la función periódica
      setInterval("cuadradosAleatorios(contexto)", 200);
   }
}
