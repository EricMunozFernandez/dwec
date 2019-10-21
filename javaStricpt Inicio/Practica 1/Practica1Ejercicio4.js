var aux1="Oveja que bala",aux2="bocado que pierde";
var num1 =8, num2 =5, resultado , operando="20";
alert(aux1+aux2+"<br >");
alert (num1+num2+"<br >");
num1=num1+num2;
resultado =num1+num2;
alert (num1+"-"+num2+"-"+ resultado );
resultado =operando+num1;
alert ( resultado );
resultado =parseInt(operando)+num1;
alert ( resultado );

/*la primera salida seria:"Oveja que balabocado que pierde<br >" no tendra espacio porque no se le ha especificado y al estar entre "" el br sale como string
la segunda salida seria 13<br>
La tercera salida seria 13-5-18
La cuarta salida seria 2013 ya que operando es un string
la quinta y ultima salida seria 33 convirtiendo el operando a un numero
*/