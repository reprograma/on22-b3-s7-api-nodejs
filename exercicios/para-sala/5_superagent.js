const superagent = require('superagent')

console.log("Starting")
const get = superagent
    .get("https://swapi.dev/api/people/1")
    .then((response) => {
        console.log(`Answer: ${JSON.stringify*(response.body)}`)
    })
    .catch((error) => {
        console.log(`Error: ${error.message}`)
    })
console.log("Awaiting Answer")