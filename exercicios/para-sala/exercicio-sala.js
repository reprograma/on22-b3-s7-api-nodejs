const livros = require("./biblioteca.json")

// Exemplo de criação de promises
const buscaLivroPorId = (id) => {
    return new Promise((resolve, reject) => {

        /* resolve é igual ao callback do then
        resolve = (livro) => {
            console.log(`Título: ${livro.nome}`)
            console.log(`Autor: ${livro.autor}`)
        }
        */

        /* reject é igual ao callback do catch
        reject = (erro) => {
            console.log(erro)
        }
        */

        setTimeout(() => {
            const livroEncontrado = livros.find(livro => livro.id === id)
            if (livroEncontrado) {
                resolve(livroEncontrado)
            } else {
                reject(`Livro não foi encontrado`)
            }
        }, 5000)
    })
}

console.log("Buscador de livros")

const idLivroBuscado = 123

// Exemplo de chamada de promises
buscaLivroPorId(idLivroBuscado)
    .then((livro) => {
        console.log(`Título: ${livro.nome}`)
        console.log(`Autor: ${livro.autor}`)
    })
    .catch((erro) => {
        console.log(erro)
    })

console.log(`Solicitada a busca para o livro id #${idLivroBuscado}`)
