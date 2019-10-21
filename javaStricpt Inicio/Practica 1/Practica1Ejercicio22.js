
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
var dni = prompt('introduce tu numero de DNI')
if(dni<=0||dni>=99999999)
{alert('dni no valido')}
else {
    do {
        var letraDNI = prompt('introduce tu letra de DNI en mayusculas')
    }
    while (letraDNI.toUpperCase() != letras[dni%23])
    alert('DNI correcto')
    }

