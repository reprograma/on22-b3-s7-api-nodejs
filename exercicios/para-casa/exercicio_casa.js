//criar busca e exibição de livro 
const livros = require('./livraria.json')
const users = require('./usuarios.json')


const buscaLivro = (id => {
   
    return new Promise((resolve, reject)=> {
    
        setTimeout(()=>{
    
        const livroEncontrado = []
        livroEncontrado.push(livros.find(livro => livro.id === id))
        
        if(livroEncontrado.length !== 0 && !livroEncontrado.includes(undefined)){
            for(let i = 0; i < livroEncontrado.length; i++){
                resolve(`--\n Título: ${livroEncontrado[i].titulo}\n Autor: ${livroEncontrado[i].autor}\n --------`)}
            } else {
                reject(`Nenhum livro com o id ${id} foi encontrado`)
            }
        }, 5000)
        
    })
})

const buscaUser = (id => {
   
    return new Promise((resolve, reject)=> {
    
        setTimeout(()=>{

        const livroEncontrado = []
        livroEncontrado.push(livros.find(livro => livro.id === id))
    
        const userEncontrado = []
        userEncontrado.push(users.find(user => livroEncontrado[0].user === user.id))
        
        if(userEncontrado.length !== 0 && !userEncontrado.includes(undefined)){
            for(let i = 0; i < userEncontrado.length; i++){
                resolve(userEncontrado)}
                //resolve(`--\n Nome: ${userEncontrado[i].nome}\n E-mail: ${userEncontrado[i].email}\n --------`)}
            } else {
                reject(`Nenhuma pessoa pegou esse livro ainda`)
            }
        }, 5000)
        
    })
})



const resolvePromises = Promise.all([buscaLivro(1), buscaUser(1)]).then((result)=>{
    console.log(result)
})
    .catch((erro)=>{
    console.log(erro)
})