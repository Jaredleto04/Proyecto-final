let mysql = require('../../bd/mysql')
module.exports = {
    listar: (req,res) => {
        mysql.query(' select * from product ',function (error, results, fields) {
            if (error) res.json(error)
            else {
                res.json(results)
            }
            
        })
    },
    mostrarId : (req,res) => {
        let id = req.params.id;
        console.log(' buscando ' + id);
        mysql.query(' select * from product where id =  ' + id ,function (error, results, fields) {
            if (error) res.json(error)
            else {
                res.json(results)
            }
        })
    },

    eliminarId : (req,res) => {
        let id = req.params.id;
        console.log('Eliminando ' + id);
        mysql.query ('delete from product where id = ' + id, function (error, results, fields) {
            if (error) res.json(error)
            else {
                res.json(results)
            }
        }) 
    },

    agregar: (req,res) => {
        console.log(req.body);
        var name= req.body.name;
        var quantity= req.body.quantity;
        var cost= req.body.cost;

        mysql.query ("insert into product(name,quantity,cost) values ('"+name+"',"+quantity+","+cost+")", function (error, results, fields) {
            if (error) res.json(error)
            else {
                res.json(results)
            }
        }) 
    }
    
}