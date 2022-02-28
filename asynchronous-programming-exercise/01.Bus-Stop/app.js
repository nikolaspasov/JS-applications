function getInfo() {

    let stopId = document.getElementById('stopId').value;
    let busesUl = document.getElementById('buses');


    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('stopName').textContent = data.name;
            busesUl.innerHTML = ' ';
            let buses = Object.keys(data.buses)
            let minutesLeft = Object.values(data.buses);


            for (let index = 0; index < buses.length; index++) {

                let busLi = document.createElement('li');
                busLi.textContent =
                    `Bus ${buses[index]} arrives in ${minutesLeft[index]} minutes`;
                busesUl.appendChild(busLi);
            }
        })
        .catch(err => {
            document.getElementById('stopName').textContent = 'Error',
                busesUl.innerHTML = ' '
        }
        )


};