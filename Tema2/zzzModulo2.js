function objAlumno (nombre,curso,año,codigoA){
    this.nombreA = nombre;
    this.cursoA = curso;
    this.añoA = año;
    this.codigoA=codigoA;
}
function objModulos(nombreM,cursoM,horasM){
    this.nombreM=nombreM;
    this.cursoM=cursoM;
    this.horasM=horasM;
    this.codigoA = [];
    this.notaM=[];
    this.examinar=function(){
        for(i=0;i<notaM.length;i++){
            notaM[i] = Math.floor(Math.random()*11);
            if(notaM[i]<5){
                notaM[i] = Math.floor(Math.random()*11);
            }
        }
    }
}
var alumnos=[];
var modulos=[];
//alumnos
alumnos.push = new objAlumno("Ruben",1,2018,001);
//modulos
modulos.push = new objModulos("Sistemas",1,6);
modulos.push = new objModulos("Bases de Datos",1,6);
modulos.push = new objModulos("Fol",1,3);
modulos.push = new objModulos("Lenguaje de Marcas",1,4);
modulos.push = new objModulos("Entornos",1,3);
modulos.push = new objModulos("Programacion",1,8);
modulos.push = new objModulos("DWEC",2,8);
modulos.push = new objModulos("DWES",2,9);
modulos.push = new objModulos("Despliegue",2,4);
modulos.push = new objModulos("Diseño",2,6);
modulos.push = new objModulos("Empresa",2,3);

for(i=0;i<alumnos.length;i++){
    for(j=0;j<modulos.length;j++){
        for(z=0;z<modulos[j].codigoA.length;z++){
            modulos[j].codigoA[z]=alumnos[i].codigoA;
            console.log(alumnos[i].codigoA);
        }
    }
}

console.log(modulos.codigoA);

