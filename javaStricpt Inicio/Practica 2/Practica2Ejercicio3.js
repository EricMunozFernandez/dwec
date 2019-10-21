function palindromo(cadena){
    let cadenaSinEspacios = cadena.replace(/\s+/g, '');
    if(cadenaSinEspacios.toLowerCase() === cadenaSinEspacios.split("").reverse().join("").toLowerCase())
        alert("Es un palindromo")
    else
        alert("No es un palindromo")
}

palindromo(prompt('introduce texto'));
