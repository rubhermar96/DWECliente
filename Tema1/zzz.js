//Ejercicio al pasar una cadena nos diga de que se trata (DNI, Matrícula, Teléfono, Código Postal)
var cadena = "673549722";
var expresionDNI = /^\d{8}[A-Z]$/;
var expresionM = /^[0-9]{4}[B-D,F-H,J-N,P-T,V-Z]{3}$/;
var expresionT = /^[6-9][0-9]{8}$/;
var expresionCP = /^[0-9]{5}$/;


if(expresionDNI.test(cadena)){
    console.log(cadena);
    console.log("Es un DNI");
}
else if (expresionM.test(cadena)){
    console.log(cadena);
    console.log("Es una Matrícula");
}
else if (expresionT.test(cadena)){
    console.log(cadena);
    console.log("Es un Teléfono");
}
else if (expresionCP.test(cadena)){
    console.log(cadena);
    console.log("Es un Codigo Postal");
}

var cadena2 = "rubhermar96@gmail.com";
var expresionEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
console.log(expresionEmail.test(cadena2));