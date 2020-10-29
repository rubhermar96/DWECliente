function Estudiante (nombre, curso, año){
    this.nombre=nombre;
    this.curso = curso;
    this.nota = [0,0,0,0,0,0,0,0,0,0,0];
    this.año = año;
    this.asignaturas = ["Sistemas", "Bases de Datos", "Fol", "Lenguaje Marcas", "Entornos", "Programacion", "DWEC","DWES","Empresa","DespliegueAW","Diseño"];
    this.horas = [6,6,3,4,3,8,8,9,3,4,6];
    this.contador = 0;


    this.examinar= function(){
        if (curso = 1){
            for(i=0; i<=5; i++){
                nota[i]=Math.floor(Math.random()*11);
            }
            for(i=0; i<=5; i++){
                if(nota[i]<5){
                    nota[i]=Math.floor(Math.random()*11);
                }
            }
            for(i=0; i<=5; i++){
                if (nota[i]<5){
                    contador += horas[i];
                }
            }
            if(contador<10){
                curso = 2;
            }else{
                curso = 1;
            }
        } else if (curso = 2){
            for(i=6; i<=10; i++){
                nota[i]=Math.floor(Math.random()*11);
            }
            for(i=6; i<=10; i++){
                if(nota[i]<5){
                    nota[i]=Math.floor(Math.random()*11);
                }
            }
        }
    }
}
var alumnos = [];

alumnos.push(new Estudiante("Lucia", 1, 2018));
alumnos.push(new Estudiante("Paco",2,2019));

while (alumnos.every(y => y.curso<2)){
    alumnos.forEach(x => {x.examinar();});
}

alumnos.forEach(x => console.log(x.nombre+" --> "+x.nota+" --> "+x.curso));
