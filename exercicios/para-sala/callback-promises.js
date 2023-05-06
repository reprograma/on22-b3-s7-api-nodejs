const livros = require("./biblioteca.json");

const buscarLivro = (livroID) => {
  return new Promise((resolve, reject) => {
    const livro = livros.find(livro => livro.id === livroID);
    if (livro) {
      const filtraLivro = {
        id: livro.id,
        nome: livro.nome,
        autor: livro.autor
      };
      resolve(filtraLivro);
    } else {
      reject(`Livro com ID ${livroID} não encontrado`);
    }
  });
};


buscarLivro(105)
  .then(livro => console.log(livro))
  .catch(erro => console.error(erro));

