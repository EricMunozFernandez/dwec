function campoNuevo() {
    let campo = prompt('Que nuevo campo quere añadir?');
    let body = document.documentElement.lastChild;
    let main = body.children[0];
    let form = main.children[main.children.length - 1];
    crearLabel(form, campo);
}

function crearLabel(form, campo) {
    let label = document.createElement('label');
    let br = document.createElement('br');
    let texto = document.createTextNode(campo + ': ');
    let input = crear(campo);
    label.appendChild(texto);
    label.appendChild(input);
    form.insertBefore(label, form.children[form.children.length - 2]);
    form.insertBefore(br, form.children[form.children.length - 2]);
}

function crear(posicion) {
    let input = document.createElement('input');
    input.type = 'text';
    input.name = posicion;
    input.id = posicion;
    return input;
}

function contactoNuevo() {
    let arrayCampos = [];
    for (let x = 0; x < document.getElementsByTagName("input").length; x++) {
        let input = document.getElementsByTagName('input')[x].type;
        if (input != 'button') {
            arrayCampos.push(document.getElementsByTagName('input')[x].value);
        }
    }
    let otros = arrayCampos.splice(2, 2)
    let contacto = {
        'nombre': arrayCampos[0],
        'organizacion': arrayCampos[1],
        'otros': otros
    };
    let contactoJSON = JSON.stringify(contacto);
    enviarJSON(contactoJSON);
}

function enviarJSON(contactoJSON) {
    $.ajax({
        url: '#',
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: alert('envio correcto'),
        data: contactoJSON
    });

    añadirContacto(contactoJSON);

}

function añadirContacto(contactoJSON) {
    let contacto = JSON.parse(contactoJSON);

    let arrayContactos = localStorage.getItem('arrayContactosInicio');

    let contactos = JSON.parse(arrayContactos);

    contactos.push(contacto);

    localStorage.setItem('arrayContactos', JSON.stringify(contactos));
}