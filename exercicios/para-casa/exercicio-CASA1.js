const livros = require("./biblioteca.json")
const usuarios = require("./usuarios.json")

const buscaLivroPorId = (id) => {
    return new Promise((resolve, reject) => {
       
            const livroEncontrado = livros.find(livro => livro.id === id)
            if (livroEncontrado) {
                resolve(livroEncontrado)
            } else {
                reject(`Não foi encontrado`)
            }
        }, 5000)
    }


const buscaUsuariosDoLivroPorIds = (usuariosIds) => {

    return new Promise((resolve, reject) => {
        
            const usuariosEncontrados = usuarios.filter((usuario) => {
                return usuariosIds.includes(usuario.id)
            })

            if (usuariosEncontrados) {
                resolve(usuariosEncontrados)
            } else {
                reject("Não foi encontrado usuário")
            }
        }, 2500)
    }


console.log("Buscador de livros")

const idLivroBuscado = 121
