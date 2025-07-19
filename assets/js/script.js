let listaInactivos = document.getElementById("lista-inactivos");
let listaActivos = document.getElementById("lista-activos")
let lista = document.getElementById("lista-clientes");
let listaClientesUnicos = document.getElementById("lista-clientes-unicos");
let cantidadActivos = document.getElementById("clientes-activos");

let clientesNuevos = []

// Creacion del objeto clienteObjeto
let clienteObjeto1 = {
    id: 0,
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    activo: true
}

clienteObjeto1.id = 1
clienteObjeto1.nombre = "Alberto"
clienteObjeto1.apellido = "Poblete"
clienteObjeto1.email = "alberto.poblete@gmail.com"
clienteObjeto1.telefono = "1122334455"
clienteObjeto1.activo = true

let clienteObjeto2 = {
    id: 0,
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    activo: true
}

clienteObjeto2.id = 2
clienteObjeto2.nombre = "Francisco" 
clienteObjeto2.apellido = "Godoy"
clienteObjeto2.email = "francisco.godoy@gmail.com"
clienteObjeto2.telefono = "2233445566"
clienteObjeto2.activo = true

let clienteObjeto3 = {
    id: 0,
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    activo: true
}

clienteObjeto3.id = 3
clienteObjeto3.nombre = "Daniel"
clienteObjeto3.apellido = "Pallares"
clienteObjeto3.email = "daniel.pallares@gmail.com"
clienteObjeto3.telefono = "3344556677"
clienteObjeto3.activo = false

let clienteObjeto4 = {
    id: 0,
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    activo: true
}

clienteObjeto4.id = 4
clienteObjeto4.nombre = "Macarena"
clienteObjeto4.apellido = "Espinoza"
clienteObjeto4.email = "maca.espinoza@gmail.com"
clienteObjeto4.telefono = "8889990001"
clienteObjeto4.activo = true

//Creacion del arreglo clientes que va a almacenar cada uno de los clienteObjeto
let clientes = []
clientes.push(clienteObjeto1)
clientes.push(clienteObjeto2)
clientes.push(clienteObjeto3)
clientes.push(clienteObjeto4)


//Punto 3: Acceder a la información de un cliente:
lista.innerHTML = "";
for (let c = 0; c < clientes.length; c++) {
    lista.innerHTML += "Id Cliente: " + clientes[c].id + " <br>Nombre: " + clientes[c].nombre + "<br> Apellido: " + clientes[c].apellido + "<br> Email: " + clientes[c].email + "<br> Teléfono: " + clientes[c].telefono + " <br><br>";
}

cantidadClientesActivos()


// for (let c = 0; c < clientes.length; c++) {
//     document.write(`Id Cliente: ${clientes[c].id} <br>Nombre: ${clientes[c].nombre}<br> Apellido: ${clientes[c].apellido}<br> Email: ${clientes[c].email}<br> Teléfono: ${clientes[c].telefono} <br><br>`)
// } 

//Punto 4: Contar la cantidad de clientes activos:
function cantidadClientesActivos() {
    let activos = 0
    
    for (let a = 0; a < clientes.length; a++) {
        if (clientes[a].activo === true) {
            activos++
        }
    }
    
    console.log(activos)
    cantidadActivos.innerHTML = `Clientes Activos: ${activos}`
}

//Punto 5: Agregar un nuevo cliente:

const botonNuevoCliente = document.getElementById("nuevo-cliente")

botonNuevoCliente.addEventListener("click", function(){
    let clienteObjeto4 = {
        id: 0,
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        activo: true
    }
    clienteObjeto4.id = ((clientes.length)+1)
    clienteObjeto4.nombre = prompt("Ingrese el nombre del cliente: ")
    clienteObjeto4.apellido = prompt("Ingrese el apellido del cliente: ")
    clienteObjeto4.email = prompt("Ingrese email del cliente: ")
    clienteObjeto4.telefono = prompt("Ingrese telefono del cliente: ")
    clienteObjeto4.activo = true

    clientes.push(clienteObjeto4)
    clientesNuevos.push(clienteObjeto4)

    lista.innerHTML = "";
    for (let c = 0; c < clientes.length; c++) {
        lista.innerHTML += "Id Cliente: " + clientes[c].id + " <br>Nombre: " + clientes[c].nombre + "<br> Apellido: " + clientes[c].apellido + "<br> Email: " + clientes[c].email + "<br> Teléfono: " + clientes[c].telefono + " <br><br>";
    }
    console.log(clientes)
    console.log(clientesNuevos)

    cantidadClientesActivos()
})

