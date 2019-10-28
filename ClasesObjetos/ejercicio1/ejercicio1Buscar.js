function rellenarOrganizacion() {
    let arrayContactos = localStorage.getItem('arrayContactos');

    let contactos = JSON.parse(arrayContactos);

    for (let x=0;x<contactos.length;x++){
        crear(contactos[x].organinazion);
    }
}
function crear(nombre) {
    let select=document.getElementsByName('organizacion');
    let option = document.createElement('option');
    option.value = nombre;
    option.name='organizacion';
    select.appendChild(option);
}