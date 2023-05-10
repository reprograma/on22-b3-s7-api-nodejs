/** const livros = require("./biblioteca.json")
const usuarios = require("./usuarios.json")

const BuscaLivroPorId = (idLivro) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const livroEncontrado = livros.find(livro => livro.idLivro === idLivro)
            if (livroEncontrado) {
                resolve(livroEncontrado)
            } else {
                reject('O livro buscado não foi encontrado.')
            }

        
        }, )
    })
}



console.log("Buscador de livros e usuário.")

const idLivroBuscado = 5

BuscaLivroPorId(idLivroBuscado)
    .then((resultado) =>{
        console.log(`Nome:  ${resultado.titulo}`)
        console.log(`Autor: ${resultado.autor}`)
        console.log(`Usuario: ${resultado.usuarios}`)
    })
    .catch((erro) =>{
        console.log(erro)
    })


console.log(`Foi solicitada a busca do livro com id de #${idLivroBuscado}`)*/

const livros = require("./biblioteca.json")
const usuarios = require("./usuarios.json")

const BuscaLivroPorId = (idLivro) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const livroEncontrado = livros.find(livro => livro.idLivro === idLivro)
            if (livroEncontrado) {
                resolve(livroEncontrado)
            } else {
                reject('O livro buscado não foi encontrado.')
            }

        }, )
    })
}
const buscaUsuarioPorId = (idUsuario) => {
    return new Promise((resolve, reject ) => {
        setTimeout(() => {
            const usuarioEncontrado = usuarios.find((usuarios) => usuarios.id === idUsuario)
            if (usuarioEncontrado) {
                resolve(usuarioEncontrado)
            } else {
                reject('O usuário deste livro não foi encontrado.')
            }
        }, );
    })
}

console.log("Buscador de livros e usuário.")

const idLivroBuscado = 1;

BuscaLivroPorId(idLivroBuscado)
  .then((livroEncontrado) => {
    console.log(`Nome: ${livroEncontrado.titulo}`);
    console.log(`Autor: ${livroEncontrado.autor}`);

    const usuariosIds = livroEncontrado.usuarios;

    const promises = usuariosIds.map((usuarioId) => buscaUsuarioPorId(usuarioId));

    Promise.all(promises)
      .then((usuariosEncontrados) => {
        console.log('Usuários do livro:');
        usuariosEncontrados.forEach((usuarioEncontrado) => {
          console.log(usuarioEncontrado);
        });
      })
      .catch((erro) => {
        console.log(erro);
      });
  })
  .catch((erro) => {
    console.log(erro);
  });

console.log(`Foi solicitada a busca do livro com id de número #${idLivroBuscado}`);



/** CÓDIGO 3
 * const buscaUsuarioPorId = (livro) => {
    return new Promise((resolve, reject ) => {
        setTimeout(() => {
            const usuarioEncontrado = livros.usuarios.map((usuarioId) =>
            usuarios.find((usuario) => usuario.id === usuarioId) 
            )
            if (usuarioEncontrado) {
                resolve(usuarioEncontrado)
            } else {
                reject('O usuário deste livro não foi encontrado.')
            }
        }, );
    })
}

console.log("Buscador de livros e usuário.")

const idLivroBuscado = 5

BuscaLivroPorId(idLivroBuscado)
  .then((resultado) => {
    console.log(`Nome:  ${resultado.titulo}`);
    console.log(`Autor: ${resultado.autor}`);
  })
  .catch((erro) => {
    console.log(erro);
  });

buscaUsuarioPorId(5)    
  .then((resultado) => {
    resultado.usuarios.map((usuarioId) => {
        const usuario = buscaUsuarioPorId(usuarioId);
        console.log(usuario);
      });
  })
  .catch((erro) => {
    console.log(erro)
  })

console.log(`Foi solicitada a busca do livro com id de número #${idLivroBuscado}`) 
 */