lista.innerHTML = "";
for (let c = 0; c < clientes.length; c++) {
    lista.innerHTML += "Id Cliente: " + clientes[c].id + " <br>Nombre: " + clientes[c].nombre + "<br> Apellido: " + clientes[c].apellido + "<br> Email: " + clientes[c].email + "<br> Teléfono: " + clientes[c].telefono + " <br><br>";
}

// Actualizar lista de inactivos
listaInactivos.innerHTML = "";
for (let a = 0; a < clientes.length; a++) {
    if (clientes[a].activo === false) {
        listaInactivos.innerHTML += "Id Cliente: " + clientes[a].id + " <br>Nombre: " + clientes[a].nombre + "<br> Apellido: " + clientes[a].apellido + "<br> Email: " + clientes[a].email + "<br> Teléfono: " + clientes[a].telefono + " <br><br>";
    }
}

//Punto 6: Eliminar un nuevo cliente:

const botonEliminarCliente = document.getElementById("eliminar-cliente")

botonEliminarCliente.addEventListener("click", function(){
    let idbuscar = (+prompt("Ingrese el id del cliente a eliminar: "));
    let indice = -1; //-1 indica que no quedan clientes o no se encontró

    // Buscar el índice del cliente con ese id
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].id === idbuscar) {
            indice = i;
        }
    }

    // Si se encontró, eliminarlo
    if (indice !== -1) {
        clientes.splice(indice, 1);
    }

    lista.innerHTML = "";
    for (let c = 0; c < clientes.length; c++) {
        lista.innerHTML += "Id Cliente: " + clientes[c].id + " <br>Nombre: " + clientes[c].nombre + "<br> Apellido: " + clientes[c].apellido + "<br> Email: " + clientes[c].email + "<br> Teléfono: " + clientes[c].telefono + " <br><br>";
    }
    console.log(clientes)

    cantidadClientesActivos()
})

lista.innerHTML = "";
for (let c = 0; c < clientes.length; c++) {
    lista.innerHTML += "Id Cliente: " + clientes[c].id + " <br>Nombre: " + clientes[c].nombre + "<br> Apellido: " + clientes[c].apellido + "<br> Email: " + clientes[c].email + "<br> Teléfono: " + clientes[c].telefono + " <br><br>";
}

// Actualizar lista de inactivos
listaInactivos.innerHTML = "";
for (let a = 0; a < clientes.length; a++) {
    if (clientes[a].activo === false) {
        listaInactivos.innerHTML += "Id Cliente: " + clientes[a].id + " <br>Nombre: " + clientes[a].nombre + "<br> Apellido: " + clientes[a].apellido + "<br> Email: " + clientes[a].email + "<br> Teléfono: " + clientes[a].telefono + " <br><br>";
    }
}

//Punto 7: Modificar un cliente:

const botonModificarCliente = document.getElementById("modificar-cliente")

botonModificarCliente.addEventListener("click", function(){
    let idbuscar = (+prompt("Ingrese el id del cliente a modificar: "));
    let indice = -1; //-1 indica que no quedan clientes o no se encontró

    // Buscar el índice del cliente con ese id
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].id === idbuscar) {
            indice = i;
        }
    }
    // Si se encontró, editar los atributos del cliente (El estado del cliente solo se ve en consola)
    if (indice !== -1) {
        clientes[indice].id = (+prompt("Ingrese el nuevo id del cliente: ", clientes[indice].id));
        clientes[indice].nombre = prompt("Ingrese el nuevo nombre del cliente: ", clientes[indice].nombre);
        clientes[indice].apellido = prompt("Ingrese el nuevo apellido del cliente: ", clientes[indice].apellido);
        clientes[indice].email = prompt("Ingrese el nuevo email del cliente: ", clientes[indice].email);
        clientes[indice].telefono = prompt("Ingrese el nuevo telefono del cliente: ", clientes[indice].telefono);
        clientes[indice].activo = confirm("¿El cliente está activo? (Aceptar para sí, Cancelar para no)");
    }

    actualizarListas()
})

// Actualizar lista de inactivos

