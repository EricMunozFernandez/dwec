let form=document.documentElement.lastChild.children[0];
let contador=0;
function desplegable() {
    let input=crear('posicion');
    form2=document.documentElement.lastChild.children[1]
    form2.appendChild(input);
}

function añadir(){
    if(document.getElementById('principio').checked){
        let input=crear(contador);
        let primero=form.firstChild;
        form.insertBefore(input,primero);
        contador++;
    }
    if(document.getElementById('final').checked){
        let input=crear(contador);
        form.appendChild(input);
        contador++;
    }
    if(document.getElementById('otro').checked){
        try {
            let posicion = parseInt(document.getElementById('posicion').value);
            if (isNaN(posicion)){
                throw 'posicion vacia';
            }
            let input=crear(contador);
            let siguiente=form.children[posicion];
            form.insertBefore(input,siguiente);
            contador++;
        }
        catch (e) {
            alert('inserta un numero');
        }

    }
}

function borrar() {
    if(document.getElementById('principio').checked){
        let posicion=form.children[0];
        form.removeChild(posicion);

    }
    if(document.getElementById('final').checked){
        let posicion=form.children.length-1;
        eliminar(posicion);
    }
    if(document.getElementById('otro').checked){
        try {
            let posicion = parseInt(document.getElementById('posicion').value);
            if (isNaN(posicion)){
                throw 'posicion vacia';
            }
            eliminar(posicion);
        }
        catch (e) {
            alert('inserta un numero');
        }
    }
}

function eliminar(posicion) {
    let nodo=form.children[posicion];
    form.removeChild(nodo);
}

function crear(posicion='nuevo') {
    let input=document.createElement('input');
    input.type='text';
    input.name=posicion;
    input.id=posicion;
    input.value='';
    input.placeholder=posicion;
    return input;
}