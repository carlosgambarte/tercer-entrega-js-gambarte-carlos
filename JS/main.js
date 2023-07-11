function agregarnombre() {
    let nombreingresado = prompt("ingrese su nombre ")
    let apellidoingresado = prompt("ingrese su apellido")

    mostrardatos(nombreingresado, apellidoingresado);


}

function mostrardatos(nombre, apellido) {

    alert(`Bienvenido a la tienda REMERASISMA ${nombre}   ${apellido}`);


}
agregarnombre();

class prenda {
    constructor(id, prendaI, talleI, precio) {
            this.id = id,
            this.prenda = prendaI,
            this.talle = talleI,
            this.precio = precio

    }

    mostrarInfoprenda() {
        console.log(`la  prenda que eligio es  ${this.prenda} su talle es ${this.talle} y su precio es ${this.precio}`)
    }
}

// objetos: 
const prenda1 = new prenda(1, "remera", "XL", 2000)

const prenda2 = new prenda(2, "pantalon", "46", 4500)

const prenda3 = new prenda(3, "remera", "L", 2800)

const prenda4 = new prenda(4, "buzo", "XXL", 6000)

const prenda5 = new prenda(5, "camiseta", "XL", 2200)

const prenda6 = new prenda(6, "camisa", "XXL", 5000)




// ARRAY DE OBJETOS
const estanteria = []
estanteria.push(prenda1, prenda2, prenda3, prenda4, prenda5, prenda6)



//Funciones:

function agregarprenda() {
    let prendaIngresado = prompt("Ingrese  la prenda")
    let talleIngresado = prompt("Ingrese el talle")
    let precioIngresado = parseInt(prompt("Ingrese el  precio de la prenda"))

    const prendaNuevo = new prenda(estanteria.length + 1, prendaIngresado, talleIngresado, precioIngresado)
    prendaNuevo.mostrarInfoprenda()
    console.log(prendaNuevo)
    //pusheamos al array:
    estanteria.push(prendaNuevo)

}


function verCatalogo(array) {

    console.log(`Nuestro catalogo es: `)

    for (let prenda of array) {
        console.log(prenda.id, prenda.prenda, prenda.talle, prenda.precio)
    }
}

function mostrarCatalogoForEach(array) {
    console.log(`Nuestras prendas disponibles son:`)

    array.forEach(
        prenda => prenda.mostrarInfoprenda()

    )
}


function buscarprenda(array) {
    //opción a usuario que pregunte una prenda
    let prendaBuscado = prompt("Ingrese la prenda que desea buscar")
    let busqueda = array.filter(
        (ropa) => ropa.prenda.toUpperCase() === prendaBuscado.toUpperCase()
    )

    if (busqueda == undefined) {
        console.log(`La prenda  ${prendaBuscado} no está en nuestro catalogo`)
    } else {
        verCatalogo(busqueda)

    }
}

function buscarPortalle(arr) {
    let talleBusqueda = prompt("Ingrese el talle que está buscando")
    let busqueda = arr.filter(
        (remera) => remera.talle.toLowerCase() == talleBusqueda.toLowerCase()
    )
    if (arr.length == 0) {
        console.log(`Para el talle ${talleBusqueda} no hay coincidencias en nuestro catalogo`)
    } else {

        verCatalogo(busqueda)


    }
}


function menu() {

    //MENU do while y switch 
    let salirMenu = false

    do {
        let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
      1 - Agregar prenda
      2 - Borrar prenda
      3 - Consultar catálogo
      4 - Buscar por prenda
      5 - Buscar por talle
      0 - Salir del menu`))
        switch (opcionIngresada) {
            case 1:
                agregarprenda()

                break
            case 2:
                console.log("Borrar prenda")
                break
            case 3:
                verCatalogo(estanteria)
                break
            case 4:
                buscarprenda(estanteria)
                break
            case 5:
                buscarPortalle(estanteria)
                break
            case 0:
                console.log(`Gracias por utilizar nuestra app. Saludos!`)
                salirMenu = true
                break
            default:
                console.log("Opción no válida, ingrese alguna presente en el menu")
                break
        }
    } while (!salirMenu)
}

menu()


