

for (let i = 0; i < data.events.length; i++){
    console.log(data.events[i])
}

function insertDom(events) {
    let template = "";
    let text = document.getElementById("container-cards")

    for (let i = 0; i < events.length; i++){

        template += `  
            <div class=" m-3 d-inline-block">

                <div class="card" style="width: 170px">
                    <img class="card-img-top w-100" src=${events[i].image} alt=${events[i].name}>
                    <div class="card-body">
                        <h4 class="card-text">${events[i].name}</h4>
                        <p class="card-text">${events[i].description}</p>
                        <p class="card-text">${events[i].price}</p>
                        <a href="#" class="btn btn-primary">More Info</a>
                    </div>
                </div>
            </div>                        
        `;
    }

    text.innerHTML = template;
}

insertDom(data.events);