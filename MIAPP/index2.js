var express = require('express');
var app=express();
var nom='\n Gustavo Medina Àngel :)'
app.get('/', function(req, res)
{
    res.send('Hola mundo'+nom);
});

app.get('/saludo', function(req, res)
{
    res.send('Solicitud de saludo recibido'+nom);
});

app.listen(8000, function()
{
    console.log('Servidor corriendo en el puerto 8000');
});