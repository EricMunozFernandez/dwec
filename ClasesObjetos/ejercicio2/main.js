$(document).ready(
    $.ajax({
        url: "tiposLibros.json",
        success: function (respuesta) {
            let listaLibros = $("#tipoLibro");
            $.each(respuesta.datos, function (index, elemento) {
                listaLibros.append(
                    '<option>' + elemento.tipo + '</option>'
                );
            })
        },
        error: function () {
            console.log("no se ha podido obtener la nformacion");
        }
    }),
    $('#añadirAutor').click(
        function () {
            $('#autores').append('<p><label>DNI <input type="text" name="dni"></label></p>' +
                '<p><label>NOMBRE Y APELLIDOS <input type="text" name="nombreApellido"></label></p>');
        }
    ),
    $("form").submit(
        function (e) {
            let campoVacio=camposVacios();
            let isbnBool = validarIsbn();
            let dniBool = validarDni();
            let disponibleBool= validarDisponible();
        }
    )
)

function camposVacios() {
    let campoVacio = false;
    let textos = $('form :text');
    textos.each(function () {
        if ($(this).val()===''){
            campoVacio=true;
        }
    })
    if (campoVacio) {
        alert('campo vacio');
    }
    return campoVacio;
}

function validarIsbn() {
    let isbn = $('[name=isbn]').val();
    reg = /^ISBN\s(?=[-0-9xX ]{13}$)(?:[0-9]+[- ]){3}[0-9]*[xX0-9]$/;
    //ISBN 90-70002-34-5 | ISBN 90-70002-34-x funcionan
    let isbnBool = false;
    if (reg.test(isbn)) {
        isbnBool = true;
    } else {
        alert('ISBN incorrecto');
    }
    return isbnBool;
}

function validarDni() {
    let dni = $('[name=dni]').val();
    reg = /^(\d{8})([A-Z])$/;
    let dniBool = false;
    if (reg.test(dni)) {
        dniBool = true;
    } else {
        alert('DNI incorrecto');
    }
    return dniBool;
}
function validarDisponible() {
    let disponibleBool=false;
    if($("input[name='disponible']").is(':checked')){
        disponibleBool=true;
    }
    else{
        alert('seleccione una opción');
    }
    return disponibleBool;
}