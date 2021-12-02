var router = require('express').Router();
var productos = require('./productos')
router.use('/productos',productos)

var personas = require('./personas')
router.use('/personas',personas)
router.get('/',function(req,res){
        res.json({mensaje:'bienvenido a mi api'})
})
module.exports=router;