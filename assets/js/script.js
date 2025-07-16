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

//Creacion del arreglo clientes que va a almacenar cada uno de los clienteObjeto
let clientes = []
clientes.push(clienteObjeto1)
clientes.push(clienteObjeto2)
clientes.push(clienteObjeto3)

//Punto 3

for (let c = 0; c < clientes.length; c++) {
    document.write(`Nombre: ${clientes[c].nombre}<br> Apellido: ${clientes[c].apellido}<br> Email: ${clientes[c].email}<br> Teléfono: ${clientes[c].telefono} <br><br>`)
} 

//Punto 4

let activos = 0

for (let a = 0; a < clientes.length; a++) {
    if (clientes[a].activo === true) {
        activos++
    }
}

console.log(activos)
document.write(`Clientes Activos: ${activos}`)

//Punto 5

