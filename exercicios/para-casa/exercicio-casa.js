const livros = require("./biblioteca.json") 
const usuarios = require("./usuarios.json") 

// Exibe os detalhes de um livro
const exibelivro = (livro) => {
    console.log(`Título: ${livro.nome}`)
    console.log(`Autor: ${livro.autor}`)
}

// Exibe os detalhes de um usuário
const exibeusuarios = (usuario) => {
    console.log(`Nome: ${usuario.nome}`)
    console.log(`Email: ${usuario.email}`)
}

// Busca um livro pelo id
const buscaLivros = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const livroEncontrado = livros.find(livro => livro.id === id)
            if (livroEncontrado) {
                resolve(livroEncontrado);
            } else {
                reject(`Livro não foi encontrado`)
            }
        }, 5000)
    })
}

// Busca um usuário pelo id
const buscausuario = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuarioEncontrado = usuarios.find(usuario => usuario.id === id)
            if (usuarioEncontrado) {
                resolve(usuarioEncontrado);
            } else {
                reject(`Usuário não foi encontrado`)
            }
        }, 5000)
    })
}

console.log("Iniciando a busca de um livro e seus usuários...")

// Busca um livro pelo id e exibe seus detalhes e os detalhes de seus usuários
buscaLivros(123)
    .then((livro) => {
        exibelivro(livro)
        console.log("Buscando os usuários do livro...")
        return Promise.all(livro.usuarios.map(buscausuario))
    })
    .then((usuarios) => {
        console.log("Usuários encontrados:")
        usuarios.forEach(exibeusuarios)
    })
    .catch((erro) => {
        console.log(erro)
    })
    .finally(() => {
        console.log("Busca realizada.")
    })
