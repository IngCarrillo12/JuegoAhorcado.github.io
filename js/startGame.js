    let containerSpan= document.getElementById('subrayado');
    let fallo = 0;
    let aciertos = 0
    let iteraccionBody = 0;
    let letrasPrecionadas = [];
    let palabraSecreta=''
    let canvas = document.getElementById("horca");
    let pincel = canvas.getContext("2d");
    const coordenadasCuerpo =[
        [295,150],
        [305,160],
        [305,160],
        [315,170],
        [295,150],
        [285,160],
        [285,160],
        [275,170],
        [295,145],
        [295,175],
        [295,175],
        [295,200],
        [295,200],
        [305,210],
        [305,210],
        [315,220],
        [295,200],
        [285,210],
        [285,210],
        [275,220]
    ];

    
    function endGame(){
        pincel.font = '20x SF Pixelate Shaded, sans-serif'
        pincel.lineWidth=2;
        pincel.lineCap = 'round';
        if(fallo === 10 ){
            pincel.fillStyle=' #ff0000 ';
            pincel.fillText('GAME OVER',(100),150,600);
        }else if(aciertos === palabraSecreta.length){
            pincel.fillStyle='#008000';
            pincel.fillText('FELICITACIONES!!',(70),140,600);
            pincel.fillText('HAS GANADO',(100),170,600);
        }
        pincel.stroke();
    }
    
    function dibujarParteCuerpo(moveTo,lineTo) {
        pincel.beginPath();
        pincel.moveTo(...moveTo);
        pincel.lineTo(...lineTo);
        pincel.stroke()
    }
    
    function letrasUsadas(key,errores){
        letrasPrecionadas.push(key);
        if(!palabraSecreta.includes(key)){
            pincel.font = '30px SF Pixelate Shaded, sans-serif'
            pincel.lineWidth=6;;
            pincel.lineCap = 'round';
            pincel.fillStyle='#ff0000';
            pincel.fillText(key,10+ (37*(10-errores)),380,30);
            pincel.stroke();
    
        }
    
    }

    function FallasteLetra(){  
        pincel.lineWidth = 7;     
        if(fallo>0 && fallo<=10){
            dibujarParteCuerpo(coordenadasCuerpo[iteraccionBody],coordenadasCuerpo[iteraccionBody+1]);
            iteraccionBody=iteraccionBody+2;
            if(fallo==10)endGame();
        }else{
            pincel.beginPath()
            pincel.arc(295, 130, 15, 0, 2 * Math.PI, false);
            pincel.stroke();
            pincel.closePath();
        }
        fallo=fallo+1 
    }
    
    function mostrarLetraCorrecta(index){
        pincel.font = '30px SF Pixelate Shaded, sans-serif'
        pincel.lineWidth=3;
        pincel.lineCap = 'round';
        pincel.fillStyle='#2c0b8e';
        let anchura = 350/palabraSecreta.length;
        pincel.fillText(palabraSecreta[index],25+ (anchura*index),330)
        pincel.stroke();
        aciertos=aciertos+1;
        if (aciertos=== palabraSecreta.length) endGame();
    }
    
    function validarLetra(letra){
        if(palabraSecreta.includes(letra)){
            for (let i = 0; i < palabraSecreta.length; i++) {
                if(palabraSecreta[i]===letra){
                    mostrarLetraCorrecta(i); 
                }  
            }       
        }else{
            FallasteLetra();
        }
        letrasUsadas(letra,fallo);
    }
    
    function letraEvent(){ 
        document.addEventListener('keydown', (event) => {
            let key = event.key.toUpperCase();
        if(key.match(/^[A-Z]$/i)&& !letrasPrecionadas.includes(key)){
            validarLetra(key);
        }
        }, false);
    }
    
    function creacion_subrayado(){
        let anchura = 350/palabraSecreta.length;
        for (let i = 0; i < palabraSecreta.length; i++) {
            let Xmove_To = 20 + (anchura*i)
            let Xline_To =60 + (anchura* i)
            let Yposicion =340;
            pincel.lineWidth =8;
            pincel.strokeStyle = '#000';
            pincel.moveTo(Xmove_To,Yposicion);
            pincel.lineTo(Xline_To, Yposicion);
        }
        pincel.stroke();
        pincel.closePath();
    }

    
    function escojerPalabraSecreta(){
        let palabra =arrayPalabras[Math.floor(Math.random() * arrayPalabras.length)];
        palabraSecreta=palabra;
    }
    
    function horca(){
// CONTRUCCION DE LA HORCA
//     BASE
        pincel.beginPath();
        pincel.fillStyle = '#EED09D';
        pincel.fillRect(70,270,250,20)
    // TRONCO VERTICAL
        pincel.fillStyle = '#e2b05a';
        pincel.fillRect(120,60,35,210)
    
    // TRONCO HORIZONAL
        pincel.fillRect(120,30,160,30)

    // TRONCO VERTICAL PEQUENHO
        pincel.fillRect(280,30,30,70)
        pincel.fillRect(295,98,5,15)
        pincel.closePath();

    //  TRONCO INCLINADO
        pincel.beginPath();
        pincel.lineWidth = 20;
        pincel.lineCap = 'squared';
        pincel.strokeStyle = "#e2b05a";
        pincel.moveTo(140, 130); 
        pincel.lineTo(220, 50);
        pincel.stroke();   
        pincel.closePath();
    // BORDES
        pincel.beginPath();
        pincel.lineWidth = 2;
        pincel.strokeStyle="#000";
    // BASE
        pincel.strokeRect(70,270,250,20)
    // TRONCO VERTICAL
        pincel.strokeRect(120,60,35,210)
    // TRONCO HORIZONAL
        pincel.strokeRect(120,30,160,30)

    // TRONCO VERTICAL PEQUENHO
        pincel.strokeRect(280,30,30,70)
        pincel.closePath();
    }
    
    function startGame(){
        fallo = 0;
        aciertos = 0
        iteraccionBody = 0;
        letrasPrecionadas = [];
        horca();
        escojerPalabraSecreta();
        creacion_subrayado();
        letraEvent();
    }
    startGame();