var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mi_base'
});
 
connection.connect();

connection.query('SELECT * from datos', function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].nombre);
  console.log(fields);
});
 
connection.end();