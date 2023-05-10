const livros = require("./biblioteca.json")
const usuarios = require("./usuarios.json")

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

const idLivroBuscado = 123

buscaLivroPorId(idLivroBuscado)
  .then((livro) => {
    console.log(`Título: ${livro.nome}`)
    console.log(`Autor: ${livro.autor}`)
  })
  .catch((erro) => {
    console.log(erro)
  })

console.log(`Solicitada a busca para o livro id #${idLivroBuscado}`)

const buscaUsuariosPorLivro = (livroId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuarioEncontrados = usuarios.find(usuario => usuario.id === livroId)
      if (usuarioEncontrados) {
        resolve(usuarioEncontrados)
      } else {
        reject(`Usuario não foi encontrado`)
      }
      resolve(usuarioEncontrados);
    }, 5000);
  });
};

buscaUsuariosPorLivro()
  .then((usuarios) => {
    console.log("---");
    console.log("Usuários:");
    usuarios.forEach((usuario) => {
      console.log(`\nNome: ${usuario.nome}`);
      console.log(`Email: ${usuario.email}`);
    });
  })
  .catch((erro) => {
    console.log(erro);
  });

  console.log(`Solicitada a busca para o usuario id #${idLivroBuscado}`)