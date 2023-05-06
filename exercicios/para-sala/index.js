const Livros = require("./biblioteca.json")
const usuarios = require("./usuarios.json")

const buscaLivroPorId = (id) => {

    const livroEncontrado = Livros.find(livro => livro.id === id)

    return livroEncontrado
}

const buscarUsuarioID = (id) => {
    const usuarioEncontrado = usuarios.find(usuario => usuario.id === id)

    return usuarioEncontrado
}

const exibeLivro = (livro) =>{
    console.log(`Título: ${livro.nome}`)
    console.log(`Autor: ${livro.autor}`)
}

const exibeUsuario = (usuario) => {
    console.log(`Nome: ${usuario.nome}`)
    console.log(`Email: ${usuario.email}`)

}

const livro = buscaLivroPorId(104)
exibeLivro(livro)
console.log('------')
console.log("Usuarios\n")
livro.usuarios.forEach(usuarioId => {
    const usuario = buscarUsuarioID (usuarioId)
    exibeUsuario(usuario)
    console.log("\n")
    
});
const livros = require("./biblioteca.json")
const usuarios = require("./usuarios.json")

const buscaLivroPorId = (id) => {
    const livroEncontrado = livros.find(livro => livro.id === id)

    return livroEncontrado
}

const buscaUsuarioPorId = (id) => {
    const usuarioEncontrado = usuarios.find(usuario => usuario.id === id)

    return usuarioEncontrado
}

const exibeLivro = (livro) => {
    console.log(`Título: ${livro.nome}`)
    console.log(`Autor: ${livro.autor}`)
}

const exibeUsuario = (usuario) => {
    console.log(`Nome: ${usuario.nome}`)
    console.log(`Email: ${usuario.email}`)
}

const livro = buscaLivroPorId(125)
exibeLivro(livro)
console.log("---")
console.log("Usuários:\n")
livro.usuarios.forEach(usuarioId => {
    const usuario = buscaUsuarioPorId(usuarioId)
    exibeUsuario(usuario)
    console.log("\n")
});


