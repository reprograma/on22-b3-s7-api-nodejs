//criar busca e exibição de livro 
const livros = require('./livraria.json')

const buscaLivro = (id => {
   
    return new Promise((resolve, reject)=> {

    setTimeout(()=>{

        const livroEncontrado = []
        livroEncontrado.push(livros.find(livro => livro.id === id))
    
        if(livroEncontrado.length !== 0 && !livroEncontrado.includes(undefined)){
            resolve(livroEncontrado)
        } else {
            reject(`Nenhum livro com o id ${id} foi encontrado`)
        }
    }, 5000)
    
})
})

buscaLivro(0)
    .then((result)=>{
        console.log(result)
    })
    .catch((erro)=>{
        console.log(erro)
    })