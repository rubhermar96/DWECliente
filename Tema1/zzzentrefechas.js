var fecha1 = new Date('2020-10-6');
var fecha2 = new Date('2020-10-7');

var diams = 86400000;
var horams = diams/24;
var minutoms=horams/60;
var diferenciams = fecha2 - fecha1;
var difDias = Math.floor(diferenciams / diams);
var difHoras = Math.floor(diferenciams/horams);
var difMinutos = Math.floor(diferenciams/minutoms);

console.log("Días > " +difDias+" ** Horas > "+difHoras+" ** Minutos > "+difMinutos);