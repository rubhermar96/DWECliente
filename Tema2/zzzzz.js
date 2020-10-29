/*var aula = {};

console.log(aula);
console.log(typeof(aula));

Object.defineProperty(aula, "numeroPupitres",{value:16, enumerable:true});

Object.defineProperty(aula,{
    superficie:{
        value: 60, enumerable:true
    },
    nombre:{
        value:"informatica2", enumerable:false
    }
});

console.log(aula);*/

var persona = {
    nombre:{
        nombrePila:"Juan",
        Apellidos:"Moreno Caravaca"
    },
    edad:50,
    direccion:{
        calle:"San Juan",
        numero:5,
        piso:2,
        puerta:"C",
        localidad:"Villarobledo"
    },
    hijos:[{nombre:"Lucia",edad:12},{nombre:"Marta",edad:20}],
}

console.log(persona);

persona.hijos.forEach(x => {
    console.log("edad de los hijos --> "+x.edad);
});