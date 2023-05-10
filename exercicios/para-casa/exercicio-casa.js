const livros = require("./biblioteca.json");
const usuarios = require("./usuarios.json");

const buscaLivroPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const livroEncontrado = livros.find(livro => livro.id === id)
      if (livroEncontrado) {
        resolve(livroEncontrado);
      } else {
        reject(`Livro não foi encontrado`);
      }
    }, 2000);
  });
}

console.log("Buscador de livros");
const idLivroBuscado = 124;
// const idLivroBuscado = 1245;
// const idLivroBuscado = 123;

buscaLivroPorId(idLivroBuscado)
  .then((livro) => {
    console.log(`Título: ${livro.nome}`);
    console.log(`Autor: ${livro.autor}`);
    console.log("-----");
    console.log("Usuários:\n");
    buscaUsuario(livro);
  })
  .catch((erro) => {
    console.log(erro);
  });

console.log(`Solicitada a busca para o livro id #${idLivroBuscado}\n`);

const buscaUsuario = async (livroBuscado) => {
  await new Promise(() => {
    setTimeout(() => {
      livroBuscado.usuarios.forEach((elemento) => {
        const usuarioEncontrado = usuarios.find((usuario) => usuario.id === elemento);
        console.log(`Nome: ${usuarioEncontrado.nome}`);
        console.log(`Email: ${usuarioEncontrado.email}\n`);
      });
    }, 2000);
  });
}