var router = require('express').Router();
var personaController = require('../controllers/personaController')
router.get('/', function(req,res){
    // res.json({mensaje:'mostrar todos los vehiculos'})
    personaController.listar (req,res)
})

router.get('/:id', function(req,res){
    // res.json({mensaje:'mostrar todos los vehiculos'})
    personaController.mostrarId (req,res)
})

router.delete('/:id', function(req,res){
    personaController.eliminarId(req,res)
})

router.post('/', function(req,res){
    personaController.agregar (req,res)
})

module.exports = router;