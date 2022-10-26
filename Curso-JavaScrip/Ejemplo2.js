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




