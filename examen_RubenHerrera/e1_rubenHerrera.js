function finanzasPersonales(titular,saldo,sueldo,deuda){
    this.titular = titular;
    this.saldo = saldo;
    this.sueldo = sueldo;
    this.deuda = deuda;
    this.gastosMensuales=0;
    this.amortizacionDeuda=0;
    this.mesessaldardeuda=0;
    this.mesInicio = new Date();
    this.dia=this.mesInicio.getDate();
    this.mes=0;
    this.anyo=0;
    this.fechaFinal = new Date(this.dia,this.mes,this.anyo);
    this.pagodeudames=[];
    this.gastosMensualesMes=[];

    this.ajusteFinanzas = function(){
        for(i=this.dia;i<31;i++){
            if(i==27){
                this.saldo+=this.sueldo;
                this.gastosMensuales= Math.floor(Math.random()*800);
                this.amortizacionDeuda=Math.floor(Math.random()*400);
                this.saldo-=this.gastosMensuales;
                this.deuda-=this.amortizacionDeuda;
                this.mesessaldardeuda++;
                this.gastosMensualesMes.push(this.gastosMensuales);
                this.pagodeudames.push(this.amortizacionDeuda);
            }
            if(this.deuda<0){
                this.deuda=0;
            }
        }
    }
}

var personas=[];

personas.push(new finanzasPersonales("Juan",2000,1500,5000));
personas.push(new finanzasPersonales("Manuel",10000,3000,40000));
personas.push(new finanzasPersonales("Laura",6000,1200,2000));
personas.push(new finanzasPersonales("Mercedes",7500,2000,7000));
personas.push(new finanzasPersonales("Paula",15000,3500,6000));

while(personas.every(x => x.deuda!=0)){
    personas.forEach(x => {x.ajusteFinanzas();});

    personas.some(x=> {
        if(x.deuda=0){
            x.anyo = x.mesInicio.getFullYear();
            x.mes = x.mesInicio.getMonth();
            for(i=0;i<=x.mesessaldardeuda;i++){
                x.mes++;
                if(x.mes=11){
                    x.anyo++;
                    x.mes=0
                }
            }
            x.fechaFinal.setDate(x.dia);
            x.fechaFinal.setMonth(x.mes);
            x.fechaFinal.setFullYear(x.anyo)
        }
    });
}
personas.forEach(x=> console.log("Titular: "+ x.titular + " // Fecha cancelacion Deuda: " + x.fechaFinal + " // Saldo: " + x.saldo + " // Deuda: " + x.deuda + " // Meses para pagarla: " + x.mesessaldardeuda + " // Amortizacion/mes: " + x.pagodeudames + " // Gastos Mensuales: " + x.gastosMensualesMes));