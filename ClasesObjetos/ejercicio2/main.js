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
            $('#autores').append('<p><label>DNI <input type="text"></label></p>' +
                '<p><label>NOMBRE Y APELLIDOS <input type="text"></label></p>')
        }
    )
)