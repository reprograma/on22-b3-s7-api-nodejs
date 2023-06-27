const livros = require("./biblioteca.json"); // importa o conteúdo da biblioteca para a variável livros
const usuarios = require("./usuarios.json");

const buscaLivroPorId = (id) => {
  return new Promise((resolve, reject) => {
    const livroEncontrado = livros.find((livro) => livro.id === id); // procura o livro no array com id como parâmetro
    if (livroEncontrado) {
      resolve(livroEncontrado); // se o livro for encontrado, retorna como resolve
    } else {
      reject(`O livro não foi encontrado.`); // se não for encontrado, retorna como reject
    }
  });
};

console.log(`Buscador de livros:`);

const buscaUsuariosParaLivro = (livro) => {
  return new Promise((resolve, reject) => {
    const usuariosDoLivro = livro.usuarios.map((usuarioId) =>
      usuarios.find((usuario) => usuario.id === usuarioId)
    );
    if (usuariosDoLivro) {
      resolve(usuariosDoLivro);
    } else {
      reject(`Não há usuários associados a este livro.`);
    }
  });
};

console.log(`Buscador de Livros e Usuários:`);

const idLivroBuscado = 123;

buscaLivroPorId(idLivroBuscado)
  .then((livroEncontrado) => {
    console.log(`Título: ${livroEncontrado.nome}`);
    console.log(`Autor: ${livroEncontrado.autor}`);
    console.log(`---`);
    console.log(`Usuários:`);
    return buscaUsuariosParaLivro(livroEncontrado);
  })
  .then((usuariosDoLivro) => {
    usuariosDoLivro.forEach((usuario) => {
      console.log(`Nome: ${usuario.nome}. E-mail: ${usuario.email}`);
    });
  })
  .catch((erro) => {
    console.log(erro);
  });

console.log(`Solicitada a busca para livro id #${idLivroBuscado}`);
