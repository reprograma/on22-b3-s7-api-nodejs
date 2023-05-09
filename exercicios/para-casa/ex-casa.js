const livros = require("./biblioteca.json");
const usuarios = require("./usuarios.json");

const buscaLivroPorId = (id) => {
    return new Promise((resolve, reject) => {

        /* resolve é igual ao callback do then
        resolve = (livro) => {
            console.log(`Título: ${livro.nome}`)
            console.log(`Autor: ${livro.autor}`)
        }
        */

        /* reject é igual ao callback do catch
        reject = (erro) => {
            console.log(erro)
        }
        */

        setTimeout(() => {
            const livroEncontrado = livros.find(livro => livro.id === id)
            if (livroEncontrado) {
                resolve(livroEncontrado);
            } else {
                reject(`Livro não foi encontrado`);
            }
        }, 3000)
    })
}

console.log("Buscador de livros")

const idLivroBuscado = 123

buscaLivroPorId(idLivroBuscado)
    .then((livro) => {
        console.log(`Título: ${livro.nome}`);
        console.log(`Autor: ${livro.autor}`);
        console.log("-----");
        console.log("Usuários:");
        mostraUsuarios(livro);
        //usada função dentro do then para usar o resolve de parametro
    })        
    .catch((erro) => {
        console.log(erro)
    })
    .finally(() => {
        finaliza();
        //feita função async acima para seguir ordem
        //sem ela o finally era executado durante o tempo do timeout dentro do .then
    })

console.log(`Solicitada a busca para o livro id #${idLivroBuscado}`)

async function mostraUsuarios(livroAchado) {
    await new Promise((resolve) => {
        setTimeout(() => {
            livroAchado.usuarios.forEach((user) => {
                let achado = usuarios.find(usuario => usuario.id === user);
                console.log(`\nNome: ${achado.nome}.\nEmail: ${achado.email}.`)
            })
        }, 1800);
    })
}

async function finaliza() {
    await new Promise((resolve) => {
        setTimeout(() => {
        console.log("\nObrigada por usar nosso sistema de busca!\n");
    }, 3000)}
)}