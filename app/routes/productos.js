var router = require('express').Router();
var productoController = require('../controllers/productoController')
router.get('/', function(req,res){
    // res.json({mensaje:'mostrar todos los vehiculos'})
    productoController.listar (req,res)
})

router.get('/:id', function(req,res){
    // res.json({mensaje:'mostrar todos los vehiculos'})
    productoController.mostrarId (req,res)
})

router.delete('/:id', function(req,res){
    productoController.eliminarId(req,res)
})

router.post('/', function(req,res){
    productoController.agregar (req,res)
})

module.exports = router;