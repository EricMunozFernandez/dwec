function validar() {
    let usuarios = ['a','b','c','d','e','f','g'];
    let pass = ['1','2','3','4','5','6','7'];
    let usuario = document.getElementById("usuario").value;
    let pas = document.getElementById("pass").value;
    let x;
    for (x=0;x<usuarios.length && usuarios[x]!=usuario;x++) {};
    if (x==usuarios.length) alert('usuario no registrado');
    else if (usuarios[x]===usuario && pass[x]===pas)alert('usuario y contraseña correctos');
    else if(pass[x]!=pas)alert('contraseña erronea');

}
