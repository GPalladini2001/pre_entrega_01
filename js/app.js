function par (numero){
    return numero % 2 == 0;
}

function negativo (numero){
    return numero < 0;
}

function positivo (numero){
    return numero > 0;
}

function general (){
    respuesta = parseInt(prompt("Ingrese un numero: "));

    if (isNaN(respuesta)){
        alert("Ingrese un numero valido, hace caso");
    }
    else if (positivo(respuesta)){
        if (par(respuesta)){
            alert (`El numero ${respuesta} es positivo y par`);
        }
        else{
        alert(`El numero ${respuesta} es positivo e impar`);
        }
    }
    else if (negativo(respuesta)){
        if (par(respuesta)){
            alert(`El numero ${respuesta} es negativo y par`);
        }
        else{
        alert(`El numero ${respuesta} es negativo e impar`);
        }
    }
    else{
        alert(`El numero ingresado es 0`);
    }
}

general();