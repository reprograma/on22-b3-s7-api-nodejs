const listaTelefonica = require("./listaTelefonica.json")
const biblioteca = require("./biblioteca.json")

const buscarLivroPorId = (id) => {
    return new Promise((resolve, reject) => {
            setTimeout(()=>{
                const livroEncontrado = biblioteca.find(livro => id == livro.id)
                if(livroEncontrado){
                    resolve(livroEncontrado)
                } else{
                    reject("id não encontrado")
                }
            }, 5000)
    })
}


const buscarContatoPorId = (id) => {
    return new Promise((resolve, reject) => {
            setTimeout(()=>{
                const contatoEncontrado = listaTelefonica.find(contato => id == contato.id)
                if(contatoEncontrado){
                    resolve(contatoEncontrado)
                } else{
                    reject("id não encontrado")
                }
            },2500)
    })
}

const idLivroBuscado = 123
buscarLivroPorId(idLivroBuscado)
    .then((idLivroBuscado) => {
        idLivroBuscado.forEach(usuario => {
            console.log(`Nome: ${usuario.nome}`)
            console.log(`Telefone: ${usuario.telefone}`)
            console.log(`---`)
        });
    })
    .catch((erro) => {
        console.log(erro)
    })