//Ejercicio expresiones Regulares
//Rubén Herrera Marcos


//A partir de una cadena de texto en formato CSV obtener un array bidimensional ordenado con los siguientes campos:
//Nombre, DNI, Código Postal, Teléfono, Matrícula
//Se supone que la cadena de texto contiene 25 valores separados por comas. Cada cinco valores se almacenan datos de una persona (nombre, dni, cp, teléfono y matrícula). Los 5 primeros de una persona, los 5 siguientes de otra y así sucesivamente.
//El array bidimensional resultante debe tener las siguientes características:
//El primer índice indica la persona
//El segundo indice indica el campo de dato de cada persona por el orden especificado

//Creacion variables
var cadena = "Rocío,48593852E,698430293,5676LMN,43006,75306,9876DSN,956884322,97432145L,Manuel,8345SST,22033,843246543,Laura,09234654F,María,85743234A,983453234,4543MSN,11140,10001,3234SSS,685434234,05432958T,Juan Antonio";
var lista = cadena.split(",");
let datos = [
    ["Nombre","DNI","Código Postal","Teléfono","Matrícula"]
];
var nombre="";
var dni ="";
var cp="";
var tfno="";
var matricula="";
var cont = 1;


//Expresiones regulares
var expNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
var expDNI = /^\d{8}[A-Z]$/;
var expCP = /^[0-9]{5}$/;
var expTfno = /^[6789][0-9]{8}$/;
var expMatricula = /^[0-9]{4}[B-D,F-H,J-N,P-T,V-Z]{3}$/;
console.log(expTfno.test(lista[2]));

//Introducir los datos en el array bidimensional
for (i=0;i<lista.length;i++){
    
    if(expNombre.test(lista[i])){
        nombre = lista[i];
    }else if (expDNI.test(lista[i])){
        dni = lista[i];
    }else if (expCP.test(lista[i])){
        cp = lista[i];
    }else if (expTfno.test(lista[i])){
        tfno = lista[i];
    }else if (expMatricula.test(lista[i])){
        matricula = lista[i];
    }
    if (cont%5==0 && i!=0){
        datos.push([nombre,dni,cp,tfno,matricula]);
    }
    cont++;
}


console.log(datos);

