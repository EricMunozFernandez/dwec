function añadir() {

    let body=document.documentElement.lastChild;
    let ul=body.children[0];
    //primero el elemento
    let li=document.createElement('li');
    //segundo el texto
    let texto=document.createTextNode(document.getElementById('texto').value);
    //juntarlos
    li.appendChild(texto);
    //añadirlo
    ul.appendChild(li);
    //poner recuadro en blanco
    document.getElementById('texto').value='';
}