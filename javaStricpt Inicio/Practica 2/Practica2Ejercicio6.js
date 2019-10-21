let genUnNumAleatorio = () => Math.round(Math.random() * (9 - 1) + 1);

let unirNumAleatorio = () => {
    let arrayNum = [];
    do{
        let num = genUnNumAleatorio();
        if(!arrayNum.includes(num)){
            arrayNum.push(num);
        }
    }while(arrayNum.length < 4)

    alert(arrayNum.join(""));
    return arrayNum.join("")
}

let numeroUsuario = numAleatorio => {
    let numJugador;
    do {
        let muertos = 0;
        let heridos = 0;
        try {
            numJugador = prompt("Cual al es el numero?")
            if (!Number.isInteger(parseInt(numJugador))) {
                throw "No es un numero";
            }
            else if(numJugador.length !== 4){
                throw "Debes introducir 4 números";
            }
            else{
                let array = []
                numJugador.toString().split("").forEach(n => {
                    if(!array.includes(n)){
                        array.push(n)
                    }
                })
                if(array.length < 4){
                    throw "No puedes introducir numeros repetidos"
                }
            }
            //opcion 1
            /*for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    if(numJugador.charAt(i) == numAleatorio.charAt(j)){
                        if(i == j){
                            muertos++
                        }
                        else{
                            heridos++
                        }
                    }
                }
            }*/
            //opcion 2
            numJugador.split("").forEach(buscarAl)

            function buscarAl(item,index,array) {
                let va = item
                let vb = index
                let vc = array
                //opcion 3 sin completar
                //numAleatorio.split("").forEach(buscarNum(item,index,array,va,vb,vc))
                for (let j = 0; j < numJugador.length; j++) {
                    if (array[index] == numAleatorio.charAt(j)) {
                        if (index == j) {
                            muertos++
                        } else {
                            heridos++
                        }
                    }
                }
            }
            /*function buscarNum(item2,index2,array2,va,vb,vc) {
                alert('item del numJug: '+va
                +'\nindex del numJug: '+vb
                +'\narray del numJug: '+vc
                +'\nitem del numAl: '+item2
                +'\nindex del numAl: '+index2
                +'\narray del numAl: '+array2)
                if (vc[vb] == array2[index2]) {
                    if (vb == index2) {
                        muertos++
                    } else {
                        heridos++
                    }
                }
            }*/
            if(muertos == 4)
                alert("Has acertado el numero")
            else
                alert("Muertos: " + muertos + "  Heridos: " + heridos);
        }
        catch(err) {
            alert(err)
        }
    }while (numJugador != numAleatorio)
}

numeroUsuario(unirNumAleatorio());