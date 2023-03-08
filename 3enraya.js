
var casillas = document.getElementsByClassName("boton");
for(i=0;i<casillas.length;i++){
   crearBotones(i)
}

function crearBotones(i){
   casillas[i].addEventListener("click", function(event){prueba(i)});
}
function prueba(numero){
   console.log("el numero es "+numero);
}

