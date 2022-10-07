const expr= new RegExp('^[A-Z]+$', 'i');
    document.querySelector('.btnGuardar').addEventListener('click',(event)=>{
        let inputPalabra = document.querySelector('.inputPalabra')
        let newPalabra = inputPalabra.value.toUpperCase();
        if (inputPalabra.value==0){
            inputPalabra.placeholder = "No Ingreso Texto!!";
        }else if(!arrayPalabras.includes(newPalabra) && newPalabra.length <9 && expr.test(newPalabra)){
            console.log('ENTRO')
            arrayPalabras.push(newPalabra)
            inputPalabra.value='';
            inputPalabra.placeholder = "Palabra Fue Guardada";
            localStorage.setItem('arrayPalabras',JSON.stringify(arrayPalabras));
            iniciarGame();
        }else if(newPalabra.length >9){
            inputPalabra.value=''
            inputPalabra.placeholder = "Max 8 Caracteres";
        }else if(arrayPalabras.includes(newPalabra)){
            inputPalabra.value=''
            inputPalabra.placeholder = "Palabra Ya Estaba Incluida";
        }else if(!newPalabra.match(/^[A-Z]$/i)){
            inputPalabra.value=''
            inputPalabra.placeholder = "Deben ser letras!";
        }
    })
    