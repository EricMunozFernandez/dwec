preguntas = [];
numpregunta = 0;
contador = 0;

function verPreguntas() {
    let preguntas=$('#preguntas');
    if (preguntas.css('display','none')) {
        preguntas.css('display','block');
    } else {
        preguntas.css('display','none');
    }
}

function validacion(pregu, a, b, c, d, rad) {
    let msj = "";
    if (pregu.length == "") {
        msj = "Introduce una pregunta \n";
        alert(msj);
        return false;
    }
    if (a.length == "") {
        msj = "Introduce la primera respuesta \n"
        alert(msj);
        return false;
    }
    if (b.length == "") {
        msj = "Introduce la segunda respuesta \n"
        alert(msj);
        return false;
    }
    if (c.length == "") {
        msj = "Introduce la tercera respuesta \n"
        alert(msj);
        return false;
    }
    if (d.length == "") {
        msj = "Introduce la cuarta respuesta \n"
        alert(msj);
        return false;
    }
    if (rad == undefined) {
        msj = "Selecciona la respuesta correcta \n"
        alert(msj);
        return false;
    }
    return true;
}

function enviar() {
    let pregunta=$('#pregunta').val();
    let rad = $('input[name="rad"]:checked').val();
    let a = $('#a').val();
    let b = $('#b').val();
    let c = $('#c').val();
    let d = $('#d').val();
    if (validacion(pregunta, a, b, c, d, rad) == true) {
        preguntas[numpregunta] = new Preguntas(pregunta, a, b, c, d, rad);
        numpregunta++;
        limpiarCampos();
        $('#preguntas').css('display','none');
    } else {
        alert("datos erroneos");
    }
}

function limpiarCampos() {
    $('#pregunta').val('');
    $('#a').val('');
    $('#b').val('');
    $('#c').val('');
    $('#d').val('');
}

function generarExamen() {
    if (preguntas.length < 2) {
        alert('2 preguntas minimo');
    } else {
        $('#botones').css('display', 'block');
        $('#preguntas').css('display', 'none');
        verPregunta();
    }
}

function verPregunta() {
    $('#examen').append('<p>' + preguntas[contador].pregunta + '</p>');
    respuestas();
    contador++;

}

function respuestas() {
    $('body').append('<select id="mySelect' + contador + '"></select>');
    $('#mySelect' + contador + '').append('<option value="1">' + preguntas[contador].a + '</option>');
    $('#mySelect' + contador + '').append('<option value="2">' + preguntas[contador].b + '</option>');
    $('#mySelect' + contador + '').append('<option value="3">' + preguntas[contador].c + '</option>');
    $('#mySelect' + contador + '').append('<option value="4">' + preguntas[contador].d + '</option>');
}

function nota() {
    let nota = 0;
    for (let x = 0; x < preguntas.length; x++) {
        if ($('#mySelect' + x + '').val() == preguntas[x].correcta) {
            nota++;
        } else {
            nota--;
        }
    }
    alert('tu nota es de: ' + nota);

}

