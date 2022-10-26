{
    "nombre"; "Gustavo Medina", 
    "edad"; 26,
    "nacionalidad"; "Mexicano"

}

var json='{"nombre":"G.M-A":,"edad":26, "nacionalidad":"Mexicano"}';
var obj=JSON.parse(json)
console.log(obj.nombre);
console.log(obj.edad);
console.log(obj.nacionalidad);

var json='{"nombre":"G.M-A":,"edad":26, "nacionalidad":"Mexicano","hobies":[ajedres, futbol, videojuegos, peliculas]}'
var obj=JSON.parse(json);
console.log(obj.hobies[0]);
obj.hobies[0]="peliculas";
console.log(obj.hobies[0]);
