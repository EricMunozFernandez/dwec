///<reference path="Autor.ts"/>
///<reference path="Libro.ts"/>
$(document).ready(function () {
    var cAutores = 1;
    $.ajax({
        url: "tiposLibros.json",
        success: function (respuesta) {
            $.each(respuesta.datos, function (index, elemento) {
                $("#tipoLibro").append('<option>' + elemento.tipo + '</option>');
            });
        },
        error: function () {
            console.log("no se ha podido obtener la informacion");
        }
    }),
        $('#añadirAutor').click(function () {
            $('#autores').append('<p><label>DNI <input type="text" name="dni' + cAutores + '"></label></p>' +
                '<p><label>NOMBRE Y APELLIDOS <input type="text" name="nombreApellido' + cAutores + '"></label></p>');
            cAutores++;
        }),
        $('input[name=disponible]').click(function () {
            if ($('input[name=disponible]:checked').val() == 'si') {
                $('#fecha').css('display', 'block');
            }
            else {
                $('#fecha').css('display', 'none');
            }
        });
    function campoVacio(campo) {
        try {
            if ($("input[name=" + campo + "]").val() == '') {
                throw 'campo vacio';
            }
        }
        catch (e) {
            alert(e);
        }
    }
    function validarDNI() {
        try {
            var reg = void 0;
            reg = /^(\d{8})([A-Z])$/;
            if (!reg.test($('[name=dni]').val())) {
                throw 'dni incorrecto';
            }
        }
        catch (e) {
            alert(e);
        }
    }
    function validarISBN() {
        try {
            var reg = void 0;
            reg = /^ISBN\s(?=[-0-9xX ]{13}$)(?:[0-9]+[- ]){3}[0-9]*[xX0-9]$/;
            //ISBN 90-70002-34-5 | ISBN 90-70002-34-x funcionan
            if (!reg.test($('[name=isbn]').val())) {
                throw 'ISBN incorrecto';
            }
        }
        catch (e) {
            alert(e);
        }
    }
    function validarTexto(campo) {
        try {
            var reg = void 0;
            reg = /^[a-zA-Z ]*$/;
            if (!reg.test($('[name=' + campo + ']').val())) {
                throw 'campo texto incorrecto';
            }
        }
        catch (e) {
            alert(e);
        }
    }
    function validarNumero(campo) {
        try {
            var reg = void 0;
            reg = /^[0-9]*$/;
            if (!reg.test($('[name=' + campo + ']').val())) {
                throw 'campo numerico incorrecto';
            }
        }
        catch (e) {
            alert(e);
        }
    }
    function validarFecha(campo) {
        try {
            var fecha = $('[name=' + campo + ']').val();
            // @ts-ignore
            var fechaDate = new Date(fecha);
            var hoy = new Date();
            if (hoy >= fechaDate) {
                throw 'fecha solo a partir de hoy';
            }
        }
        catch (e) {
            alert(e);
        }
    }
    function enviarJSON() {
        var titulo = $('[name=titulo]').val();
        var isbn = $('[name=isbn]').val();
        var tipo = $('[name=tipo]').change(function () {
            return tipo = $('input[name=tipo]').val();
        });
        var numEjemplares = $('[name=ejemplares]').val();
        var disponibilidad;
        var fechaDate;
        if ($('input[name=disponible]:checked').val() == 'si') {
            disponibilidad = true;
            var fechaDisponibleString = $('[name=fechaPublicacion]').val();
            // @ts-ignore
            fechaDate = new Date(fechaDisponibleString);
        }
        else {
            disponibilidad = false;
            fechaDate = null;
        }
        var arrayAutores = new Array();
        var dni = $('[name=dni]').val();
        var nombreApellido = $('[name=nombreApellido]').val();
        var autor = new Autor(dni, nombreApellido);
        arrayAutores.push(autor);
        for (var x = 1; x < cAutores; x++) {
            var dni_1 = $('[name=dni' + x + ']').val();
            var nombreApellido_1 = $('[name=nombreApellido' + x + ']').val();
            var autor_1 = new Autor(dni_1, nombreApellido_1);
            arrayAutores.push(autor_1);
        }
        console.log(arrayAutores);
        var libro = new Libro(titulo, isbn, tipo, numEjemplares, arrayAutores, disponibilidad, fechaDate);
        console.log(libro);
        var libroJSON = JSON.stringify(libro);
        envioAjax(libroJSON);
    }
    function envioAjax(archivo) {
        $.ajax({
            data: archivo,
            url: '#',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function () {
                console.log(archivo);
                alert('envio correcto');
            },
            error: function () {
                console.log('error');
            }
        });
    }
    $('#enviar').click(function () {
        campoVacio('titulo');
        campoVacio('isbn');
        validarISBN();
        campoVacio('dni');
        validarDNI();
        campoVacio('nombreApellido');
        validarTexto('nombreApellido');
        for (var x = 1; x < cAutores; x++) {
            campoVacio('dni' + x + '');
            validarTexto('dni' + x + '');
            campoVacio('nombreApellido' + x + '');
            validarTexto('nombreApellido' + x + '');
        }
        campoVacio('ejemplares');
        validarNumero('ejemplares');
        if ($('input[name=disponible]:checked').val() == 'si') {
            campoVacio('fechaPublicacion');
            validarFecha('fechaPublicacion');
        }
        enviarJSON();
    });
});
