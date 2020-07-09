let valor, expReg;

expReg = /[0-9]/;
valor = 1992;

//Una fecha en exp regular como 20-10-2018
expReg = /\d\d-\d\d-\d\d\d\d/;
valor = "20-20-2018";

//Hora 10:30
expReg = /\d\d:\d\d/;
valor = "10:30"

//Hora 10:30 AM
expReg = /\d\d:\d\d \D\D/;
valor = "10:30 AM"

//Busca al menos un numero o màs del mismo
expReg = /\d+/;


//Negar la expresion
expReg = /[^0-9]/;
valor = "hola";

//La sintaxis con {1,2}
expReg = /\d{1,2}-\d{1,2}-\d{4}/;
valor = "10-09-2014";

//Letras o numeros w espera numeros o letras
expReg = /\w+/;
valor = "Espera letras o numeros";
valor = 1234;
valor = " ";

//Revisar que sean puros numeros
expReg = /\d+/;
valor = "hola";
expReg = /([0-9]\w+)/;
valor = 123;

//Texto solo MAYUSCULAS
expReg = /([A-Z])\w+/;
valor = "hola mundo";
valor = 12345;
valor = "HOLA MUNDO"

//Texto solo minusculas
expReg = /([a-z]\w+)/;
valor = "HOLA";
valor = "hola";

console.log(expReg.test(valor));