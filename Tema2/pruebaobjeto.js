var coche = new Object();

coche.color = "azul";
coche.marca = "seat";
coche.modelo = "ibiza";
coche.cv = "120 cv";
coche.kilometros = "100.000 km";
coche.año = "2012";

var coche2 = {
    color:"negro",
    marca:"renault",
    modelo:"clio",
    cv:"124 cv",
    kilometros:"150.000 km",
    año:"2011"
}

console.log("FORMA 1");
for (let x in coche){
    console.log(x + " - " + coche[x]);
}

console.log("FORMA 2")
Object.keys(coche2).forEach(x => console.log(x+"-->"+coche2[x]));

var persona = {
    nombre:"Luis",
    edad:20,
    direccion:{
        calle:"mirabel",
        numero:20
    }
}
Object.keys(persona).forEach(x => console.log(x+"-->"+persona[x]));
Object.keys(persona.direccion).forEach(x => console.log(x+"-->"+persona.direccion[x]));
