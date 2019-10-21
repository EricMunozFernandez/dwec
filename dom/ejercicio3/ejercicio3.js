let body=document.documentElement.lastChild;
function desplegable() {
    let form=body.children[0];

    let input=document.createElement('input');

    let type=document.createAttribute('type');

    let texto=document.createTextNode('text');

    type.value(texto);
    //juntarlos
    input.appendChild(type);
    //añadirlo
    form.appendChild(input);
}