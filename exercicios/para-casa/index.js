const books = require("./library.json") // Os valores das propriedades dos usuários e livros
const users = require("./users.json")   // foram gerados automaticamente com ajuda do ChatGPT.

// Declaração da função de busca de livro por ID, usando o promise constructor.
const findBookByID = (id) => {
    return new Promise((resolve, reject) => {
        const foundBook = books.find((book) => book.id === id)

        if (foundBook) {
            resolve(foundBook)
        } else {
            reject("Book not found.")
        }
    })
}

// Declaração da função de busca de user por ID, usando o promise constructor.
const findUserByID = (id) => {
    return new Promise((resolve, reject) => {
        const foundUser = users.find((user) => user.id === id)

        if (foundUser) {
            resolve(foundUser)
        } else {
            reject("User not Found.")
        }
    })
}

// Declaração das funções de exibição, para o livro, para o usuário.
const showBook = (book) => {
    console.log(`  Title: ${book.title}\n`)
    console.log(` Author: ${book.author}`)
    console.log(` Editor: ${book.editor}`)
    console.log(`  Price: $${book.price}`)
    console.log(`Subject: ${book.tags.join(", ")}.`)
}

const showUser = (user) => {
    console.log(`   Name: ${user.name}`)
    console.log(`  Email: ${user.email}`)
}

// Inicializa a bookID com um valor entre 1 e 10, atribui este valor como argumento à bookPromise declarada.
const bookID = Math.floor(Math.random() * 10 + 1)
const bookPromise = findBookByID(bookID)

// Cria a promise chain que vai lidar com as buscas.
bookPromise
    .then((book) => {
        showBook(book) // Chama a showBook() e exibe as infos do livro requisitado.
        console.log("-------- ------------------------------------------------------------\n\n  Users:")
        return Promise.all(
            book.users.map((userID) => findUserByID(userID)) //usa a .all para criar promisses para todos os users encontrados.
        )
    })
    .then((users) => {
        users.forEach((user) => {
            console.log(" ")
            showUser(user) // Chama a showUser() e exibe as infos para cada user encontrado no livro pedido.
        })
    })
    .catch((error) => {
        console.log("Error:", error) // Lida com possíveis erros ocorridos na promisse chain.
    })