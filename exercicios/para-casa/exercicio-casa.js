
const usuarios = require("./usuarios.json")

const buscaUsuarioPorId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuarioEncontrado = usuarios.find(livro => livro.id === id)
            if (usuarioEncontrado) {
                resolve(usuarioEncontrado)
            } else {
                reject(`Usuário não foi encontrado`)
            }
        }, 5000)
    })
}

console.log("Buscador de Usuários")

const usuarioEncontrado = 1
buscaUsuarioPorId(usuarioEncontrado)
  .then((usuario) => {
    console.log(`Usuário encontrado: ${usuario.nome}, email: ${usuario.email}`);

    return BuscaLivroPorId(usuario.livros[0]);
  })
  .then((livro) => {
    console.log(`Livro encontrado: ${livro.nome}, autor: ${livro.autor}`);
  })
  .catch((erro) => {
    console.log(erro);
  });

console.log(`Solicitada a busca para usuário id #${usuarioEncontrado}`);


const livros = require("./biblioteca.json")

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

const idLivroBuscado = 225

buscaLivroPorId(idLivroBuscado)
    .then((livro) => {
        console.log(`Título: ${livro.nome}`)
        console.log(`Autor: ${livro.autor}`)
    })
    .catch((erro) => {
        console.log(erro)
    })

console.log(`Solicitada a busca para o livro id #${idLivroBuscado}`)

/*Código não roda de jeito nenhum, exibe a seguinte mensagem de erro :
PS C:\Users\pgabr\OneDrive\Área de Trabalho\reprograma\Aula7\on22-b3-s7-api-nodejs\exercicios\para-casa> npm start        

> para-casa@1.0.0 start
> node exercicio-casa.js

Buscador de Usuários
Solicitada a busca para usuário id #1
Buscador de livros
Solicitada a busca para o livro id #225
Usuário encontrado: Roberta Pardo, email: robertapardo@email.com
ReferenceError: BuscaLivroPorId is not defined
    at C:\Users\pgabr\OneDrive\Área de Trabalho\reprograma\Aula7\on22-b3-s7-api-nodejs\exercicios\para-casa\exercicio-casa.js:24:5
    at runNextTicks (node:internal/process/task_queues:60:5)
    at listOnTimeout (node:internal/timers:538:9)
    at process.processTimers (node:internal/timers:512:7)
Título: O Codigo Limpo
Autor: Marti*/