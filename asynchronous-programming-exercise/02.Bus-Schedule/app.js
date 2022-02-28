function solve() {

    let departButton = document.getElementById('depart');
    let arriveButton = document.getElementById('aarive');

    function depart() {
        console.log('Depart TODO...');
    }

    function arrive() {
        console.log('Arrive TODO...');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();