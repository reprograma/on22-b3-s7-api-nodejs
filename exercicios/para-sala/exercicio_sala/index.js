const livros = require('./livraria.json')
const usuarios = require('./usuarios.json')


const buscaLivroId = (id) =>{
    const livroEncontrado = livros.find(livro => livro.id === id)
    return livroEncontrado
}

const exibeLivro = (livro) =>{
    console.log(`Titulo: ${livro.titulo}`)
    console.log(`Autor: ${livro.autor}`)
}


const encontraUsuario = (id) => {
    const usuarioEncontrado = usuarios.find(usuario => usuario.id === id)
    return usuarioEncontrado
}

const exibeUsuario = (usuario)=>{
    console.log(`Nome: ${usuario.nome}`)
    console.log(`Email: ${usuario.email}`)
}



const livro = buscaLivroId(1)

exibeLivro(livro)
console.log('\n')
livro.usuarios.forEach(usuarioId => {
    const usuario = encontraUsuario(usuarioId)
    exibeUsuario(usuario)
    console.log('\n')
});