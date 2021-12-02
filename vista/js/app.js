let btnCargar = document.getElementById("btnAdd");
btnCargar.addEventListener("click",()=>{
    var nombre = document.getElementById("nombre").value;
    var cantidad = document.getElementById("quantity").value;
    var cost = document.getElementById("cost").value;
    let datos = {nombre:nombre, cantidad:cantidad, cost:cost};
    console.log(datos);

    fetch ("http://localhost:1341/api/productos",{
        method:'POST',
        body:JSON.stringify(datos),
        headers:{
            'Content-Type':'application/json'
        }
    }) 
    .then (response => response.json())
    .then(data => {
        let detalles = document.getElementById("detalles");
        detalles.innerHTML=`<p>se inserto ${nombre} con id ${data.insertId}</p>`;
        document.getElementById("nombre").value = ""
        document.getElementById("edad").value = "";
        console.log(data);
    });
})



var btnListar = document.getElementById("btnListar");
btnListar.addEventListener("click", () =>{
    fetch ("http://localhost:1341/api/personas") 
    .then(response => response.json())
    .then(data => {
    });
} )