const livros = require("./biblioteca.json")
const usuarios = require ("./usuarios.json")


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

const idLivroBuscado = 106

buscaLivroPorId(idLivroBuscado)
  .then((livro) => {
    console.log(`Título: ${livro.nome}`)
    console.log(`Autor: ${livro.autor}`)

    console.log("---")
    console.log("Usuários:")

    for (let i in livro) {
      if (i === "usuarios") {
        const idsUsuarios = livro[i]

        for (let u in idsUsuarios) {
          const idUsuario = idsUsuarios[u]
          const usuario = usuarios.find(usuario => usuario.id === idUsuario)

          console.log(`Nome: ${usuario.nome}`)
          console.log(`Email: ${usuario.email}`)
          console.log("---")
        }
      }
    }
  })
  .catch((erro) => {
    console.log(erro)
  })

console.log(`Solicitada a busca para o livro id #${idLivroBuscado}`)