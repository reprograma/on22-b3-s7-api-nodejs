const livros = require("./biblioteca.json")
const usuarios = require("./usuarios.json")

const buscaLivroPorId = (id) => {
    return new Promise((resolve, reject) => {
        const livroEncontrado = livros.find(livro => livro.id === id)
            if (livroEncontrado) {
                resolve(livroEncontrado)
            } else {
                reject(`Livro não foi encontrado`)
            }
        })
    }

const buscaUsuariosDoLivroPorIds = (usuariosIds) => { // [3, 2]
    return new Promise((resolve, reject) => {
       const usuariosEncontrados = usuarios.filter((usuario) => {
            return usuariosIds.includes(usuario.id)
            })

            if (usuariosEncontrados) {
                resolve(usuariosEncontrados)
            } else {
                reject("Não foi encontrado usuários para esse livro")
            }
      
    })
}

console.log("Buscador de livros")

const idLivroBuscado = 124

// Chamando as promisses

buscaLivroPorId(idLivroBuscado)
    .then((livro) => {
        console.log(`Título: ${livro.nome}`)
        console.log(`Autor: ${livro.autor}`)
        console.log(`Usuários:`)
        return buscaUsuariosDoLivroPorIds(livro.usuarios)
    })
    .then((usuarios) => {
        usuarios.forEach(usuario => {
            console.log(`Nome: ${usuario.nome}`)
            console.log(`Email: ${usuario.email}`)
            console.log(`---`)
        });
    })
    .catch((erro) => {
        console.log(erro)
    })

console.log(`Solicitada a busca para o livro id #${idLivroBuscado}`)
