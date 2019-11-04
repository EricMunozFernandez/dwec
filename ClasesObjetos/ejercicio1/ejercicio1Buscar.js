function metodoBuscar(tipo) {
    let form = document.getElementById('formulario');
    if (tipo == 'nombre') {
        crearLabel(form, 'nombre', 'input', 'text');
        borrarRadio(form);
        crearBoton(form, 'input', 'button');
    }
    if (tipo == 'organizacion') {
        crearLabel(form, 'organizacion', 'select');
        rellenarOrganizacion();
        borrarRadio(form);
        crearBoton(form, 'input', 'button', 'fbuscar()');
    }
}

function crearLabel(form, campo, elemento, type) {
    let label = document.createElement('label');
    let br = document.createElement('br');
    let texto = document.createTextNode(campo + ': ');
    let hijo = crearHijo(campo, elemento, type);
    label.appendChild(texto);
    label.appendChild(hijo);
    form.insertBefore(label, form.children[0]);
    form.insertBefore(br, form.children[1]);
}

function crearHijo(campo, elemento, type) {
    let hijo = document.createElement(elemento);
    hijo.type = type;
    hijo.name = campo;
    hijo.id = campo;
    return hijo;
}

function borrarRadio(form) {
    let radio = document.getElementById('radios');
    form.removeChild(radio);
}

function crearBoton(form, elemento, type, funcion) {
    let hijo = crearHijo('buscar', elemento, type);
    hijo.value = 'buscar';
    hijo.setAttribute('onclick', funcion);
    form.appendChild(hijo);
}

function rellenarOrganizacion() {
    let arrayContactos = localStorage.getItem('arrayContactos');

    let contactos = JSON.parse(arrayContactos);
    for (let x = 0; x < contactos.length; x++) {
        crearOption(contactos[x].organizacion);
    }
    quitarDuplicados();
}

function crearOption(nombre) {
    let select = document.getElementById('organizacion');
    let option = document.createElement('option');
    let texto = document.createTextNode(nombre);
    option.appendChild(texto);
    option.value = nombre;
    option.name = 'organizacion';
    select.appendChild(option);
}

function quitarDuplicados() {
    var organizaciones = document.getElementById("organizacion");

    [].slice.call(organizaciones.options)
        .map(function (a) {
            if (this[a.value]) {
                organizaciones.removeChild(a);
            } else {
                this[a.value] = 1;
            }
        }, {});
}

function fbuscar() {
    let contactosJSON = localStorage.getItem('arrayContactos');
    let arrayContactos = JSON.parse(contactosJSON);

    let busqueda = document.getElementById('nombre');
    if (busqueda == null) {
        busqueda = document.getElementById('organizacion').value
        let String = '';
        let contador = 0;
        for (let x = 0; x < arrayContactos.length; x++) {

            if (busqueda == arrayContactos[x].organizacion) {
                contador++;
                String = String + contador + ' Su nombre es ' + arrayContactos[x].nombre
                    + ' Su organizacion es ' + arrayContactos[x].organizacion
                    + ' Otros ' + arrayContactos[x].otros + '<br>';
            }
        }
        document.write(String);
    } else {
        busqueda = document.getElementById('nombre').value
        let x;

        for (x = 0; x < arrayContactos.length && arrayContactos[x].nombre != busqueda; x++) {
        }
        if (x == arrayContactos.length) {
            alert('nombre no encontrado');
        }
        if (arrayContactos[x].nombre == busqueda) {
            document.write('Su nombre es ' + arrayContactos[x].nombre
                + ' Su organizacion es ' + arrayContactos[x].organizacion
                + ' Otros ' + arrayContactos[x].otros);
        }

    }

}