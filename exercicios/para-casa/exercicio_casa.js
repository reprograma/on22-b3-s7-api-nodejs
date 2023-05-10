const prompt = require("prompt-sync")();
const livros = require("./biblioteca.json"); // Array de livros
const usuarios = require("./usuarios.json"); // Array de usuários

// Exemplo de criação de promises
const buscaLivroPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const livroEncontrado = livros.find((livro) => livro.id === id);
      if (livroEncontrado) {
        resolve(livroEncontrado);
      } else {
        reject(`Livro não foi encontrado`);
      }
    }, 2000);
  });
};
// criar função para buscar usuario
const buscaUsarioPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usarioLivro = usuarios.find((usuario) => usuario.id === id);
      if (usarioLivro) {
        resolve(usarioLivro);
      } else {
        reject(`Usuário não encontrado`);
      }
    }, 2000);
  });
};

const init = async () => {
  try {
    console.log("Buscador de livros");

    const livroID = parseInt(prompt("Qual o ID do livro que você procura? "));

    console.log(`\nSolicitada a busca para o livro id #${livroID}\n`);
    const livro = await buscaLivroPorId(livroID);

    const usuarios = await Promise.all(
      livro.usuarios.map((id) => buscaUsarioPorId(id))
    );

    console.log(`Título: ${livro.nome}`);
    console.log(`Autor: ${livro.autor} \n`);
    console.log("--- \n");

    usuarios.forEach((user) => {
      console.log(`Nome: ${user.nome}`);
      console.log(`Email: ${user.email} \n`);
    });
  } catch (error) {
    console.log(error);
  }
};

init();
