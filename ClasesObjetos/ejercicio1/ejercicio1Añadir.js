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
    let body = document.documentElement.lastChild;
    let main = body.children[0];
    let arrayCampos = [];
    for (let x = 0; x < main.children.length; x++) {
        let input = document.getElementsByTagName('input')[x].value;
        if (input != 'AñadirCampo' || input != 'AñadirContacto') {
            arrayCampos.push(input);
        }
    }
    let otros=arrayCampos.splice(0,2)
    let contactoJSON={'nombre':arrayCampos[0],
        'organizacion':arrayCampos[1],
        'otros':otros};
}