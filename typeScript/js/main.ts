console.log(typeof $("#tipoLibro"));
$(document).ready(function() {
    $.ajax({
        url: "tiposLibros.json",
        success: function (respuesta) {
            console.log(typeof respuesta);
            $.each(respuesta.datos, function (index:number, elemento) {
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
            $('#autores').append('<p><label>DNI <input type="text" name="dni"></label></p>' +
                '<p><label>NOMBRE Y APELLIDOS <input type="text" name="nombreApellido"></label></p>');
        }
    )
});