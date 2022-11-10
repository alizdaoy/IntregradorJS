const form = document.getElementById("formulario");
const ingresoNombre = document.getElementById("nombre");
const ingresoApellido = document.getElementById("apellido");
const ingresoEmail = document.getElementById("mail");
const cantidad = document.getElementById("cantidadTickets");
const categoria = document.getElementById("categoriaSelect");
const borrar = document.getElementById("btnBorrar");
const resumen = document.getElementById("btnResumen");

let valorTicket = 200;

form.addEventListener("submit", (event)=>{

        switch(parseInt(categoria.value)){
            
            case 0: alert("caso 1");
            let calculo = (valorTicket * (cantidad.value));
            console.log(calculo);
            document.getElementById("totalPago").innerHTML=calculo;
            break;
            case 1: alert("caso 2");
            let calculo2 = (valorTicket * (cantidad.value))-(((valorTicket * (cantidad.value))*80)/100);
            console.log(calculo2); 
            document.getElementById("totalPago").innerHTML=calculo2;
            break;
            case 2: alert("caso 3");
            let calculo3 = (valorTicket * (cantidad.value))-(((valorTicket * (cantidad.value))*50)/100);
            console.log(calculo3); 
            document.getElementById("totalPago").innerHTML=calculo3;
            break;
            case 3: alert("caso 4");
            let calculo4 = (valorTicket * (cantidad.value))-(((valorTicket * (cantidad.value))*15)/100);
            console.log(calculo4); 
            document.getElementById("totalPago").innerHTML=calculo4;
            break;
            default: alert("Por favor, elija una categoría.");
            break;
        }
    // console.log(typeof (cantidad.value));
    // console.log(typeof (categoria.value));
    // console.log(cantidad.value);
    // console.log(categoria.value);
    event.preventDefault();
    
})

