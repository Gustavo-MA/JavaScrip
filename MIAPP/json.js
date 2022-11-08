var express=require('express');
var app=express();
const path=require("path");
app.use(express.json());
app.use(express.urlencoded());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+"./html/json.html"));
 });

 app.get('/saludo', function (req, res) {
    res.send("Solicitud de saludo recibido");
 });

app.post('/respuesta', function (req, res) {
    res.send("Nombre Ingresado: "+req.body.nombre);
    console.log("Información enviada");
 });
