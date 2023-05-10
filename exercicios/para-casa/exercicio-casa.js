const livros = require("./biblioteca.json")
const usuarios = require("./usuarios.json")

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
        }, 3000)
    })
}


// [ ⚠️ PROFAAA!!! tudo bem com a senhora? bem, queria dizer que tentei fazer e não consegui, eu percebi que realmente não absorvi o assunto e fico mt frustrada com isso pois ja tentei rever aula, pesquisar sobre e mesmo assim não entra na minha cabeça :( confesso que pela primeira vez apelei pelo Chatgpt só pra ver como se resolveria e la usaria o filter, includes (que n sei como usa) e o map. Não queria pegar de la pois não entendi e sentiria que falhei comigo mesma fazendo isso, então preferi pegar o conselho da ju (a psicologa) e entregar o que eu tenho, mesmo não sendo o que a senhora pediu e sendo uma "copia" do codigo de cima ☹️ desculpa prof 😭 ]


    const buscaUsuarioDoLivro = (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const usuarioEncontrado = usuarios.find(usuario => usuario.id === id)
            if (usuarioEncontrado) {
                resolve(usuarioEncontrado)
            } else {
                reject('usuario não foi encontrado')
            }
            }, 3000)
        }
        )
    }
   

console.log("Buscador de livros")

const idLivroBuscado = 7468

buscaLivroPorId(idLivroBuscado)
    .then((livro) => {
        console.log(`Título: ${livro.nome}`)
        console.log(`Autor: ${livro.autor}`)
    })
    .catch((erro) => {
        console.log(erro)
    })

console.log(`Solicitada a busca para o livro id #${idLivroBuscado}`)

console.log('Buscador de usario')

const usuarioBuscado = 5

buscaUsuarioDoLivro(usuarioBuscado)
    .then((usuario) => {
        console.log(`nome: ${usuario.nome}`)
        console.log(`email: ${usuario.email}`)
    })
    .catch((erro) => {
        console.log(erro)
    })