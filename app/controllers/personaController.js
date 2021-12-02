let mysql = require('../../bd/mysql')
module.exports = {
    listar: (req,res) => {
        mysql.query(' select * from datos ',function (error, results, fields) {
            if (error) res.json(error)
            else {
                res.json(results)
            }
            
        })
    },
    mostrarId : (req,res) => {
        let id = req.params.id;
        console.log(' buscando ' + id);
        mysql.query(' select * from datos where id =  ' + id ,function (error, results, fields) {
            if (error) res.json(error)
            else {
                res.json(results)
            }
        })
    },

    eliminarId : (req,res) => {
        let id = req.params.id;
        console.log('Eliminando ' + id);
        mysql.query ('delete from datos where id = ' + id, function (error, results, fields) {
            if (error) res.json(error)
            else {
                res.json(results)
            }
        }) 
    },

    agregar: (req,res) => {
        console.log(req.body);
        res.json({mensaje:'agregando una persona'})
    }
    
}