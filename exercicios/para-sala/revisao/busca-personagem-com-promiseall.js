const superagent = require("superagent")

function exibePersonagem(dados) {
    console.log(`
        Resultado:\n
        Personagem: ${dados.nome}\n
        Gênero: ${dados.genero}\n
        Ano de Nascimento: ${dados.anoNascimento}\n
        Veículos: \n
    `)
}

function exibeVeiculo(veiculo) {
    console.log(`
        - Nome: ${veiculo.nome}
        - Modelo: ${veiculo.modelo}
        --- 
    `)
}

async function buscaPersonagem(codigoPersonagem) {
    const response = await superagent.get(`https://swapi.dev/api/people/${codigoPersonagem}`)
    const personagem = response.body
    return {
        "nome": personagem.name,
        "genero": personagem.gender, 
        "anoNascimento": personagem.birth_year,
        "veiculos": personagem.vehicles
    }
}

async function buscaVeiculo(url) {
    const response = await superagent.get(url)
    const veiculo = response.body
    return {
        "nome": veiculo.name,
        "modelo": veiculo.model
    }
}

function buscaEExibeVeiculos(veiculosUrl) {
    let veiculosPromises = []

    veiculosUrl.forEach(veiculoUrl => {
        let veiculoPromise = buscaVeiculo(veiculoUrl)
        veiculosPromises.push(veiculoPromise)
    });

    Promise.all(veiculosPromises)
        .then((veiculos) => { // só entra no then se todas as promises forem resolve()
            veiculos.forEach((veiculo) => {
                exibeVeiculo(veiculo)
            }) 
        })
        .catch((erro) => {//erro da primeira promise que deu erro
            console.log(erro)
        })
}

console.log("Buscador de Personagens - Star Wars")
console.log("Iniciando a busca por personagem")

buscaPersonagem(1)
    .then((personagem) => {
        exibePersonagem(personagem)
        buscaEExibeVeiculos(personagem.veiculos)
    })
    


console.log("Busca realizada, esperando por resposta")





