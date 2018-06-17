const url = '/api'
const request = [
    { 'id': '0', 'method': 'getDoctypes' },
    { 'id': '1', 'method': 'getUrgency' },
    { 'id': '2', 'method': 'getPrices' },
    { 'id': '3', 'method': 'getLevels' },
    { 'id': '4', 'method': 'getLimits' },
    { 'id': '5', 'method': 'getCurrencyRates' },
    { 'id': '6', 'method': 'getCategories' },
    { 'id': '7', 'method': 'isAuthorized' },
    { 'id': '8', 'method': 'getDefaultValues' },
    { 'id': '9', 'method': 'getFirstTimePromoCodes' }
]
const requestParams = {
    credentials: 'same-origin',
    body: JSON.stringify(request),
    headers: { 'content-type': 'application/json' },
    method: 'POST'
}

export default fetch(url, requestParams)
    .then(response => response.json())
    .catch(error => console.log(error))
