var nombre;
var apellido;
var cedula; 
var mesa;
var servicio;
var plato;
var cantidad;
var precio;
var total;
var subtotal;
var p=0;
var iva;
var fecha= new Date();
var imprimir;
var numero_Factura=0;
function registro()
{
    nombre=document.getElementById("nombre").value;
    apellido=document.getElementById("apellido").value;
    cedula=document.getElementById("cedula").value;
    mesa=document.getElementById("mesa").value;
    servicio=document.getElementById("servicio").value;
    plato=document.getElementById("plato").value;
    cantidad=document.getElementById("cantidad").value;
    if(plato=="Arroz con Pollo") 
    {
    precio=10.00;
    subtotal=precio*cantidad;
    iva=((subtotal*0.05).toFixed(2));
    total=subtotal-iva;
    document.write("Fecha: " +'&nbsp;'+fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear()+"</br>"+"</br>");
    document.write("Nombre del cliente: " +'&nbsp;' +nombre+"<br>"+"<br>");
    document.write("Apellido del cliente: " +'&nbsp' +apellido+"<br>"+"<br>");
    document.write("Cedula del cliente: " +'&nbsp' +cedula+"<br>"+"<br>");
    document.write("Mesa: " +'&nbsp' +mesa+"<br>"+"<br>");
    document.write("Plato: " +'&nbsp' +plato+"<br>"+"<br>");
    document.write("<img src='img/Arrozconpollo.png' border =5px width=300 height=300px />"+"<br>"+"<br>");
    document.write("La cantidad de platos: "+'&nbsp;'+cantidad+"<br>"+"<br>");
    document.write("Precio del Plato: "+'&nbsp;'+precio+ " soles " +"<br>"+"<br>");
    document.write("El servicio es: "+'&nbsp;'+servicio+"<br>");
    document.write("-----------------------------------------------------------"+"<br>");
    document.write("SubTotal :"+'&nbsp;'+subtotal+ " soles" +"<br>"+"<br>");
    document.write("Descuento de 5% :"+'&nbsp;'+iva+ " soles "+"<br>"+"<br>");
    document.write("Total a pagar es :"+'&nbsp;'+total+ " soles "+"<br>"+"<br>");;
    document.write('<button onclick="window.print()">Imprimir Factura</button>');
    }
    else if(plato=="Escabeche")
    {
        precio=9.00;
        subtotal=precio*cantidad;
        iva=((subtotal*0.05).toFixed(2));
        total=subtotal-iva;
        document.write("Fecha: " +'&nbsp;'+fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear()+"</br>"+"</br>");
        document.write("Nombre del cliente: " +'&nbsp;' +nombre+"<br>"+"<br>");
        document.write("Apellido del cliente: " +'&nbsp' +apellido+"<br>"+"<br>");
        document.write("Cedula del cliente: " +'&nbsp' +cedula+"<br>"+"<br>");
        document.write("Mesa: " +'&nbsp' +mesa+"<br>"+"<br>");
        document.write("Plato: " +'&nbsp' +plato+"<br>"+"<br>");
        document.write("<img src='img/Escabeche.png' border =5px width=300 height=300px />"+"<br>"+"<br>");
        document.write("La cantidad de platos: "+'&nbsp;'+cantidad+"<br>"+"<br>");
        document.write("Precio del Plato: "+'&nbsp;'+precio+ " soles " +"<br>"+"<br>");
        document.write("El servicio es: "+'&nbsp;'+servicio+"<br>");
        document.write("-----------------------------------------------------------"+"<br>");
        document.write("SubTotal :"+'&nbsp;'+subtotal+ " soles" +"<br>"+"<br>");
        document.write("Descuento de 5% :"+'&nbsp;'+iva+ " soles "+"<br>"+"<br>");
        document.write("Total a pagar es :"+'&nbsp;'+total+ " soles "+"<br>"+"<br>");;
        document.write('<button onclick="window.print()">Imprimir Factura</button>');
    }
    else if(plato=="Tallarin Verde")
    {
        precio=7.00;
        subtotal=precio*cantidad;
        iva=((subtotal*0.05).toFixed(2));
        total=subtotal-iva;
        document.write("Fecha: " +'&nbsp;'+fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear()+"</br>"+"</br>");
        document.write("Nombre del cliente: " +'&nbsp;' +nombre+"<br>"+"<br>");
        document.write("Apellido del cliente: " +'&nbsp' +apellido+"<br>"+"<br>");
        document.write("Cedula del cliente: " +'&nbsp' +cedula+"<br>"+"<br>");
        document.write("Mesa: " +'&nbsp' +mesa+"<br>"+"<br>");
        document.write("Plato: " +'&nbsp' +plato+"<br>"+"<br>");
        document.write("<img src='img/Tallarin.png' border =5px width=300 height=300px />"+"<br>"+"<br>");
        document.write("La cantidad de platos: "+'&nbsp;'+cantidad+"<br>"+"<br>");
        document.write("Precio del Plato: "+'&nbsp;'+precio+ " soles " +"<br>"+"<br>");
        document.write("El servicio es: "+'&nbsp;'+servicio+"<br>");
        document.write("-----------------------------------------------------------"+"<br>");
        document.write("SubTotal :"+'&nbsp;'+subtotal+ " soles" +"<br>"+"<br>");
        document.write("Descuento de 5% :"+'&nbsp;'+iva+ " soles "+"<br>"+"<br>");
        document.write("Total a pagar es :"+'&nbsp;'+total+ " soles "+"<br>"+"<br>");;
        document.write('<button onclick="window.print()">Imprimir Factura</button>');
    }
    else if(plato=="Pescado Frito")
    {
        precio=15.00;
        subtotal=precio*cantidad;
        iva=((subtotal*0.05).toFixed(2));
        total=subtotal-iva;
        document.write("Fecha: " +'&nbsp;'+fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear()+"</br>"+"</br>");
        document.write("Nombre del cliente: " +'&nbsp;' +nombre+"<br>"+"<br>");
        document.write("Apellido del cliente: " +'&nbsp' +apellido+"<br>"+"<br>");
        document.write("Cedula del cliente: " +'&nbsp' +cedula+"<br>"+"<br>");
        document.write("Mesa: " +'&nbsp' +mesa+"<br>"+"<br>");
        document.write("Plato: " +'&nbsp' +plato+"<br>"+"<br>");
        document.write("<img src='img/Pescado.png' border =5px width=300 height=300px />"+"<br>"+"<br>");
        document.write("La cantidad de platos: "+'&nbsp;'+cantidad+"<br>"+"<br>");
        document.write("Precio del Plato: "+'&nbsp;'+precio+ " soles " +"<br>"+"<br>");
        document.write("El servicio es: "+'&nbsp;'+servicio+"<br>");
        document.write("-----------------------------------------------------------"+"<br>");
        document.write("SubTotal :"+'&nbsp;'+subtotal+ " soles" +"<br>"+"<br>");
        document.write("Descuento de 5% :"+'&nbsp;'+iva+ " soles "+"<br>"+"<br>");
        document.write("Total a pagar es :"+'&nbsp;'+total+ " soles "+"<br>"+"<br>");;
        document.write('<button onclick="window.print()">Imprimir Factura</button>');
    }
    else if(plato=="Aji de Gallina")
    {
        precio=8.00;
        subtotal=precio*cantidad;
        iva=((subtotal*0.05).toFixed(2));
        total=subtotal-iva;
        document.write("Fecha: " +'&nbsp;'+fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear()+"</br>"+"</br>");
        document.write("Nombre del cliente: " +'&nbsp;' +nombre+"<br>"+"<br>");
        document.write("Apellido del cliente: " +'&nbsp' +apellido+"<br>"+"<br>");
        document.write("Cedula del cliente: " +'&nbsp' +cedula+"<br>"+"<br>");
        document.write("Mesa: " +'&nbsp' +mesa+"<br>"+"<br>");
        document.write("Plato: " +'&nbsp' +plato+"<br>"+"<br>");
        document.write("<img src='img/Ajídegallina.png' border =5px width=300 height=300px />"+"<br>"+"<br>");
        document.write("La cantidad de platos: "+'&nbsp;'+cantidad+"<br>"+"<br>");
        document.write("Precio del Plato: "+'&nbsp;'+precio+ " soles " +"<br>"+"<br>");
        document.write("El servicio es: "+'&nbsp;'+servicio+"<br>");
        document.write("-----------------------------------------------------------"+"<br>");
        document.write("SubTotal :"+'&nbsp;'+subtotal+ " soles" +"<br>"+"<br>");
        document.write("Descuento de 5% :"+'&nbsp;'+iva+ " soles "+"<br>"+"<br>");
        document.write("Total a pagar es :"+'&nbsp;'+total+ " soles "+"<br>"+"<br>");;
        document.write('<button onclick="window.print()">Imprimir Factura</button>');
    }
    else if(plato=="Lomo Saltado")
    {
        precio=5.00;
        subtotal=precio*cantidad;
        iva=((subtotal*0.05).toFixed(2));
        total=subtotal-iva;
        document.write("Fecha: " +'&nbsp;'+fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear()+"</br>"+"</br>");
        document.write("Nombre del cliente: " +'&nbsp;' +nombre+"<br>"+"<br>");
        document.write("Apellido del cliente: " +'&nbsp' +apellido+"<br>"+"<br>");
        document.write("Cedula del cliente: " +'&nbsp' +cedula+"<br>"+"<br>");
        document.write("Mesa: " +'&nbsp' +mesa+"<br>"+"<br>");
        document.write("Plato: " +'&nbsp' +plato+"<br>"+"<br>");
        document.write("<img src='img/Lomosaltado.png' border =5px width=300 height=300px />"+"<br>"+"<br>");
        document.write("La cantidad de platos: "+'&nbsp;'+cantidad+"<br>"+"<br>");
        document.write("Precio del Plato: "+'&nbsp;'+precio+ " soles " +"<br>"+"<br>");
        document.write("El servicio es: "+'&nbsp;'+servicio+"<br>");
        document.write("-----------------------------------------------------------"+"<br>");
        document.write("SubTotal :"+'&nbsp;'+subtotal+ " soles" +"<br>"+"<br>");
        document.write("Descuento de 5% :"+'&nbsp;'+iva+ " soles "+"<br>"+"<br>");
        document.write("Total a pagar es :"+'&nbsp;'+total+ " soles "+"<br>"+"<br>");;
        document.write('<button onclick="window.print()">Imprimir Factura</button>');
    }
   
}