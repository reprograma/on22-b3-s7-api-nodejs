const livros = require("../para-sala/biblioteca.json")
const usuarios = require("../para-sala/usuarios.json")

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
        }, 1000)
    })
}

const buscaUsuarioPorId = (id) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuarioEncontrado = usuarios.find(usuario => usuario.id === id)
            if (usuarioEncontrado){
                resolve(usuarioEncontrado)
            }else{
                reject(`Usuário não encontrado`)
            }

        }, 5000)
    })
}



const idLivroBuscado = 4

// Exemplo de chamada de promises
buscaLivroPorId(idLivroBuscado)
    .then((livro) => {
        console.log(livro)
        console.log(`Título: ${livro.nome}`)
        console.log(`Autor: ${livro.autor}`)

    })
    .catch((erro) => {
        console.log(erro)
    })

    console.log("---")


console.log("Usuários:\n")
//const idUsuarioBuscado = 1



function buscaEExibeUsuarios(idUsuarioBuscado) {
    let usuariosPromises = []

    idUsuarioBuscado.forEach(idUsuarioBuscado => {
        let usuarioPromise = buscaUsuarioPorId(idUsuarioBuscado)
        usuariosPromises.push(usuarioPromise)

    });
    Promise.all(usuariosPromises)
    .then((usuarios) => {
        usuarios.forEach((usuario) => {
            buscaUsuarioPorId(usuario)
        })
    })
    .catch((erro) => {
        console.log(erro)
    })
}
console.log(`Solicitada a busca para o livro id #${idLivroBuscado}`)
console.log("Iniciando a busca dos usuários")

buscaLivroPorId(1)
.then((livro) => {
buscaLivroPorId(livro.id)
buscaEExibeUsuarios(livro.usuarios)
}
)
