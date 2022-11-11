const {Router}=require('express');
const router=Router();
var express=require('express');
var app=express();
const path=require("path");
app.use(express.json());
app.use(express.urlencoded());
//Raiz
router.get('/', (req, res)=>{
    res.json(
        {
            "Title":"Hola Mundo usando Rutas!"
        }
    );

})
module.exports=router;