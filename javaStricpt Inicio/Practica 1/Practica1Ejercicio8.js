var v1 = 1;
alert("v1 = " + v1)
//v1 = 1
v2= 2;
alert("v2 = " + v2)
//v2 = 2
{
    var v1 = 3;
    alert("v1 = " + v1)
    //v1 = 3
    v2 = 4
    alert("v2 = " + v2)
    //v2 = 4
    var v3 = 5
    alert("v3 = " + v3)
    //v3 = 5
    v4 = 6;
    alert("v4 = " + v4)
    //v4 = 6
}
//toma las variables como globales, por eso se sobreescriben
alert("v1 = " + v1)
//v1 = 3
alert("v2 = " + v2)
//v2 = 4
alert("v3 = " + v3)
//v3 = 5
alert("v4 = " + v4)
//v4 = 6
//--------------------------------
const v11 = 1;
alert('Constante : ' +v11)
//Constante: 1
v11= 6 //uan constante no puede variar
alert(' Constante : ' +v11)
//Constante: 1
//-------------------------------
let v1 = 1;
alert("v1 = " + v1)
//v1 = 1
v2= 2;
alert("v2 = " + v2)
//v2 = 2
{
    let v1 = 3;
    alert("v1 = " + v1)
    //v1 = 3
    v2 = 4
    alert("v2 = " + v2)
    //v2 = 4
    let v3 = 5
    alert("v3 = " + v3)
    //v3 = 5
    v4 = 6;
    alert("v4 = " + v4)
    //v4 = 6
}
//las variables no se sobreescriben si son let, ya que no las escoge como variables globales
alert("v1 = " + v1)
//v1 = 1
alert("v2 = " + v2)
//v2 = 2
alert("v3 = " + v3)
//no esta declarado v3
alert("v4 = " + v4)
//no esta declarado v4