const {Router}=require('express');
const router=Router();
var express=require('express');
var app=express();
const path=require("path");
app.use(express.json());
app.use(express.urlencoded());
//Raiz
router.get('/', (req, res)=>{
    /*res.json(
        {
            "Title":"Hola Mundo usando Rutas!"
        }
    );*/

    res.sendFile(path.join(__dirname+"/PracFinal.html"));
    //res.send("Datos Enviados");

})

/*router.get('/Datos', function (req, res) {
    res.send("Datos Enviados");
 });*/

router.post('/Datos Ingresados', function(req, res){
    req.send("Nombre Ingresado: "+req.body.nombre);
    console.log("Información enviada");
 })

module.exports=router;