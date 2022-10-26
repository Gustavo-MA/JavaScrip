# JavaScrip
Curso-JS
Introduccion.

Se desarrollan ejemplo para la compresio de Java Scrip.
Mediante ejemplos practicos de comprencion.

Materiales instalacion de JavaScrip.

La instruccion para instalar desde consola es la siguiente:

* sudo apt install nodejs

y se  verifica la version de la instalacion con: version nodejs -j

![image](https://user-images.githubusercontent.com/111370930/197905976-f9f49591-d307-4f2a-89a5-6c436cdca804.png)

Se realiza el primer ejemplo para verificar que la instalacion de Java Scrip es funcional.
Realizando el  programa: main.js

con la instruccion: console.log("Hola Mundo!!");

![image](https://user-images.githubusercontent.com/111370930/197906120-4c7078d8-03c6-4a67-b110-b0d3327f49a7.png)

Se realiza tambien el Ejemplo2:
............................................
// mensaje en el log
console.log("Esto es un mensaj en el log");
//error
console.error("Esto es un error");
//Añadir informaciòn
console.info("Añade información a la consola");
//Warnig
console.warn("Envia un aviso");

const gente=[
{nombre:'Diego', edad:30},
{nombre:'Toni', edad:10},
{nombre:'Johana', edad:20},
];
console.table(gente);
gente.forEach((persona,index)=>{
console.groupCollapsed(`${persona.nombre}`);
console.log(persona.edad);
console.log("Hola");
console.groupEnd(`${persona.nombre}`);
});
............................................
![image](https://user-images.githubusercontent.com/111370930/197906572-5acb5fed-a6fe-4794-9df9-7955260a0085.png)


Por ultimo se codigica el codigo HTM como Ejemplo 3 mes.html:

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Ejercicio 3 - Arrays simples</title>
<script type="text/javascript">
// Array que almacena los 12 meses del año
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Se muestra el nombre de cada mes
alert(meses[0]);
alert(meses[1]);
alert(meses[2]);
alert(meses[3]);
alert(meses[4]);
alert(meses[5]);
alert(meses[6]);
alert(meses[7]);
alert(meses[8]);
alert(meses[9]);
alert(meses[10]);
alert(meses[11]);
</script>
</head>

<body>
<p>Esta página muestra los 12 meses del año</p>
</body>
</html>

![image](https://user-images.githubusercontent.com/111370930/197907093-8053118d-e7b1-4023-a5e8-2ddf777e09a4.png)

![image](https://user-images.githubusercontent.com/111370930/197907154-8d03fecb-2f35-4215-951c-bbed0f217ef1.png)



