const livros = require("./biblioteca.json")
const usuarios = require("./usuarios.json")

const buscaLivroPorId = (id) => {
    return new Promise((resolve, reject) => {
        const livroEncontrado = livros.find((livro) => livro.id === id)

        if (livroEncontrado) {
            resolve(livroEncontrado)
        } else {
            reject("Livro não encontrado.")
        }
    })
}

const buscaUsuarioPorId = (id) => {
    return new Promise((resolve, reject) => {
        const usuarioEncontrado = usuarios.find((usuario) => usuario.id === id)

        if (usuarioEncontrado) {
            resolve(usuarioEncontrado)
        } else {
            reject("Usuário não encontrado.")
        }
    })
}

const exibeLivro = (livro) => {
    console.log(`Título: ${livro.nome}`)
    console.log(`Autor: ${livro.autor}`)
}

const exibeUsuario = (usuario) => {
    console.log(`Nome: ${usuario.nome}`)
    console.log(`Email: ${usuario.email}`)
}

const livroId = 125

const livroPromise = buscaLivroPorId(livroId)

livroPromise
    .then((livro) => {
        exibeLivro(livro)
        console.log("---")
        console.log("Usuários:\n")
        return Promise.all(
            livro.usuarios.map((usuarioId) => buscaUsuarioPorId(usuarioId))
        )
    })
    .then((usuarios) => {
        usuarios.forEach((usuario) => {
            exibeUsuario(usuario)
            console.log("\n")
        })
    })
    .catch((error) => {
        console.log("Erro:", error)
    })