var preguntas_examen = '{"preguntas":[{"codigo":0,"enunciado":"La capital de España es...","respuesta1":"Madrid","respuesta2":"Barcelona","respuesta3":"Sevilla","correcta":"1"},\
{"codigo":1,"enunciado":"La suma de dos y dos son...","respuesta1":"3","respuesta2":"4","respuesta3":"5","correcta":"2"},\
{"codigo":2,"enunciado":"El rio Pisuerga pasa por...","respuesta1":"Murcia","respuesta2":"Almería","respuesta3":"Valladolid","correcta":"3"},\
{"codigo":3,"enunciado":"El día de Navidad es el 25 de...","respuesta1":"Enero","respuesta2":"Noviembre","respuesta3":"Diciembre","correcta":"3"},\
{"codigo":4,"enunciado":"El número de módulos en segundo de DAW es...","respuesta1":"4","respuesta2":"5","respuesta3":"6","correcta":"2"},\
{"codigo":5,"enunciado":"El coche rojo de manuel es de color...","respuesta1":"Azul","respuesta2":"Blanco","respuesta3":"Rojo","correcta":"3"},\
{"codigo":6,"enunciado":"Sevilla es capital de la Comunidad de...","respuesta1":"Andalucía","respuesta2":"Madrid","respuesta3":"Castilla y León","correcta":"1"},\
{"codigo":7,"enunciado":"El volcán de Tenerife se llama...","respuesta1":"Veleta","respuesta2":"Teide","respuesta3":"Pikachu","correcta":"2"},\
{"codigo":8,"enunciado":"El platano es de color...","respuesta1":"Amarillo","respuesta2":"Azul","respuesta3":"Verde","correcta":"1"},\
{"codigo":9,"enunciado":"Que mar limita por el este a la península iberica...","respuesta1":"Atlántico","respuesta2":"Negro","respuesta3":"Mediterráneo","correcta":"3"}]}';

var alumnos = '{"examenes":[\
    {"nombre":"marcos","respuestas":[\
        {"codigo":"0","respuesta":"2"},\
        {"codigo":"1","respuesta":"1"},\
        {"codigo":"2","respuesta":"2"},\
        {"codigo":"3","respuesta":"3"},\
        {"codigo":"4","respuesta":"1"},\
        {"codigo":"5","respuesta":"1"},\
        {"codigo":"6","respuesta":"3"},\
        {"codigo":"7","respuesta":"2"},\
        {"codigo":"8","respuesta":"1"},\
        {"codigo":"9","respuesta":"3"}\
    ],"puntuacion":"0"},\
    {"nombre":"ana","respuestas":[\
        {"codigo":"0","respuesta":"2"},\
        {"codigo":"1","respuesta":"1"},\
        {"codigo":"2","respuesta":"2"},\
        {"codigo":"3","respuesta":"3"},\
        {"codigo":"4","respuesta":"1"},\
        {"codigo":"5","respuesta":"1"},\
        {"codigo":"6","respuesta":"3"},\
        {"codigo":"7","respuesta":"1"},\
        {"codigo":"8","respuesta":"2"},\
        {"codigo":"9","respuesta":"2"}\
    ],"puntuacion":"0"},\
    {"nombre":"paco","respuestas":[\
        {"codigo":"0","respuesta":"1"},\
        {"codigo":"1","respuesta":"3"},\
        {"codigo":"2","respuesta":"2"},\
        {"codigo":"3","respuesta":"1"},\
        {"codigo":"4","respuesta":"1"},\
        {"codigo":"5","respuesta":"2"},\
        {"codigo":"6","respuesta":"3"},\
        {"codigo":"7","respuesta":"3"},\
        {"codigo":"8","respuesta":"1"},\
        {"codigo":"9","respuesta":"2"}\
    ],"puntuacion":"0"},\
    {"nombre":"luis","respuestas":[\
        {"codigo":"0","respuesta":"1"},\
        {"codigo":"1","respuesta":"2"},\
        {"codigo":"2","respuesta":"3"},\
        {"codigo":"3","respuesta":"1"},\
        {"codigo":"4","respuesta":"2"},\
        {"codigo":"5","respuesta":"3"},\
        {"codigo":"6","respuesta":"1"},\
        {"codigo":"7","respuesta":"2"},\
        {"codigo":"8","respuesta":"3"},\
        {"codigo":"9","respuesta":"1"}\
    ],"puntuacion":"0"},\
    {"nombre":"laura","respuestas":[\
        {"codigo":"0","respuesta":"3"},\
        {"codigo":"1","respuesta":"2"},\
        {"codigo":"2","respuesta":"1"},\
        {"codigo":"3","respuesta":"3"},\
        {"codigo":"4","respuesta":"2"},\
        {"codigo":"5","respuesta":"1"},\
        {"codigo":"6","respuesta":"3"},\
        {"codigo":"7","respuesta":"2"},\
        {"codigo":"8","respuesta":"1"},\
        {"codigo":"9","respuesta":"3"}\
    ],"puntuacion":"0"},\
    {"nombre":"almudena","respuestas":[\
        {"codigo":"0","respuesta":"1"},\
        {"codigo":"1","respuesta":"1"},\
        {"codigo":"2","respuesta":"2"},\
        {"codigo":"3","respuesta":"2"},\
        {"codigo":"4","respuesta":"3"},\
        {"codigo":"5","respuesta":"3"},\
        {"codigo":"6","respuesta":"1"},\
        {"codigo":"7","respuesta":"1"},\
        {"codigo":"8","respuesta":"2"},\
        {"codigo":"9","respuesta":"2"}\
    ],"puntuacion":"0"},\
    {"nombre":"juan","respuestas":[\
        {"codigo":"0","respuesta":"3"},\
        {"codigo":"1","respuesta":"3"},\
        {"codigo":"2","respuesta":"3"},\
        {"codigo":"3","respuesta":"3"},\
        {"codigo":"4","respuesta":"3"},\
        {"codigo":"5","respuesta":"3"},\
        {"codigo":"6","respuesta":"3"},\
        {"codigo":"7","respuesta":"3"},\
        {"codigo":"8","respuesta":"3"},\
        {"codigo":"9","respuesta":"3"}\
    ],"puntuacion":"0"},\
    {"nombre":"pepe","respuestas":[\
        {"codigo":"0","respuesta":"2"},\
        {"codigo":"1","respuesta":"2"},\
        {"codigo":"2","respuesta":"3"},\
        {"codigo":"3","respuesta":"3"},\
        {"codigo":"4","respuesta":"1"},\
        {"codigo":"5","respuesta":"1"},\
        {"codigo":"6","respuesta":"1"},\
        {"codigo":"7","respuesta":"3"},\
        {"codigo":"8","respuesta":"2"},\
        {"codigo":"9","respuesta":"2"}\
    ],"puntuacion":"0"}\
]}';

var objeto_alum = JSON.parse(alumnos, function(key,value){
    if(key=="codigo"){
        return value;
    }else{
        return value;
    }
});
var objeto_preguntas = JSON.parse(preguntas_examen, function(key, value){
    if(key!=""){
        return value;
    }else {
        return value;
    }
});

console.log(objeto_preguntas);
console.log(objeto_alum);