listaInactivos.innerHTML = "";
for (let a = 0; a < clientes.length; a++) {
    if (clientes[a].activo === false) {
        listaInactivos.innerHTML += "Id Cliente: " + clientes[a].id + " <br>Nombre: " + clientes[a].nombre + "<br> Apellido: " + clientes[a].apellido + "<br> Email: " + clientes[a].email + "<br> Teléfono: " + clientes[a].telefono + " <br><br>";
    }
}

//Punto 8: Consultar clientes inactivos:

clientesInactivos = clientes.filter(cliente => !cliente.activo)
console.log(clientesInactivos)

listaInactivos.innerHTML = "";
for (let a = 0; a < clientes.length; a++) {
    if (clientes[a].activo === false) {
        listaInactivos.innerHTML += "Id Cliente: " + clientes[a].id + " <br>Nombre: " + clientes[a].nombre + "<br> Apellido: " + clientes[a].apellido + "<br> Email: " + clientes[a].email + "<br> Teléfono: " + clientes[a].telefono + " <br><br>";
    }
    
}


//Punto 9: Álgebra con arreglos y objetos:
// Crear una función que reciba dos arreglos de clientes (por ejemplo, uno con clientes nuevos y otro con 
// clientes existentes) y realice una unión de ambos, agregando los nuevos clientes al arreglo original.
// Crear otra función para filtrar clientes duplicados (con el mismo id), mostrando solo los clientes únicos.







function actualizarListas() {
    listaActivos.innerHTML = "";
    lista.innerHTML = "";
    listaInactivos.innerHTML = "";
    for (let c = 0; c < clientes.length; c++) {
        lista.innerHTML += "Id Cliente: " + clientes[c].id + " <br>Nombre: " + clientes[c].nombre + "<br> Apellido: " + clientes[c].apellido + "<br> Email: " + clientes[c].email + "<br> Teléfono: " + clientes[c].telefono + " <br><br>";
        //11.- Se crea una condición dentro de ciclo for, que determine si un cliente es activo o inactivo, y según estado muestra información de cliente por consola
        if (!clientes[c].activo) {
            listaInactivos.innerHTML += "Id Cliente: " + clientes[c].id + " <br>Nombre: " + clientes[c].nombre + "<br> Apellido: " + clientes[c].apellido + "<br> Email: " + clientes[c].email + "<br> Teléfono: " + clientes[c].telefono + " <br><br>";
            console.log(`Cliente ${clientes[c].nombre} se encuentra Inactivo`)
        }else if (clientes[c].activo){
            listaActivos.innerHTML += "Id Cliente: " + clientes[c].id + " <br>Nombre: " + clientes[c].nombre + "<br> Apellido: " + clientes[c].apellido + "<br> Email: " + clientes[c].email + "<br> Teléfono: " + clientes[c].telefono + " <br><br>";
            console.log(`Cliente ${clientes[c].nombre} se encuentra Activo`)
        }
    }

    cantidadClientesActivos()
}

// Crear arreglo de clientes activos
const clientesActivos = clientes.filter(cliente => cliente.activo === true);

// Mostrar clientes activos en el DOM (por ejemplo, en un div con id="lista-activos")
listaActivos.innerHTML = "";
for (let i = 0; i < clientesActivos.length; i++) {
    listaActivos.innerHTML += "Id Cliente: " + clientesActivos[i].id + 
        " <br>Nombre: " + clientesActivos[i].nombre + 
        "<br> Apellido: " + clientesActivos[i].apellido + 
        "<br> Email: " + clientesActivos[i].email + 
        "<br> Teléfono: " + clientesActivos[i].telefono + " <br><br>";
}

const botonClientesUnicos = document.getElementById("clientes-unicos")

// botonClientesUnicos.addEventListener("click", function(){
//     let clientesUnicos = []
//     let duplicado = false;

//     if (clientes.length >= 2) {
//         for (let x = 0; x < clientes.length; x++) {
//             duplicado = false;
//             for (let y = x + 1; y < clientes.length; y++) {
//                 if (clientes[x].id === clientes[y].id) {
//                     duplicado = true
//                     break
//                 }
//             }
//             if (!duplicado) {
//                 clientesUnicos.push(clientes[x])
//             }
//         }

//         listaClientesUnicos.innerHTML = ""
//         for (let a = 0; a < clientesUnicos.length; a++) {
//             listaClientesUnicos.innerHTML += "Id Cliente: " + clientesUnicos[a].id + " <br>Nombre: " + clientesUnicos[a].nombre + "<br> Apellido: " + clientesUnicos[a].apellido + "<br> Email: " + clientesUnicos[a].email + "<br> Teléfono: " + clientesUnicos[a].telefono + " <br><br>";
//         }
//     } else {
//         alert("Lista solo tiene un elemento, no se puede hacer comparacion")
//     }
// })

