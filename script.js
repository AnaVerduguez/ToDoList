//----------------------------CREO MIS VARIBALES-----------------------------
//Utilizamos el metodo "document.querySelectorAll" para poder manipular el DOM y acceder al documento y sus elementos
let input = document.querySelector(".input")
let agregar = document.querySelector(".boton-agregar")
let container = document.querySelector(".container")

//----------------------------CREO MI CODIGO--------------------------------
//Creo una clase seguida de un constructor que me permitira trabajar con POO
class Item {
    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea)
    }
    //Metodo que me permitira agregar tareas a la lista
    crearDiv(nuevaTarea) {
        let inputItem = document.createElement("input")
        inputItem.type = "text"
        inputItem.disabled = true
        inputItem.classList.add("item-input")
        inputItem.value = nuevaTarea

        let div = document.createElement("div")
        div.classList.add("item")

        //Boton que me permitira editar elementos de la lista
        let botonEditar = document.createElement("button")
        botonEditar.innerHTML = "<i class='fa-solid fa-lock'></i>"
        botonEditar.classList.add("boton-editar")
        
        botonEditar.addEventListener("click", function(){
            inputItem.disabled =! inputItem.disabled
            if(inputItem.disabled){
                botonEditar.innerHTML='<i class="fas fa-lock"></i>'
            }else{
                botonEditar.innerHTML='<i class="fas fa-lock-open"></i>'
            }

        })

        //Boton que me permitira remover elementos de la lista
        let botonRemover = document.createElement("button")
        botonRemover.innerHTML = "<i class='fa-solid fa-trash'></i>"
        botonRemover.classList.add("boton-remover")
           
        botonRemover.addEventListener("click", function(){
            div.remove()
        })

        //El metodo appendChild me permite agregar elementos a la lista -> agrega un nodo como el ultimo hijo de un nodo
        div.appendChild(inputItem)
        div.appendChild(botonEditar)
        div.appendChild(botonRemover)

        container.appendChild(div)

        
    } 
    
}

//Creo una funcion que me va permitir comprobar si el input de la nueva tarea tiene un valor caso contrario me lanza una alerta
function chequearInput(nuevaTarea){
    if(nuevaTarea){
        new Item(nuevaTarea)
        input.value = ""
    } else{
        alert("Agregar tarea")
    }
}

//Utilizo los eventos click y keyup que permiten interactuar al usuario con la pagina
agregar.addEventListener("click", function(){
    chequearInput(input.value)
})

input.addEventListener("keyup",function(event){
    if (event.key==='Enter'){
        chequearInput(input.value)
    } 
})
