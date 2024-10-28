const images = [
  "./tiburon.jpg",
  "./zarigueya.jpg",
  "./capibara.jpeg",
  "./gatitos.jpg",

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

  }
]

const peluches = document.getElementById("peluches")

for (let index = 0; index < productos.length; index++) {
  const element = productos[index];
  
  peluches.innerHTML += `
  <div class="col">
            <div class="card">
              <img src="${element.image}" class="card-img-top" alt="...">
              <div class="card-body">
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

for (let index = 0; index < botonesIzquierda.length; index++) {
  const boton2 = botonesIzquierda[index];

  boton2.addEventListener("click", () => {
      productos[index].contador-=1
      unidades[index].innerText=productos[index].contador
      if(productos[index].contador < 0){
          unidades[index].innerText= 0
      }

      arrayCarrito.push(productos[index])

      totalProductos.innerText = arrayCarrito.length

      resta-= productos[index].precio

      subtotal.innerText= resta

  } )
  
}

