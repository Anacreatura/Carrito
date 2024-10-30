const images = [
  "./tiburon.jpg",
  "./zarigueya.jpg",
  "./capibara.jpeg",
  "./gatitos.jpg",
  "./familiaperros.jpeg",
  "./toro.jpg"

]
let productos = [
  {
      image: images[0],
      nombre:"Tiburón",
      precio:20000,
      contador: 0

  },

  {
      image:images[1] ,
      nombre:"Zarigueya",
      precio:30000,
      contador: 0

  },
  {
      image: images[2],
      nombre:"Capibara",
      precio:60000,
      contador: 0

  },
  {
      image: images[3],
      nombre:"Gato",
      precio:50000,
      contador: 0

  },
  {
    image: images[4],
    nombre:"Familia de Perros",
    precio:100000,
    contador: 0

},
{
  image: images[5],
  nombre:"Toro",
  precio:70000,
  contador: 0

}
]

const peluches = document.getElementById("peluches")

for (let index = 0; index < productos.length; index++) {
  const element = productos[index];
  
  peluches.innerHTML += `
  <div class="col  ">
            <div class="card">
              <img src="${element.image}" class="card-img-top" alt="...">
              <div class="card-body d-flex flex-column align-items-center">
                <h5 class="card-title">${element.nombre}</h5>
                <button  class="btn btn-primary ">${element.precio}</button>
              <div class="d-flex">
              <span class="botonIzquierda" > < </span> 
              <h2 class="unidades">${element.contador} </h2>
              <span class="botonDerecha"> > </span>
              </div>

                
          
              </div>
            </div>
          </div>
  `

}
const botonesDerecha = document.getElementsByClassName("botonDerecha")
const botonesIzquierda = document.getElementsByClassName("botonIzquierda")
const unidades = document.getElementsByClassName("unidades")
let arrayCarrito= []
const totalProductos = document.getElementById("totalProductos")
const subtotal = document.getElementById("subtotal")
const ahorro = document.getElementById("ahorro")
const totalPagar = document.getElementById("totalPagar")
let suma = 0
let resta = 0
let ahorroTotal = 0
let total= 0

for (let index = 0; index < botonesDerecha.length; index++) {
  let boton = botonesDerecha[index];
  

  boton.addEventListener("click", () => {
      productos[index].contador+=1
      unidades[index].innerText=productos[index].contador
  
      arrayCarrito.push(productos[index])

      totalProductos.innerText = arrayCarrito.length
      
      suma+= productos[index].precio

      subtotal.innerText = suma

      if(arrayCarrito.length >5){
          ahorroTotal= 5000
          ahorro.innerText= ahorroTotal
      }
      totalPagar.innerText= suma - ahorroTotal

  }
)
}
for (let i = 0; i < arrayCarrito.length; i++)
  {
   
 const element = arrayCarrito[i];
 total += element.precio
 console.log(element);
 
 
}


for (let index = 0; index < botonesIzquierda.length; index++) {
  const boton2 = botonesIzquierda[index];

  boton2.addEventListener("click", () => {
    if (productos[index].contador > 0) {
      productos[index].contador -= 1;
      unidades[index].innerText = productos[index].contador;
      
      suma -= productos[index].precio;
      subtotal.innerText = suma;

      if (productos[index].contador === 0) {
        const productoIndex = arrayCarrito.indexOf(productos[index]);
        if (productoIndex > -1) {
          arrayCarrito.splice(productoIndex, 1);
        }
      }

      totalProductos.innerText = arrayCarrito.length;
      
      if (arrayCarrito.length <= 5) {
        ahorroTotal = 0;
        ahorro.innerText = ahorroTotal;
      }
      totalPagar.innerText = suma - ahorroTotal;
    }
  });
}
