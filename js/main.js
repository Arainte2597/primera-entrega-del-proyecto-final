


    let nombre = prompt("Ingresa tu nombre");
   let apellido = prompt("Ingresa apellido");    
   let edad = prompt("Ingresa tu edad")
   
   while(edad < 18){
     alert("No podes comprar! volve cuando tengas 18!")
   }


  function saludar(){
     alert("Hola " + nombre +" " + apellido + " Bienvenido a la mejor vinoteca de Buenos Aires!");
 }

  saludar()

const vino = [
{ nombre: "el enemigo", precio: 1500},
{ nombre: "salentein", precio: 6000},
{ nombre: "luigi bosca", precio: 1800},
{ nombre: "catena", precio: 2000},
{ nombre: "patridge", precio: 600},
{ nombre: "catena zapata", precio: 2500},

];
let carrito = []


 let seleccion = prompt ("desea comprar algun producto?")
 while(seleccion !="si" && seleccion !="no"){
    alert("por favor ingresa si o no")

 }
 if(seleccion =="si"){
    alert("a continuacion nuestra lista de productos")
    let todosLosProductos = vino.map((vino) => vino.nombre + " " + vino.precio + "$"
    );

 alert(todosLosProductos) 
}
else if (seleccion == "no"){
    alert("gracias por venir , volve pronto.")
}
while(seleccion != "no"){
    let vino = prompt("agrega un producto a tu carrito")
    let precio = 0

    if(vino == "el enemigo" || vino == "salentein" || vino == "luigi bosca" || vino == "catena" || vino == "patridge" || vino == "catena zapata"){
        switch(vino){
        case "el enemigo":
                precio = 1500;
                break;
        case "salentein":
                precio = 6000;
                break;
        case "luigi bosca":
                precio = 1800;
                break;
        case "catena":
                precio = 2000;
                break;
        case "patridge":
                precio = 600;
                break;
        case "catena zapata":
                precio = 2500;
                break;
       }
       let unidades = parseInt(prompt("cuantas unidades quiere llevar"))
       carrito.push({vino, unidades , precio})
       console.log(carrito)

    }
    else{
        alert("no tenemos ese producto")
    }
    seleccion = prompt("desea seguir comprando?")
    while(seleccion == "no"){
        alert("gracias por la compra")
        carrito.forEach((carritoFinal) => {
            console.log(`vino: ${carritoFinal.vino}, unidades:${carritoFinal.unidades},total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
    
}

const total = carrito.reduce ((acc,el) => 
    acc + el.precio * el.unidades,0)

console.log(`el total a pagar por su compra es:${total}`)