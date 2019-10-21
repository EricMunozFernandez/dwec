let numAleatorio= generarNumAl()
    function generarNumAl(){return Math.round(Math.random()*1000)}
let acertarNumero =()=> {
    do {
        numero = parseInt(prompt("Adivina el numero del 1 al 1000"))
        if(numero > numAleatorio)
            alert("El numero es menor")
        else if (numero < numAleatorio)
            alert("El numero es mayor")
        else
            alert("Enhorabuena, has acertado")
    }while (numero != numAleatorio)
}
alert(numAleatorio)
acertarNumero()