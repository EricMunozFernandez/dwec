$(document).ready(function() {
    let cAutores:number=1;
    $.ajax({
        url: "tiposLibros.json",
        success: function (respuesta) {
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
            $('#autores').append('<p><label>DNI <input type="text" name="dni'+cAutores+'"></label></p>' +
                '<p><label>NOMBRE Y APELLIDOS <input type="text" name="nombreApellido'+cAutores+'"></label></p>');
            cAutores++;
        }
    ),
    $('input[name=disponible]').click(function () {
        if ($('input[name=disponible]:checked').val()=='si'){
            $('#fecha').css('display','block');
        }
        else{
            $('#fecha').css('display','none');
        }
    });
    function campoVacio(campo){
        try{
            if($("input[name="+campo+"]").val()==''){
            throw 'campo vacio';
            }
        }
        catch (e) {
            alert(e);
        }
    }
    function validarDNI(){
        try{
            let reg;
            reg = /^(\d{8})([A-Z])$/;
            if (!reg.test($('[name=dni]').val())) {
                throw 'dni incorrecto';
            }
        }
        catch (e) {
            alert(e);
        }
    }
    function validarISBN(){
        try {
            let reg;
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
    function validarTexto(campo){
        try{
            let reg;
            reg=/^[a-zA-Z ]*$/;
            if(!reg.test($('[name='+campo+']').val())){
                throw 'campo texto incorrecto';
            }
        }
        catch (e) {
            alert(e);
        }
    }
    function validarNumero(campo){
        try{
            let reg;
            reg=/^[0-9]*$/;
            if(!reg.test($('[name='+campo+']').val())){
                throw 'campo numerico incorrecto';
            }
        }
        catch (e) {
            alert(e);
        }
    }
    function validarFecha(campo){
        try{
            let fecha= $('[name='+campo+']').val();
            // @ts-ignore
            let fechaDate= new Date(fecha);
            let hoy= new Date();
            if(hoy>=fechaDate){
                throw 'fecha solo a partir de hoy';
            }
        }
        catch (e) {
            alert(e);
        }
    }
    function enviarJSON(){
        let titulo= $('[name=titulo]').val();
        let isbn= $('[name=isbn]').val();
        let arrayAutores=new Array();

        let dni= $('[name=dni]').val();
        let nombreApellido= $('[name=nombreApellido]').val();
        let autor=new Autor(dni,nombreApellido);
        arrayAutores.push(autor);
        for (let x:number=1;x<cAutores;x++){
            let dni= $('[name=dni'+x+']').val();
            let nombreApellido= $('[name=nombreApellido'+x+']').val();
            let autor=new Autor(dni,nombreApellido);
            arrayAutores.push(autor);
        }
    }
    $('#enviar').click(function () {
        campoVacio('titulo');
        campoVacio('isbn');
        validarISBN();
        campoVacio('dni');
        validarDNI();
        campoVacio('nombreApellido');
        validarTexto('nombreApellido');
        for (let x:number=1;x<cAutores;x++){
            campoVacio('dni'+x+'');
            validarTexto('dni'+x+'');
            campoVacio('nombreApellido'+x+'');
            validarTexto('nombreApellido'+x+'');
        }
        campoVacio('ejemplares');
        validarNumero('ejemplares');
        if ($('input[name=disponible]:checked').val()=='si'){
            campoVacio('fechaPublicacion');
            validarFecha('fechaPublicacion');
        }
        enviarJSON();
    })
});