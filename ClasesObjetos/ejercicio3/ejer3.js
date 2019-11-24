preguntas = [];
numpregunta = 0;
contador = 0;

function verPreguntas() {
    let preguntas = document.getElementById("preguntas");
    if (preguntas.style.display == 'none') {
        preguntas.style.display = 'block';
    } else {
        preguntas.style.display = 'none';
    }
}

function enviar() {
    let pregunta = document.getElementById("pregunta").value;
    let rad = $('input[name="rad"]:checked').val();
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let d = document.getElementById("d").value;
    if (validacion(pregunta, a, b, c, d, rad) == true) {
        preguntas[numpregunta] = new Preguntas(pregunta, a, b, c, d, rad);
        numpregunta++;
        limpiarCamposPregun();
        let crearPreguntas = document.getElementById("preguntas");
        crearPreguntas.style.display='none';
    } else {
        alert("error al introducir los datos");
    }


}

function limpiarCamposPregun() {
    let pregunta = document.getElementById("pregunta").value = "";

    let a = document.getElementById("a").value = "";
    let b = document.getElementById("b").value = "";
    let c = document.getElementById("c").value = "";
    let d = document.getElementById("d").value = "";
}


function generarExamen() {
    if(preguntas.length<5){
        alert('5 preguntas minimo');
    }
    else{
        let divBoton = document.getElementById('botones');
        divBoton.style.display = 'block';
        let crearPreguntas = document.getElementById("preguntas");
        crearPreguntas.style.display='none';
        verPregunta();
    }


}

function verPregunta() {

    let pregunta1 = preguntas[contador].pregunta;

    let divexamen = document.getElementById("examen");

    let divPregunta = document.createElement("p");
    let ptext = document.createTextNode(pregunta1);
    divPregunta.appendChild(ptext);
    divexamen.appendChild(divPregunta);
    generarSelect();
    contador++;

}

function generarSelect() {

    let a = preguntas[contador].a;
    let b = preguntas[contador].b;
    let c = preguntas[contador].c;
    let d = preguntas[contador].d;

    let select = document.createElement("SELECT");
    select.setAttribute("id", "mySelect " + contador);
    document.body.appendChild(select);

    let option1 = document.createElement("option");
    option1.setAttribute("value", "1");
    let respuesta1 = document.createTextNode(a);
    option1.appendChild( respuesta1);

    let option2 = document.createElement("option");
    option2.setAttribute("value", "2");
    let  respuesta2 = document.createTextNode(b);
    option2.appendChild( respuesta2);

    let option3 = document.createElement("option");
    option3.setAttribute("value", "3");
    let  respuesta3 = document.createTextNode(c);
    option3.appendChild( respuesta3);

    let option4 = document.createElement("option");
    option4.setAttribute("value", "4");
    let  respuesta4 = document.createTextNode(d);
    option4.appendChild( respuesta4);

    document.getElementById("mySelect " + contador).appendChild(option1);
    document.getElementById("mySelect " + contador).appendChild(option2);
    document.getElementById("mySelect " + contador).appendChild(option3);
    document.getElementById("mySelect " + contador).appendChild(option4);

}

function nota() {
    let nota = 0;
    for (let i = 0; i < preguntas.length; i++) {
        let resp1 = document.getElementById("mySelect " + i).value;
        let resPregunta = preguntas[i].correcta;
        if (resp1 == resPregunta) {
            nota++;
        } else {
            nota--;
        }
    }
    return nota;

}

function validacion(pregu, a, b, c, d, rad) {
    let msj = "";
    if (pregu.length == "") {
        // Si no se cumple la condicion...
        msj = "Introduce una pregunta \n";
        alert(msj);
        return false;
    }
    if (a.length == "") {
        // Si no se cumple la condicion...
        msj ="Introduce la primera respuesta \n"
        alert(msj);
        return false;
    }
    if (b.length == "") {
        // Si no se cumple la condicion...
        msj ="Introduce la segunda respuesta \n"
        alert(msj);
        return false;
    }
    if (c.length == "") {
        // Si no se cumple la condicion...
        msj ="Introduce la tercera respuesta \n"
        alert(msj);
        return false;
    }
    if (d.length == "") {
        // Si no se cumple la condicion...
        msj ="Introduce la cuarta respuesta \n"
        alert(msj);
        return false;
    }
    if (rad == undefined) {
        // Si no se cumple la condicion...
        msj ="Selecciona la respuesta correcta \n"
        alert(msj);
        return false;
    }
    return true;
}