const addressField = document.querySelector('.address-field');

function lookupAddress() {
    console.log(this.value);
    fetch(`http://127.0.0.1:9191/address-lookup-api/v1/addresses/search?queryText=${this.value}`, {
            headers: { "Content-Type": "application/json; charset=utf-8; Access-Control-Allow-Origin=http://127.0.0.1:9191" },
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => console.log(JSON.stringify(data)))
}

addressField.addEventListener('input', lookupAddress);

