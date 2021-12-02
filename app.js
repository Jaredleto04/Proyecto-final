/*const express = require('express')
const app = express()
let datos = [2,4,6,8,10,12] 
app.get('/', function (req, res) {
  //res.send('Hello World')
  //res.send("<html><body><h1>El Titulo</h1><p>Hola Mundo</p></body></html>")
  let Perro = {
      Nombre: "Fido",
      Edad: 3,
      Raza: "Labrador"
  }
  res.send (Perro);
})
app.get('/users', function (req, res) {
    //res.send('Hello World')
    res.send("<html><body><h1>El Titulo</h1><p>Hola Mundo</p></body></html>")  
  })
app.get('/users/:id', function (req, res) {
    res.send('Hello World '+ datos[req.params.id])
})
app.listen(3000)
*/
const request = require('postman-request');
request('https://jsonplaceholder.typicode.com/users/2', function (error, response, body) {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //let algo = JSON.parse(body)
  console.log('body:', algo.username); // Print the HTML for the Google homepage.
  //username, email
});