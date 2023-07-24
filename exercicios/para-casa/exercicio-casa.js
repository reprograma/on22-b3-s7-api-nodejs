const livros = require("./biblioteca.json");
const usuarios = require("./usuarios.json");

const buscaLivroPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const livroEncontrado = livros.find((livro) => livro.id === id);
      if (livroEncontrado) {
        resolve(livroEncontrado);
      } else {
        reject("Livro não foi encontrado");
      }
    }, 5000);
  });
};

console.log("Buscador de livros");

const idLivroBuscado = 123;

buscaLivroPorId(idLivroBuscado)
  .then((livro) => {
    console.log(`Título: ${livro.nome}`);
    console.log(`Autor: ${livro.autor}`);

   
    const usuariosDoLivro = buscaUsuariosPorLivroId(idLivroBuscado);
    console.log("Usuários deste livro:", usuariosDoLivro);

    
    const idUsuarioBuscado = 1; 
    const usuarioEncontrado = usuarios.find((usuario) => usuario.id === idUsuarioBuscado);
    if (usuarioEncontrado) {
      console.log("Nome do usuário encontrado:", usuarioEncontrado.nome);
    } else {
      console.log("Usuário não foi encontrado");
    }
  })
  .catch((erro) => {
    console.log(erro);
  });

console.log(`Solicitada a busca para o livro id #${idLivroBuscado}`);

console.log("Buscador de usuários");


const buscaUsuariosPorLivroId = (livroId) => {
  return usuarios.filter((usuario) => {
    return usuario.livros && usuario.livros.some((livro) => livro === livroId);
  });
};