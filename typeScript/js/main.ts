///<reference path="Autor.ts"/>
///<reference path="Libro.ts"/>
$(document).ready(function () {
    let cAutores: number = 1;
    $.ajax({
        url: "tiposLibros.json",
        success: function (respuesta) {
            $.each(respuesta.datos, function (index: number, elemento) {
                $("#tipoLibro").append(
                    '<option>' + elemento.tipo + '</option>'
                );
            })
        },
        error: function () {
            console.log("no se ha podido obtener la informacion");
        }
    }),
        $('#añadirAutor').click(
            function () {
                $('#autores').append('<p><label>DNI <input type="text" name="dni' + cAutores + '"></label></p>' +
                    '<p><label>NOMBRE Y APELLIDOS <input type="text" name="nombreApellido' + cAutores + '"></label></p>');
                cAutores++;
            }
        ),
        $('input[name=disponible]').click(function () {
            if ($('input[name=disponible]:checked').val() == 'si') {
                $('#fecha').css('display', 'block');
            } else {
                $('#fecha').css('display', 'none');
            }
        });

    function campoVacio(campo) {
        try {
            if ($("input[name=" + campo + "]").val() == '') {
                throw 'campo vacio';
            }
            return true;
        } catch (e) {
            alert(e);
            return false;
        }
    }

    function validarDNI() {
        try {
            let reg;
            reg = /^(\d{8})([A-Z])$/;
            if (!reg.test($('[name=dni]').val())) {
                throw 'dni incorrecto';
            }
            return true;
        } catch (e) {
            alert(e);
            return false;
        }
    }

    function validarISBN() {
        try {
            let reg;
            reg = /^ISBN\s(?=[-0-9xX ]{13}$)(?:[0-9]+[- ]){3}[0-9]*[xX0-9]$/;
            //ISBN 90-70002-34-5 | ISBN 90-70002-34-x funcionan
            if (!reg.test($('[name=isbn]').val())) {
                throw 'ISBN incorrecto';
            }
            return true;
        } catch (e) {
            alert(e);
            return false;
        }
    }

    function validarTexto(campo) {
        try {
            let reg;
            reg = /^[a-zA-Z ]*$/;
            if (!reg.test($('[name=' + campo + ']').val())) {
                throw 'campo texto incorrecto';
            }
            return true;
        } catch (e) {
            alert(e);
            return false;
        }
    }

    function validarNumero(campo) {
        try {
            let reg;
            reg = /^[0-9]*$/;
            if (!reg.test($('[name=' + campo + ']').val())) {
                throw 'campo numerico incorrecto';
            }
            return true;
        } catch (e) {
            alert(e);
            return false;
        }
    }

    function validarFecha(campo) {
        try {
            let fecha = $('[name=' + campo + ']').val();
            // @ts-ignore
            let fechaDate = new Date(fecha);
            let hoy = new Date();
            if (hoy >= fechaDate) {
                throw 'fecha solo a partir de hoy';
            }
            return true;
        } catch (e) {
            alert(e);
            return false;
        }
    }

    function enviarJSON() {
        let titulo = $('[name=titulo]').val();
        let isbn = $('[name=isbn]').val();
        let tipo = ($("[name=tipo] option:selected").text());
        let numEjemplares = $('[name=ejemplares]').val();
        let disponibilidad: boolean;
        let fechaDate: Date;
        if ($('input[name=disponible]:checked').val() == 'si') {
            disponibilidad = true;
            let fechaDisponibleString = $('[name=fechaPublicacion]').val();
            // @ts-ignore
            fechaDate = new Date(fechaDisponibleString);
        } else {
            disponibilidad = false;
            fechaDate = null;
        }

        let arrayAutores = new Array();
        let dni = $('[name=dni]').val();
        let nombreApellido = $('[name=nombreApellido]').val();
        let autor = new Autor(dni, nombreApellido);
        arrayAutores.push(autor);
        for (let x: number = 1; x < cAutores; x++) {
            let dni = $('[name=dni' + x + ']').val();
            let nombreApellido = $('[name=nombreApellido' + x + ']').val();
            let autor = new Autor(dni, nombreApellido);
            arrayAutores.push(autor);
        }
        let libro = new Libro(titulo, isbn, tipo, numEjemplares, arrayAutores, disponibilidad, fechaDate)
        let libroJSON = JSON.stringify(libro);
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
                console.log(archivo);
                console.log('error');
            }

        });
    }

    $('#enviar').click(function () {
        let tituloVacio: boolean = campoVacio('titulo');
        let isbnVacio: boolean = campoVacio('isbn');
        let isbnValido: boolean = validarISBN();
        let dniVacio: boolean = campoVacio('dni');
        let dniValido: boolean = validarDNI();
        let nombreApellidoVacio: boolean = campoVacio('nombreApellido');
        let nombreApellidoValido: boolean = validarTexto('nombreApellido');
        let arrayAutores = [];
        for (let x: number = 1; x < cAutores; x++) {
            let dniAutorVacio = campoVacio('dni' + x + '');
            arrayAutores.push(dniAutorVacio);
            let dniAutorValido = validarDNI();
            arrayAutores.push(dniAutorValido);
            let nomAutorVacio = campoVacio('nombreApellido' + x + '');
            arrayAutores.push(nomAutorVacio);
            let nomAutorValido = validarTexto('nombreApellido' + x + '');
            arrayAutores.push(nomAutorValido);
        }

        let ejemplaresVacio: boolean = campoVacio('ejemplares');
        let ejemplaresValido: boolean = validarNumero('ejemplares');
        let fechaPublicacionVacio: boolean = true;
        let fechaPublicacionValido: boolean = true;
        if ($('input[name=disponible]:checked').val() == 'si') {
            fechaPublicacionVacio = campoVacio('fechaPublicacion');
            fechaPublicacionValido = validarFecha('fechaPublicacion');
        }
        if (arrayAutores.indexOf(false) !== -1) {

        } else {
            if (tituloVacio && isbnVacio && isbnValido && dniVacio && dniValido && nombreApellidoVacio && nombreApellidoValido && ejemplaresVacio && ejemplaresValido && fechaPublicacionVacio && fechaPublicacionValido) {
                enviarJSON();
            } else {
                alert('rellene todo correctamente');
            }
        }
    })

});