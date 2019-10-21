
calcSueldo(parseInt(prompt('introduce el sueldo')),
    parseInt(prompt('introduce los años que llevas en la empresa')))
function calcSueldo(sueldo,años){
    if (sueldo<500 && años>=10)
        alert('el nuevo sueldo a pagar seria: '+(sueldo+(sueldo*0.2)))
    if (sueldo<500 && años<10)
        alert('el nuevo sueldo a pagar seria: '+(sueldo+(sueldo*0.1)))
    if (sueldo>=500)
        alert('sueldo sin cambios: '+sueldo)
}