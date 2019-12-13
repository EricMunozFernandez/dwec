console.log(typeof $("#tipoLibro"));
$(document).ready(function () {
    $.ajax({
        url: "tiposLibros.json",
        success: function (respuesta) {
            console.log(typeof respuesta);
            $.each(respuesta.datos, function (index, elemento) {
                $("#tipoLibro").append('<option>' + elemento.tipo + '</option>');
            });
        },
        error: function () {
            console.log("no se ha podido obtener la informacion");
        }
    });
});
