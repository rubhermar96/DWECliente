/*
 *  This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * */

var examen = "{\"preguntas\":[\
    {\"codigo\":0, \"enunciado\":\"La capital de España es...\",\"respuesta1\":\"Madrid\", \"respuesta2\":\"Barcelona\",\"respuesta3\":\"Sevilla\",\"correcta\":\"1\"},\
    {\"codigo\":1,\"enunciado\":\"La suma de dos y dos son...\", \"respuesta1\":\"3\", \"respuesta2\":\"4\",\"respuesta3\":\"5\",\"correcta\":\"2\"},\
    {\"codigo\":2,\"enunciado\":\"El rio Pisuerga pasa por...\",\"respuesta1\": \"Murcia\",\"respuesta2\":\"Almería\", \"respuesta3\":\"Valladolid\",\"correcta\":\"3\"},\
    {\"codigo\":3, \"enunciado\": \"El día de Navidad es el 25 de...\",\"respuesta1\": \"Enero\", \"respuesta2\":\"Noviembre\", \"respuesta3\":\"Diciembre\", \"correcta\":\"3\"},\
    {\"codigo\":4,\"enunciado\":\"El número de módulos en segundo de DAW es...\",\"respuesta1\":\"4\",\"respuesta2\":\"5\",\"respuesta3\":\"6\",\"correcta\":\"2\"},\
    {\"codigo\":5,\"enunciado\":\"El color del caballo blanco de Santiago era...\",\"respuesta1\":\"Blanco\",\"respuesta2\":\"Azabache\",\"respuesta3\":\"Verde\",\"correcta\":\"2\"},\
    {\"codigo\":6,\"enunciado\":\"El número de lados de un triángulo es...\",\"respuesta1\":\"2\",\"respuesta2\":\"3\",\"respuesta3\":\"Verde\",\"correcta\":\"2\"},\
    {\"codigo\":7,\"enunciado\":\"El pentágono debe su nombre a qué figura geométrica...\",\"respuesta1\":\"Pentágono\",\"respuesta2\":\"Cuadrado\",\"respuesta3\":\"Verde\",\"correcta\":\"1\"},\
    {\"codigo\":8,\"enunciado\":\"¿Qué son los mollys?\",\"respuesta1\":\"Azulejos\",\"respuesta2\":\"Lámparas\",\"respuesta3\":\"Peces\",\"correcta\":\"3\"},\
    {\"codigo\":9,\"enunciado\":\"¿Qué salsa me pica?\",\"respuesta1\":\"Mayonesa\",\"respuesta2\":\"De pimienta\",\"respuesta3\":\"Ninguna\",\"correcta\":\"3\"},\
    {\"codigo\":10,\"enunciado\":\"¿Qué no sabía Sócrates?\",\"respuesta1\":\"Mayonesa\",\"respuesta2\":\"nada\",\"respuesta3\":\"El sabor del pie de otro\",\"correcta\":\"2\"}\
]}";


