function validar() {
    //textos
    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;
    let correo=document.getElementById("correo").value;
    let poblacion=document.getElementById("poblacion").value;
    let provincia=document.getElementById("provincia").value;
    //expresiones
    let exReg=new RegExp(/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/)
    let exRegEmail= new RegExp('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$')
    //validaciones de texto
    validacion(nombre,exReg);
    validacion(apellido,exReg);
    validacion(correo,exRegEmail);
    validacion(poblacion,exReg);
    validacion(provincia,exReg);
    //radios y ckeckbox
    let edades = document.getElementsByClassName("edad");
    alert(edades+' '+typeof edades)
    //no lo ve como array, en internet lo pone asi, no se solucionarlo
    let edad = "";
    let razones = document.getElementsByClassName("razon");
    let razon = "";

    for (var i = 0; i < edades.length; i++) {
        if (edades[i].checked) {
            edad = edades[i].value;
        }
    }
    for (var i = 0; i < conocidos.length; i++) {
        if (conocidos[i].checked) {
            conocido += conocidos[i].value + " ";
        }
    }
    //mensaje final
    alert("Tu nombre es: " + nombre
        + "\n Tu apellido es: " + apellido
        + "\n Tu correo es: " + correo
        + "\n Tu poblacion es: " + poblacion
        + "\n Tu provincia es: " + provincia
        + "\n Tu edad es entre: " + edad
        + "\n Nos conoces mediante: " + razon);

}
//funcion validacion
function validacion(texto,exReg){
    if (exReg.test(texto)){
        alert(texto+' esta bien')
    }
    else{
        alert(texto+' esta mal')
    }
}
//funcion borrar datos
function borrar() {
    let nombre = document.getElementById("nombre").value = "";
    let apellido = document.getElementById("apellido").value = "";
    let correo = document.getElementById("email").value = "";
    let poblacion = document.getElementById("poblacion").value = "";
    let provincia = document.getElementById("provincia").value = "";
    document.getElementsByClassName("edad").forEach((x) => x.checked == false);
    document.getElementsByClassName("razon").forEach((y) => y.checked == false);
}
