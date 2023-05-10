const biblioteca = require('./biblioteca-casa.json')
const usuarios = require('./usuarios-casa.json')

const buscaLivroPorId = (id) => {
  return new Promise((resolve, reject) => {
    const buscandoLivro = biblioteca.find(livro => livro.id === id)
    resolve(buscandoLivro)
  })
}

buscaLivroPorId(123)
  .then((buscandoLivro) => {
    const buscandoUsuarios = usuarios.filter(usuario => {
      return buscandoLivro.usuarios.includes(usuario.id)
    })

    console.log(`
Titulo: ${buscandoLivro.nome}
Autor: ${buscandoLivro.autor}
---
Usuarios:
    `)
    buscandoUsuarios.forEach((usuario) => {
      console.log(
`Nome: ${usuario.nome}
Email: ${usuario.email}
`)
    })
  })
  .catch((erro) => {
    console.log(erro)
  })

