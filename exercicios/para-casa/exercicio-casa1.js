const usuarios = require("./usuarios.json");
const livros = require("./biblioteca.json");

const buscaUsuarioPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuarioEncontrado = usuarios.find(usuario => usuario.id === id);
      if (usuarioEncontrado) {
        resolve(usuarioEncontrado);
      } else {
        reject("Usuário não foi encontrado");
      }
    }, 5000);
  });
};

const buscaLivroPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const livroEncontrado = livros.find(livro => livro.id === id);
      if (livroEncontrado) {
        resolve(livroEncontrado);
      } else {
        reject("Livro não foi encontrado");
      }
    }, 5000);
  });
};

console.log("Buscador de Usuários");

const usuarioEncontrado = 1;
buscaUsuarioPorId(usuarioEncontrado)
  .then(usuario => {
    console.log(`Usuário encontrado: ${usuario.nome}, email: ${usuario.email}`);
    return buscaLivroPorId(usuario.livros[0]);
  })
  .then(livro => {
    console.log(`Livro encontrado: ${livro.nome}, autor: ${livro.autor}`);
  })
  .catch(erro => {
    console.log(erro);
  });

console.log(`Solicitada a busca para usuário id #${usuarioEncontrado}`);

console.log("Buscador de livros");

const idLivroBuscado = 225;

buscaLivroPorId(idLivroBuscado)
  .then(livro => {
    console.log(`Título: ${livro.nome}`);
    console.log(`Autor: ${livro.autor}`);
  })
  .catch(erro => {
    console.log(erro);
  });

console.log(`Solicitada a busca para o livro id #${idLivroBuscado}`);