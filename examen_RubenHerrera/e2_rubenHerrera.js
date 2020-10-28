var jsonSolicitudes = '{"solicitudes":[\
    {"codigo":0, "nombre":"Luis    ","fechanac":"4-7-2005","notaExpediente":"7.5","admitido":"","causaExclusion":""},\
    {"codigo":1, "nombre":"Marta   ","fechanac":"3-8-2003","notaExpediente":"15.52","admitido":"","causaExclusion":""},\
    {"codigo":2, "nombre":"Ana     ","fechanac":"1-7-1998","notaExpediente":"8.60","admitido":"","causaExclusion":""},\
    {"codigo":3, "nombre":"Maria   ","fechanac":"2000-9-3","notaExpediente":"7.92","admitido":"","causaExclusion":""},\
    {"codigo":4, "nombre":"Juan    ","fechanac":"6-2-2003","notaExpediente":"8.12","admitido":"","causaExclusion":""},\
    {"codigo":5, "nombre":"Jorge   ","fechanac":"9-1-2000","notaExpediente":"9.14","admitido":"","causaExclusion":""},\
    {"codigo":6, "nombre":"Antonio ","fechanac":"6-3-2004","notaExpediente":"6.34","admitido":"","causaExclusion":""},\
    {"codigo":7, "nombre":"Susana  ","fechanac":"9-7-2001","notaExpediente":"7.74","admitido":"","causaExclusion":""},\
    {"codigo":8, "nombre":"Fernando","fechanac":"2-2-2002","notaExpediente":"5.78","admitido":"","causaExclusion":""},\
    {"codigo":9, "nombre":"Alvaro  ","fechanac":"3-1-2001","notaExpediente":"7.58","admitido":"","causaExclusion":""},\
    {"codigo":10,"nombre":"Manuel  ","fechanac":"9-1-2003","notaExpediente":"9.16","admitido":"","causaExclusion":""},\
    {"codigo":11,"nombre":"Jaime   ","fechanac":"6-3-2005","notaExpediente":"6.34","admitido":"","causaExclusion":""},\
    {"codigo":12,"nombre":"Monica  ","fechanac":"9-7-2004","notaExpediente":"7.74","admitido":"","causaExclusion":""},\
    {"codigo":13,"nombre":"Lucia   ","fechanac":"2-2-2003","notaExpediente":"5.78","admitido":"","causaExclusion":""},\
    {"codigo":14,"nombre":"Federico","fechanac":"4-1-2004","notaExpediente":"7.58","admitido":"","causaExclusion":""}\
    ]}';
var expFecha = /^\[0-9]+.[0-9]+.[2][0][0][0-5]$/;
var expNota = /^\[0-9]+.[0-9]{2}$/;

var objSolicitudes = JSON.parse(jsonSolicitudes);
var notasmaximas=[0,0,0];
objSolicitudes.solicitudes.forEach(x => {
    if(x.fechanac.test(expFecha)){
        if(x.notaExpediente.test(expNota)){
            if(x.notaExpediente<10){
                for(i=0;i<notasmaximas.length;i++){
                    if(x.notaExpediente>notasmaximas[i]){
                        notasmaximas.push(x.notaExpediente);
                        x.admitido=true;
                    }
                    else{
                        x.causaExclusion="En lista de Espera";
                        x.admitido = false;
                    }
                }
            }else{
                x.causaExclusion="Nota mayor a 10";
                x.admitido = false;
            }
        }else{
            x.causaExclusion="Error en el formato de la nota";
            x.admitido = false;
        }
    }else{
        x.causaExclusion = "Error en la Fecha";
        x.admitido = false;
    }
});
var final = JSON.stringify(objSolicitudes);
console.table(final);