var examinados = "{\"examenes\":[\
    {\"nombre\":\"marcos\",\"respuestas\":[\
        {\"codigo\":0,\"respuesta\":\"2\"},\
        {\"codigo\":1,\"respuesta\":\"1\"},\
        {\"codigo\":2,\"respuesta\":\"2\"},\
        {\"codigo\":3,\"respuesta\":\"3\"},\
        {\"codigo\":4,\"respuesta\":\"1\"},\
        {\"codigo\":5,\"respuesta\":\"2\"},\
        {\"codigo\":6,\"respuesta\":\"1\"},\
        {\"codigo\":7,\"respuesta\":\"2\"},\
        {\"codigo\":8,\"respuesta\":\"3\"},\
        {\"codigo\":9,\"respuesta\":\"1\"},\
        {\"codigo\":10,\"respuesta\":\"1\"}\
        ],\
        \"puntuacion\":\"0\"\
    },\
    {\"nombre\":\"Paquito\",\"respuestas\":[\
        {\"codigo\":2,\"respuesta\":\"3\"},\
        {\"codigo\":3,\"respuesta\":\"3\"},\
        {\"codigo\":4,\"respuesta\":\"2\"},\
        {\"codigo\":5,\"respuesta\":\"2\"},\
        {\"codigo\":6,\"respuesta\":\"1\"},\
        {\"codigo\":7,\"respuesta\":\"2\"},\
        {\"codigo\":0,\"respuesta\":\"1\"},\
        {\"codigo\":1,\"respuesta\":\"2\"},\
        {\"codigo\":8,\"respuesta\":\"3\"},\
        {\"codigo\":9,\"respuesta\":\"1\"},\
        {\"codigo\":10,\"respuesta\":\"1\"}\
        ],\
        \"puntuacion\":\"0\"\
    },\
    {\"nombre\":\"Poni\",\"respuestas\":[\
        {\"codigo\":0,\"respuesta\":\"2\"},\
        {\"codigo\":1,\"respuesta\":\"1\"},\
        {\"codigo\":2,\"respuesta\":\"2\"},\
        {\"codigo\":3,\"respuesta\":\"3\"},\
        {\"codigo\":4,\"respuesta\":\"1\"},\
        {\"codigo\":5,\"respuesta\":\"2\"},\
        {\"codigo\":6,\"respuesta\":\"1\"},\
        {\"codigo\":7,\"respuesta\":\"2\"},\
        {\"codigo\":8,\"respuesta\":\"3\"},\
        {\"codigo\":9,\"respuesta\":\"1\"},\
        {\"codigo\":10,\"respuesta\":\"1\"}\
        ],\
        \"puntuacion\":\"0\"\
    },\
    {\"nombre\":\"Muf\",\"respuestas\":[\
        {\"codigo\":0,\"respuesta\":\"2\"},\
        {\"codigo\":1,\"respuesta\":\"1\"},\
        {\"codigo\":2,\"respuesta\":\"2\"},\
        {\"codigo\":3,\"respuesta\":\"3\"},\
        {\"codigo\":4,\"respuesta\":\"1\"},\
        {\"codigo\":5,\"respuesta\":\"2\"},\
        {\"codigo\":6,\"respuesta\":\"1\"},\
        {\"codigo\":7,\"respuesta\":\"2\"},\
        {\"codigo\":8,\"respuesta\":\"3\"},\
        {\"codigo\":9,\"respuesta\":\"1\"},\
        {\"codigo\":10,\"respuesta\":\"1\"}\
        ],\
        \"puntuacion\":\"0\"\
    },\
    {\"nombre\":\"Mif\",\"respuestas\":[\
        {\"codigo\":0,\"respuesta\":\"2\"},\
        {\"codigo\":1,\"respuesta\":\"1\"},\
        {\"codigo\":2,\"respuesta\":\"2\"},\
        {\"codigo\":3,\"respuesta\":\"3\"},\
        {\"codigo\":4,\"respuesta\":\"1\"},\
        {\"codigo\":5,\"respuesta\":\"2\"},\
        {\"codigo\":6,\"respuesta\":\"1\"},\
        {\"codigo\":7,\"respuesta\":\"2\"},\
        {\"codigo\":8,\"respuesta\":\"3\"},\
        {\"codigo\":9,\"respuesta\":\"1\"},\
        {\"codigo\":10,\"respuesta\":\"1\"}\
        ],\
        \"puntuacion\":\"0\"\
    },\
    {\"nombre\":\"Chof\",\"respuestas\":[\
        {\"codigo\":0,\"respuesta\":\"2\"},\
        {\"codigo\":1,\"respuesta\":\"1\"},\
        {\"codigo\":2,\"respuesta\":\"2\"},\
        {\"codigo\":3,\"respuesta\":\"3\"},\
        {\"codigo\":4,\"respuesta\":\"1\"},\
        {\"codigo\":5,\"respuesta\":\"2\"},\
        {\"codigo\":6,\"respuesta\":\"1\"},\
        {\"codigo\":7,\"respuesta\":\"2\"},\
        {\"codigo\":8,\"respuesta\":\"3\"},\
        {\"codigo\":9,\"respuesta\":\"1\"},\
        {\"codigo\":10,\"respuesta\":\"1\"}\
        ],\
        \"puntuacion\":\"0\"\
    },\
    {\"nombre\":\"Glod\",\"respuestas\":[\
        {\"codigo\":0,\"respuesta\":\"2\"},\
        {\"codigo\":1,\"respuesta\":\"1\"},\
        {\"codigo\":2,\"respuesta\":\"2\"},\
        {\"codigo\":3,\"respuesta\":\"3\"},\
        {\"codigo\":4,\"respuesta\":\"1\"},\
        {\"codigo\":5,\"respuesta\":\"2\"},\
        {\"codigo\":6,\"respuesta\":\"1\"},\
        {\"codigo\":7,\"respuesta\":\"2\"},\
        {\"codigo\":8,\"respuesta\":\"3\"},\
        {\"codigo\":9,\"respuesta\":\"1\"},\
        {\"codigo\":10,\"respuesta\":\"1\"}\
        ],\
        \"puntuacion\":\"0\"\
    },\
    {\"nombre\":\"ana\",\"respuestas\":[\
        {\"codigo\":0,\"respuesta\":\"3\"},\
        {\"codigo\":3,\"respuesta\":\"3\"},\
        {\"codigo\":4,\"respuesta\":\"3\"},\
        {\"codigo\":5,\"respuesta\":\"3\"},\
        {\"codigo\":6,\"respuesta\":\"3\"},\
        {\"codigo\":1,\"respuesta\":\"3\"},\
        {\"codigo\":2,\"respuesta\":\"3\"},\
        {\"codigo\":7,\"respuesta\":\"3\"},\
        {\"codigo\":8,\"respuesta\":\"3\"},\
        {\"codigo\":9,\"respuesta\":\"3\"},\
        {\"codigo\":10,\"respuesta\":\"3\"}\
        ],\
        \"puntuacion\":\"0\"\
    }\
]}";
var aprobados = 0;

examen = JSON.parse(examen);
examinados = JSON.parse(examinados);

for (let i in examen.preguntas) {
    for (let j in examinados.examenes) {
        examinados.examenes[j].respuestas.find(function (v) {
            if (v.codigo == examen.preguntas[i].codigo){
                if (v.respuesta == examen.preguntas[i].correcta) {
                    examinados.examenes[j].puntuacion++;
                }
                return true;
            } else {
                return false;
            }
        });
    }
}

examinados.examenes.forEach(e => {
    if (e.puntuacion >= 5)
        aprobados++;
    console.log(e.nombre + '→' + e.puntuacion)
});

console.log('Número de aprobados: ' + aprobados);
console.log('Número de suspensos: ' + (examinados.examenes.length - aprobados));
