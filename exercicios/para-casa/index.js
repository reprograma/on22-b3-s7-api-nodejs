const books = require("./library.json") // Os valores das propriedades dos usuários e livros
const users = require("./users.json")   // foram gerados automaticamente com ajuda do ChatGPT

// Declaração das promisses, usando o promise constructor
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

//declaração das funções de exibição, para o livro e para o usuário
const showBook = (book) => {
    console.log(`Title: ${book.title}\n`)
    console.log(`Author: ${book.author}`)
    console.log(`Editor: ${book.editor}`)
    console.log(`Price: ${book.price}`)
    console.log(`Subject: ${book.tags.join(", ")}.`)
}

const showUser = (user) => {
    console.log(`Name: ${user.name}`)
    console.log(`Email: ${user.email}`)
}

//inicializa a bookID com um valor entre 1 e 10.
const bookID = Math.floor(Math.random() * 10 + 1)
//inicializa a bookPromise com o valor aletório da bookID como argumento.
const bookPromise = findBookByID(bookID)


bookPromise
    .then((book) => {
        showBook(book)
        console.log("\n-----------------------\n\nUsers:\n")
        return Promise.all(
            book.users.map((userID) => findUserByID(userID))
        )
    })
    .then((users) => {
        users.forEach((user) => {
            showUser(user)
            console.log("\n")
        })
    })
    .catch((error) => {
        console.log("Error:", error)
    })