function log(a) {
    document.getElementById('console').innerHTML +=`<div>${a}</div>`;
}

function logHeader(a) {
    log(`<h2>${a}</h2>`);
}