fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((respuesta) => respuesta.json())
    .then((data) => {
        console.log(data);
        insertStats();

        
        data.events.forEach((element) => {
            
            element.Percent = (element.assistance / element.capacity) * 100;
            element.revenue = (element.assistance * element.price)
        });
        
        console.log(data.events);
        
    })
    .catch((Error) => alert(Error));

function insertStats() {
    let contentStat = document.getElementById("stats");

    let stats = "";

    stats = `  
                <p class="text-start text-bg-dark">EVENTS STATICS</p>
                <table class="table table-hover border-2 border-dark-subtle">
                    <thead>
                        <tr class="table-active">
                            <th>Events with the highest porcentage of attendance</th>
                            <th>Events with the lowest porcentage of attendance</th>
                            <th>Event whit larger capacity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-active">
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                    </tbody>
                </table>

                <p class="text-start text-bg-dark">UPCOMING EVENTS STATISTICS BY CATEGORY</p>
                <table class="table table-hover border-2 border-dark-subtle">
                    <thead>
                        <tr class="table-active">
                            <th>Categories</th>
                            <th>Revenues</th>
                            <th>Percentage of attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-active">
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="table-active">
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="table-active">
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <p class="text-start text-bg-dark">PAST EVENTS STATISTICS BY CATEGORY</p>
                <table class="table table-hover border-2 border-dark-subtle">
                    <thead>
                        <tr class="table-active">
                            <th>Categories</th>
                            <th>Revenues</th>
                            <th>Percentage of attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-active">
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="table-active">
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="table-active">
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="table-active">
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="table-active">
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
        
            `;

    contentStat.innerHTML = stats;
}




