const bibliotecaJson = require('./biblioteca.json')
const usuarioJson = require('./usuarios.json')

const buscarLivrosPorId = (id)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const livroEncontrado = bibliotecaJson.find(livro=> livro.id === id)
        if(livroEncontrado){
            resolve(livroEncontrado)

        } else{
            reject('Livro nao encontrado')
        }
        
        },5000)
    })
}

const buscarUsuarioLivroPorId = (idUsuario)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const usuarioEncontrado = usuarioJson.filter((usuario)=>{
                return usuarioJson.includes(usuario.id)                        
            })
        if(usuarioEncontrado){
            resolve(usuarioEncontrado)
        } else{
            reject('Nao foi encontrado o usuario desse livro')
        }   
        },2500)
    })
}

console.log('Buscador de Livros') 

const idDeLivroBuscado = 125
buscarLivrosPorId(idDeLivroBuscado)
.then((livro)=>{
    console.log(`titulo: ${livro.nome}`)
    console.log(`autor: ${livro.autor}`)
    console.log('usuario: ')
    console.log(livro.usuarios)
    return buscarUsuarioLivroPorId(livro.usuarios)
    
})
.then((usuarioJson)=>{
    console.log(usuarioJson)
    usuarioJson.forEach((usuario)=>{
        console.log(`nome: ${usuario.nome}`)
        console.log(`email: ${usuario.email}`)
        console.log('--------------')
    })
})
.catch((error)=>{
    console.log(error)
})

console.log(`Solicitada a busca para o livro de id # ${idDeLivroBuscado}`)