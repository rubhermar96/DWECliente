var aula = {};

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

console.log(aula);