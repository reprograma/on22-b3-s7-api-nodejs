//Criar ua promise simulando uma busca de um livro

const livros = require("./biblioteca.json")

const buscarLivro = (id) =>{
    return new Promise((resolve,reject)=>{
        const livroEncontrado = livros.find(livro => livro.id == id)
            if(livroEncontrado){
            resolve(livroEncontrado)
        }else{reject("O livro não foi encontrado")}
     
    })
}

buscarLivro(123)
.then((livro) => {
    console.log(`Título: ${livro.nome}`)
    console.log(`Autor: ${livro.autor}`)
})
.catch((erro)=>{console.log(erro)})