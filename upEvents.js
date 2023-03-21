
fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then((respuesta)=> respuesta.json())
.then((data) =>{
    console.log(data);
    let arrayUp = [];

    for (let i = 0; i < data.events.length; i++) {

        if (data.events[i].date > data.currentDate) {
            arrayUp.push(data.events[i]);
        }

    }

    insertDom(arrayUp)
    insertCheckboxes(data.events)
    function filtroCombinado() {
        let arrayFitradoEventos = filtrarEventos(data.events, buscador.value)
        let arrayFiltradoCategorias = filtrarCategorias(arrayFitradoEventos)
        insertDom(arrayFiltradoCategorias)
    }
    buscador.addEventListener('input',filtroCombinado)
    divCheckboxes.addEventListener('change',filtroCombinado)

})
.catch((Error)=> alert(Error))


function insertDom(events) {
    let template = "";
    let text = document.getElementById("container-cards")

    for (let i = 0; i < events.length; i++) {

        template += `  
            <div class=" m-3 d-inline-block">
                <div class="card" style="width: 170px">
                    <img class="card-img-top w-100" src=${events[i].image} alt=${events[i].name}>
                    <div class="card-body">
                        <h4 class="card-text">${events[i].name}</h4>
                        <p class="card-text">${events[i].description}</p>
                        <p class="card-text">${events[i].price}</p>
                        <p class="card-text">${events[i].category}</p>
                        <a href="./details.html?id=${events[i]._id}" class="btn btn-primary">Details</a>
                    </div>
                </div>

            </div>                        
        `;
    }

    text.innerHTML = template;
}



// Insert Checkbox

let divCheckboxes = document.getElementById("options")
let buscador = document.querySelector("input")

buscador.addEventListener('input',filtroCombinado)
divCheckboxes.addEventListener('change',filtroCombinado)



// Llamadas de funciones
insertCheckboxes(data.events)


function insertCheckboxes(array) {
    let checkboxes = ""
    let eventosRepetidos = array.map(element => element.category)
    console.log(eventosRepetidos);
    let eventos = new Set(eventosRepetidos.sort((a, b) => {
        if (a > b) {
            return 1
        }
        if (a < b) {
            return -1
        }
        return 0

    }))

    eventos.forEach(option => {
        checkboxes +=
            `  
                <div class="col-1.5 d-inline-block flex-wrap">
                    <label>
                        ${option}
                        <input class="m-1" name="position1" type="checkbox" name="Category" value="${option}" id="${option}">
                    </label>
                </div>
        
        `;
    });

    divCheckboxes.innerHTML = checkboxes

}

// filtros

function filtrarCategorias(array){
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    let arrayChecks = Array.from(checkboxes) 
    let checksChecked = arrayChecks.filter(check => check.checked)
    if(checksChecked.length == 0){
        return array
    }
    let checkValues = checksChecked.map(check => check.value)
    let arrayFiltrado = array.filter(elemento => checkValues.includes(elemento.category))
    return arrayFiltrado
}

function filtrarEventos(array, nombre){
    let arrayFiltrado = array.filter(element => element.name.toLowerCase().includes(nombre.toLowerCase()))
    return arrayFiltrado
}

function filtroCombinado() {
    let arrayFitradoEventos = filtrarEventos(data.events, buscador.value)
    let arrayFiltradoCategorias = filtrarCategorias(arrayFitradoEventos)
    insertDom(arrayFiltradoCategorias)
}
