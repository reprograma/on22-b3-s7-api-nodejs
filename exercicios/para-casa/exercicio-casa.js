const livros = require("./biblioteca.json")
const usuarios = require("./usuarios.json")

// Exemplo de criação de promises
const buscaLivroPorId = (id) => {
    return new Promise((resolve, reject) => {
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

const idLivroBuscado = 125

// Exemplo de chamada de promises
buscaLivroPorId(idLivroBuscado)
    .then((livro) => {
        console.log("---")
        console.log(`Título: ${livro.nome}`)
        console.log(`Autor: ${livro.autor}`)
    })
    .catch((erro) => {
        console.log(erro)
    })

console.log(`Solicitada a busca para o livro id #${idLivroBuscado}`)

const buscaUsuarioPorId = (id, usuarios) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuarioEncontrado = usuarios.find(usuario => usuario.id === id)
            if (usuarioEncontrado) {
                resolve(usuarioEncontrado)
            } else  {
                reject(`Usuario não encontrado`)
            }
          },  5000)
        })
    }

console.log("Buscador de Usuários")

const idUsuarioBuscado = 1

// Exemplo de chamada de promises
buscaUsuarioPorId(idUsuarioBuscado, usuarios)
    .then((usuario) => {
        console.log("---")
        console.log("Usuários:\n")
        console.log(`Nome: ${usuario.nome}`)
        console.log(`Email: ${usuario.email}`)
    })
    .catch((erro) => {
        console.log(erro)
    })

console.log(`Solicitada a busca para o usuario #${idUsuarioBuscado}`)
