const livros = require("./minha-biblioteca.json");

const buscaLivro = (id) => {
  return new Promise((resolve, reject) => {
    const livroEncontrado = livros.find((livro) => livro.id === id);
    setTimeout(() => {
      if (livroEncontrado) {
        resolve(livroEncontrado);
      } else {
        reject("Livro não encontrado, tende um id valido.");
      }
    }, 5000);
  });
};

console.log("Buscando Livro...");

const idLivroBuscado = 333;

buscaLivro(idLivroBuscado)
  .then((livros) => {
    console.log(`Título: ${livros.nome}`);
    console.log(`Autor: ${livros.autor}`);
  })
  .catch((erro) => {
    console.log(erro);
  });

console.log(`Solicitada a busca do livro id #${idLivroBuscado}`);
