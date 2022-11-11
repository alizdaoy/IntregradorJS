const form = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const ingresoNombre = document.getElementById("nombre");
const ingresoApellido = document.getElementById("apellido");
const ingresoEmail = document.getElementById("mail");
const cantidad = document.getElementById("cantidadTickets");
const categoria = document.getElementById("categoriaSelect");
const borrar = document.getElementById("btnBorrar");
const resumen = document.getElementById("btnResumen");
let valorTicket = 200;


// codigo de calculo de total
form.addEventListener("submit", (event)=>{

    switch(parseInt(categoria.value)){
            
            case 0:
                let calculo = (valorTicket * (cantidad.value));
                document.getElementById("totalPago").innerHTML=calculo;
            break;
            case 1:
                let calculo2 = (valorTicket * (cantidad.value))-(((valorTicket * (cantidad.value))*80)/100);
                document.getElementById("totalPago").innerHTML=calculo2;
            break;
            case 2:
                let calculo3 = (valorTicket * (cantidad.value))-(((valorTicket * (cantidad.value))*50)/100);
                document.getElementById("totalPago").innerHTML=calculo3;
            break;
            case 3:
                let calculo4 = (valorTicket * (cantidad.value))-(((valorTicket * (cantidad.value))*15)/100);
                document.getElementById("totalPago").innerHTML=calculo4;
            break;
            default:
                alert("Por favor, elija una categoría.");
            break;
        }
    event.preventDefault();
    
})

// boton reset 
btnBorrar.addEventListener("click", (borrar)=>{
        nombre.value="";
        apellido.value="";
        mail.value="";
        cantidad.value="";
        categoria.value="";
        borrar.preventDefault();
})