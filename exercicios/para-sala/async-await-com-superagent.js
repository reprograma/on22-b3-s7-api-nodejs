const superagent = require("superagent")

const buscaPersonagem = async (codigoPersonagem, codigoPlaneta) => {
    const responsePersonagem = await superagent.get(`https://swapi.dev/api/people/${codigoPersonagem}`)
    const responsePlaneta = await superagent.get(`https://swapi.dev/api/planets/${codigoPlaneta}`)

    return {
        "nomePersonagem": responsePersonagem.body.name,
        "nomePlaneta": responsePlaneta.body.name
    }
} 

console.log("Iniciando a busca por Luke em Tatooine")
buscaPersonagem(1, 1)
    .then(dados => {
        console.log("ENCONTRADO!!!!!")
        console.log(`Personagem ${dados.nomePersonagem}`); 
        console.log(`Planeta ${dados.nomePlaneta}`); 
    });
console.log("Fiz a busca por Luke em Tatooine, esperando por resposta")




