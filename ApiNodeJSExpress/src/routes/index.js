const {Router}=require('express');
const router=Router();
//Raiz
router.get('/', (req, res)=>{
    res.json(
        {
            "Title":"Hola Mundo usando Rutas!"
        }
    );
})
module.exports=router;