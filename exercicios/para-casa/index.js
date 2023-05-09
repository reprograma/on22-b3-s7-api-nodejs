const livros = require("./biblioteca.json");
const usuarios = require("./usuarios.json");

const buscaLivroPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const livroEncontrado = livros.find((livro) => livro.id === id);
      if (livroEncontrado) {
        resolve(livroEncontrado);
      } else {
        reject(`Livro não foi encontrado, informe um id valido!`);
      }
    }, 3000);
  });
};

console.log("Buscador de Livros📚");

const idLivroBuscado = 333;

buscaLivroPorId(idLivroBuscado)
  .then((livro) => {
    console.log(`Título: ${livro.nome}`);
    console.log(`Autor: ${livro.autor}`);
    console.log("-----");
    console.log("Usuários:\n");
    exibiUsuarios(livro);
  })
  .catch((erro) => {
    console.log(erro);
  });

console.log(`Solicitada a busca para o livro id #${idLivroBuscado}\n`);

async function exibiUsuarios(livroBuscado) {
  await new Promise(() => {
    setTimeout(() => {
      livroBuscado.usuarios.forEach((itens) => {
        const busca = usuarios.find((usuario) => usuario.id === itens);
        console.log(`Nome: ${busca.nome}`);
        console.log(`Email: ${busca.email}\n`);
      });
    }, 5000);
  });
}
