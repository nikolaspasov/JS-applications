function solve() {

    let stopName = 'depot';
    let url = 'http://localhost:3030/jsonstore/bus/schedule/';
    let departButton = document.querySelector('#depart')
    let arriveButton = document.querySelector('#arrive')
    let infoSignEl = document.querySelector('.info')

    function depart() {

        fetch(url + stopName)
            .then(res => res.json())
            .then(stop => {
                infoSignEl.textContent = 'Next Stop ' + stop.name;
                departButton.disabled = true;
                arriveButton.disabled = false;
               
            })



    }

    function arrive() {
        fetch(url + stopName)
            .then(res => res.json())
            .then(stop => {
                infoSignEl.textContent = 'Arriving at ' + stop.name;
                departButton.disabled = false;
                arriveButton.disabled = true;
                stopName = stop.next;
            })

    }

    return {
        depart,
        arrive
    };
}

let result = solve();