const livros = require("./biblioteca.json")
const usuarios = require ("./usuarios.json")


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
//NAO CONSEGUI ENTENDER ESSA, O INCLUDES NAO FEZ SENTIDO PRA MIM.
const idUsuariosDoLivro = (usuariosId) => {

    return new Promise((resolve, reject) => {
            const usuariosEncontrados = usuarios.filter((usuario) => {
                return usuariosId.includes(usuario.id)
            })

            if (usuariosEncontrados) {
                resolve(usuariosEncontrados)
            } else {
                reject("Não foi encontrado usuários para esse livro")
            }
        
    })
}


console.log("Buscador de livros")

const idLivro = 124
buscaLivroPorId(idLivro)
    .then((livro) =>{ 
        console.log("---------")
        console.log(`Título: ${livro.nome}`)
        console.log(`Autor: ${livro.autor}`)
        console.log("---------")
        console.log("Usuários anteriores: ")
        return idUsuariosDoLivro(livro.usuarios)
    })
    .then((usuarios) => {
        usuarios.forEach(usuario => {
            console.log("---------")
            console.log(`Nome : ${usuario.nome} `)
            console.log(`Email: ${usuario.email} `)
            console.log("--------")   
        });
        
    })
    .catch((erro) => {
        console.log(erro)
    })

console.log(`O livro de ID: ${idLivro}, possui estes dados:`)



