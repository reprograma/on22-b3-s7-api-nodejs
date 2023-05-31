const livros = require("./biblioteca.json")
const usuarios = require("./usuarios.json")

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

const buscaUsuariosDoLivroPorIds = (usuariosIds) => { // [3, 2]

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuariosEncontrados = usuarios.filter((usuario) => {
                return usuariosIds.includes(usuario.id)
            })

            // usuariosEncontrados = [
            //     {
            //         "id": 2,
            //         "nome": "Luke Skywalker",
            //         "email": "lukeskywalker@email.com"
            //     },
            //     {
            //         "id": 3,
            //         "nome": "Han Solo",
            //         "email": "hansolo@email.com"
            //     }
            // ]

            if (usuariosEncontrados) {
                resolve(usuariosEncontrados)
            } else {
                reject("Não foi encontrado usuários para esse livro")
            }
        }, 2500)
    })
}

console.log("Buscador de livros")

const idLivroBuscado = 123

// Exemplo de chamada de promises
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