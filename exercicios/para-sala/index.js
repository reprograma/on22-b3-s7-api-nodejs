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

const exibeLivros = (livro) => {
    console.log(`Título: ${livro.nome}`)
    console.log(`Autor(a): ${livro.autor}`)
}

const exibeUsuario = (usuario) => {
    console.log(`Nome: ${usuario.nome}`)
    console.log(`Email: ${usuario.email}`)
}

const livro = buscaLivroPorId(123)
exibeLivros(livro)
console.log("¬¬¬¬")
console.log("Usuários:\n")
livro.usuarios.forEach(usuarioId => {
    const usuario = buscaUsuarioPorId(usuarioId)
    exibeUsuario(usuario)
})