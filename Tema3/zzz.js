var text = '{"coche":"bmw","estacion":"primavera","movil":"viejo"}';
var obj = JSON.parse(text, function(key,value){
    if(typeof value ==="string"){
        return value.toUpperCase();
    }
    return value;
});

var textofinal = JSON.stringify(obj);
console.log(textofinal);

//el de las fechas 1

var personasCadena='[\
    {"nombre":"pepe","fechanac":"1980-04-07"},\
    {"nombre":"ana","fechanac":"1978-04-08"},\
    {"nombre":"carlos","fechanac":"1983-05-09"},\
    {"nombre":"maria","fechanac":"1985-04-10"},\
    {"nombre":"marcos","fechanac":"1983-04-11"},\
    {"nombre":"laura","fechanac":"1984-04-12"}\
    ]';

var obj2 = JSON.parse(personasCadena, function(key,value){
    var fecha,anno,mes,dia;
    if(key=="fechanac"){
        fecha = new Date(value);
        anno = fecha.getFullYear().toString();
        mes = fecha.getMonth()+1;
        dia = fecha.getDate();
        if(dia%2==0){
            anno++;
        }else{
            anno--;
        }
        if(fecha.getMonth()<10){
            mes = "0" + mes;
        }
        if(fecha.getDate()<10){
            dia = "0" + dia;
        }
        return anno + "-" + mes + "-" + dia;
    }else{
        return value;
    }

});
console.log(obj2);

//el de las fechas 2

var obj3 = JSON.parse(personasCadena, function(key,value){
    var fecha
    if(key=="fechanac"){
        fecha = new Date(value);
        return fecha.getTime();
    }else{
        return value;
    }
});

var ordenar = obj3.sort(function(a,b){
    if(a.fechanac<b.fechanac){
        return -1;
    }else if (a.fechanac>b.fechanac){
        return 1;
    }else{
        return 0;
    }
})
console.log(ordenar);

for(x in obj3){
    var fecha,anno,mes,dia,cadena="";

    Object.keys(obj3[x]).forEach(function(y){
        if (y=="fechanac"){
            fecha = new Date(obj3[x][y]);
            cadena += fecha.getFullYear()+"-";
            mes = fecha.getMonth()+1+"-";
            dia = fecha.getDate();
            if(fecha.getMonth()<10){
                cadena += "0"+mes;
            }
            if(fecha.getDate()<10){
                cadena+="0";
            }
            cadena += fecha.getDate();
            obj3[x][y] = cadena;
            cadena = "";
        }
    });
}
var final = JSON.stringify(obj3);
console.log(final);