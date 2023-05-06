const superagent = require("superagent")

console.log("Iniciando a busca por Luke")
const get = superagent
    .get("https://swapi.dev/api/1")
    .then((response) => {
        console.log(`Resposta: ${JSON.stringify(response.body)}`)
    })
    .catch((erro) => {
        console.log(`Deu erro: ${erro.message}`)
    })

console.log("Fiz a busca por Luke, esperando por resposta")




