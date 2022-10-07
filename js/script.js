let palabras = ['ORACLE','FRONTEND','ARBOLES','COLOMBIA','ANIMALES'];
if(localStorage.getItem('arrayPalabras')===null){
    localStorage.setItem('arrayPalabras',JSON.stringify(palabras));
}
let arrayPalabras=JSON.parse(localStorage.getItem('arrayPalabras'));

//REDIRRECIONAR
    function menu(){
    location.href='./index.html';
    }
    function agregarPalabra(){
    location.href='./addPalabra.html';
    }
    function iniciarGame(){
    location.href='./startGame.html';
    }

