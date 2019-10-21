let body=document.documentElement.lastChild;
let parrafos=body.children;
let enlaces=0;
let penultimoAtributo;
let contador=0;
for(let x=0;x<parrafos.length;x++){
    if(parrafos[x].hasChildNodes()){
        //contador de enlaces a http://prueba/
       for (let y=0;y<parrafos[x].children.length;y++){
           if (parrafos[x].children[y].href=='http://prueba/'){
               contador++;
           }
       }
       //todos los enlaces
        let enlace=parrafos[x].children.length;
        enlaces=enlaces+enlace;
    }
    //penultimo enlace
    if (x==parrafos.length-2){
        if(parrafos[x].hasChildNodes()){
            let penultimo=parrafos[x].children.length-2;
            penultimoAtributo=parrafos[x].children[penultimo].href;
        }
    }
}
document.write('en la pagina hay '+enlaces+' enlaces<br>');
document.write('el penultimo enlace esta enlazado a '+penultimoAtributo+'<br>');
document.write('hay '+contador+' enlaces a http://prueba<br>');
//enlaces del parrafo 3
document.write('la cantidad de enlaces del parrafo 3 son de '+parrafos[2].children.length+'<br>');