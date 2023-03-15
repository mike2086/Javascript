// insert Cards 

for (let i = 0; i < data.events.length; i++) {
    console.log(data.events[i])
}

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
                        <a href="#" class="btn btn-primary">More Info</a>
                    </div>
                </div>
            </div>                        
        `;
    }

    text.innerHTML = template;
}

let arrayPast = [];


for (let i = 0; i < data.events.length; i++) {

    if (data.events[i].date < data.currentDate) {

        arrayPast.push(data.events[i]);
    }

}

insertDom(arrayPast)

// Insert Checkbox

let divCheckboxes = document.getElementById("options")
let buscador = document.getElementById("search")

// buscador.addEventListener('divCheckbox',filtroCombinado)
// divCheckboxes.addEventListener('change',filtroCombinado)



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

// function filtrarEventos(array, nombre){
//     let arrayFiltrado = array.filter(element => element.name.toLowerCase().includes(nombre.toLowerCase()))
//     return arrayFiltrado
// }

function filtrarCategorias(array) {
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    let arrayChecks = Array.from(checkboxes)
    let checksChecked = arrayChecks.filter(check => check.checked)
    if (checksChecked.length == 0) {
        return array
    }
    let checkValues = checksChecked.map(check => check.value)
    let arrayFiltrado = array.filter(elemento => checkValues.includes(elemento.category))
    return arrayFiltrado
}

divCheckboxes.addEventListener('change', () => {
    let arrayFiltrado = filtrarCategorias(data.events)
    insertDom(arrayFiltrado)
})