botonClientesUnicos.addEventListener("click", function() {
    // Contar ocurrencias de cada ID
    const idCount = {};
    for (let i = 0; i < clientes.length; i++) {
        const id = clientes[i].id;
        idCount[id] = (idCount[id] || 0) + 1;
    }

    // Filtrar solo los clientes cuyo ID aparece una sola vez
    const clientesUnicos = clientes.filter(cliente => idCount[cliente.id] === 1);

    listaClientesUnicos.innerHTML = "";
    if (clientesUnicos.length > 0) {
        for (let a = 0; a < clientesUnicos.length; a++) {
            listaClientesUnicos.innerHTML += "Id Cliente: " + clientesUnicos[a].id +
                " <br>Nombre: " + clientesUnicos[a].nombre +
                "<br> Apellido: " + clientesUnicos[a].apellido +
                "<br> Email: " + clientesUnicos[a].email +
                "<br> Teléfono: " + clientesUnicos[a].telefono + " <br><br>";
        }
    } else {
        listaClientesUnicos.innerHTML = "No hay clientes únicos.";
    }
});




// let listaInactivos = document.getElementById("lista-inactivos");
// listaInactivos.innerHTML = "";
// for (let c = 0; c < clientes.length; c++) {
//     listaInactivos.innerHTML += "Id Cliente: " + clientes[c].id + " <br>Nombre: " + clientes[c].nombre + "<br> Apellido: " + clientes[c].apellido + "<br> Email: " + clientes[c].email + "<br> Teléfono: " + clientes[c].telefono + " <br><br>";
// }






// botonEliminarCliente.addEventListener("click", function(){
//     idbuscar = (+prompt("Ingrese el id del cliente a eliminar: "))

//     for(let i = 0; i < clientes.length; i++) {
//         if (clientes[i].id === idbuscar) {
//             clientes.splice(idbuscar, 1)
//         }}

    

//     lista.innerHTML = "";
//     for (let c = 0; c < clientes.length; c++) {
//         lista.innerHTML += "Id Cliente: " + clientes[c].id + " <br>Nombre: " + clientes[c].nombre + "<br> Apellido: " + clientes[c].apellido + "<br> Email: " + clientes[c].email + "<br> Teléfono: " + clientes[c].telefono + " <br><br>";
//     }
//     console.log(clientes)
// })

// botonNuevoCliente.addEventListener("click", function(){
//     let clienteObjeto4 = {
//     id: 0,
//     nombre: "",
//     apellido: "",
//     email: "",
//     telefono: "",
//     activo: true
// }
//     clienteObjeto4.id = ((clientes.length)+1)
//     clienteObjeto4.nombre = prompt("Ingrese el nombre del cliente: ")
//     clienteObjeto4.apellido = prompt("Ingrese el apellido del cliente: ")
//     clienteObjeto4.email = prompt("Ingrese email del cliente: ")
//     clienteObjeto4.telefono = prompt("Ingrese telefono del cliente: ")
//     clienteObjeto4.activo = true

//     clientes.push(clienteObjeto4)

//     for (let c = 0; c < clientes.length; c++) {
//     document.write(`Id Cliente: ${clientes[c].id} <br>Nombre: ${clientes[c].nombre}<br> Apellido: ${clientes[c].apellido}<br> Email: ${clientes[c].email}<br> Teléfono: ${clientes[c].telefono} <br><br>`)
// }  
//     console.log(clientes)
// })

// //Punto 5: Eliminar un cliente:

// const botonEliminarCliente = document.getElementById("elimina-cliente")

// botonEliminarCliente.addEventListener("click", function(){
//     id = (+prompt("Ingrese el id del cliente a eliminar: ")-1)
//     clientes.splice(id, 1)  

//     for (let c = 0; c < clientes.length; c++) {
//     document.write(`Id Cliente: ${clientes[c].id} <br>Nombre: ${clientes[c].nombre}<br> Apellido: ${clientes[c].apellido}<br> Email: ${clientes[c].email}<br> Teléfono: ${clientes[c].telefono} <br><br>`)
//     }
//     console.log(clientes)
// })







// $("#nuevo-cliente").on("click", function() {
//     let nombre = prompt("Ingrese nombre del cliente: ")
// })
