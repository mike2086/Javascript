fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((respuesta) => respuesta.json())
    .then((data) => {

        const events = data.events.find(event => event._id == id)

        const container = document.querySelector("#containerCard")

        container.innerHTML = `
        <div class="d-inline card col-6">
            <div class="justify-content-center card-body w-80 p-2 m-2">
                <img class="card-img-top w-80 rounded" src="${events.image}" alt="${events.name}">
                <h4 class="card-title text-center">${events.name}</h4>
                <p class="card-text text-center">${events.date}</p>
                <p class="card-text text-center">${events.description}</p>
                <p class="card-text text-center">${events.category}</p>
                <p class="card-text text-center">${events.place}</p>
                <p class="card-text text-center">${events.capacity}</p>
                <p class="card-text text-center">${events.assistance}</p>
                <p class="card-text text-center">${events.price}</p>
                <a href="./index.html" class="btn btn-primary"> Back </a>
            </div>
        </div>`

    })

    .catch((Error) => alert(Error))

const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")



