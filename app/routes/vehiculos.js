var router = require('express').Router();
router.get('/', function(req,res){
    res.json({mensaje:'mostrar todos los vehiculos'})
})

router.get('/:id', function(req,res){
    res.json({mensaje:'mostrar un vehiculo'})
})

router.post('/', function(req,res){
    res.json({mensaje:'agregando un vehiculo'})
})

router.delete('/:id', function(req,res){
    res.json({mensaje:'Eliminando un vehiculo'})
})

router.put('/:id', function(req,res){
    res.json({mensaje:'modificar un vehiculo'})
})

//url:puerto/api/vehiculos
//url:puerto/api/'campo a usar'
module.exports=router;