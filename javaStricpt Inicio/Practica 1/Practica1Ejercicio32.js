function Edad(FechaNacimiento) {
    var fechaNace = new Date(FechaNacimiento);
    //fecha nacimiento a date
    var fechaActual = new Date()
    //hoy
    var mes = fechaActual.getMonth();
    var dia = fechaActual.getDate();
    var año = fechaActual.getFullYear();
    fechaActual.setDate(dia);
    fechaActual.setMonth(mes);
    fechaActual.setFullYear(año);
    //ponerlo en el mismo patron que la fecha de nacimiento escrita
    edad = Math.floor(((fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365));
    //Math.floor Devuelve el mayor entero menor que o igual a un numero
    //los numeros son de los  60 segundos, 60 minutos y 24 horas del dia con 365 dias
    //1000 es para convertir los segundos en milisegundos
    return edad;
}
var fecha = prompt('fechaNacimientto (yyyy-mm-dd)');
let patron= new RegExp('^[1-2]([0-9]{3})/[0-1][0-9]/[0-3][0-9]$')
if(patron.test(fecha)){
    var edad = Edad(fecha);
    alert('tu edad dentro de cinco años sera de '+(edad+5)+' años.');
}
else {
    alert('patron de fecha incorrecto')
}