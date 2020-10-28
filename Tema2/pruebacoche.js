const distanciaVuelta = 7000;
const vueltasTotales = 8;

function Coche(nombre,potencia,combustible){
    this.nombre = nombre;
    this.potencia = potencia;
    this.combustible = combustible;
    this.tiempo = 0;
    this.vueltas = 0;
    this.recorrido = 0;
    this.tiempoPorVuelta = [];
    this.vueltaAnterior = 0;

    this.acelerar = function(){
        if (this.combustible>0){
            var acelerado = Math.floor(Math.random()*this.potencia);
            this.recorrido += acelerado;
            this.tiempo++;
            this.combustible = this.combustible - acelerado*0.000999;
        }
    }
}

var carrera = [];

carrera.push(new Coche("c1",119,70));
carrera.push(new Coche("c2",140,70));
carrera.push(new Coche("c3",150,70));
carrera.push(new Coche("c4",130,70));
carrera.push(new Coche("c5",150,70));

while (carrera.every(y => y.vueltas < vueltasTotales)){
    if(carrera.every(x => x.combustible<=0)){
        console.log("TODOS SIN GASOLINA");
        break;
    }
    carrera.forEach(x => {x.acelerar();});

    if(carrera.some(x=>{
        if(x.recorrido >= distanciaVuelta){
            x.vueltas++;
            x.recorrido = x.recorrido - distanciaVuelta;
            x.tiempoPorVuelta.push(x.tiempo - x.vueltaAnterior);
            x.vueltaAnterior = x.tiempo;
        }
    }));
}

carrera.forEach(x =>console.log(x.nombre+" --> " + x.vueltas + " --> " + x.recorrido + " --> " + x.combustible + " --> " + x.tiempo));
carrera.forEach(x => console.log("Tiempos por Vuelta (Acumulados) --> " + x.tiempoPorVuelta));
carrera.forEach(x=>{
    if(x.vueltas == vueltasTotales){
        console.log("Ganador: " + x.nombre);
    }
})
