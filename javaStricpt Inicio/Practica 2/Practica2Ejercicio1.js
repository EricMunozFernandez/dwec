
let texto = "CSS es Lo mas";
let texto2 = texto.replace(/\s+/g, '');
//transforma el texto con espacios a sin espacions

function mirar(input) {
    let mayus;
    let minuscula;
    for (let x = 0; x < input.length; x++) {
        if(input.charAt(x) === input.charAt(x).toUpperCase()){
            mayus = true;
        }
        else if(input.charAt(x) === input.charAt(x).toLowerCase()){
            minuscula = true;
        }
    }
    if(mayus && minuscula)
        alert("Mezcla de mayusculas y minusculas")
    else if(mayus)
        alert("Todo en mayusculas")
    else
        alert("Todo en minusculas")
}

mirar(texto2);