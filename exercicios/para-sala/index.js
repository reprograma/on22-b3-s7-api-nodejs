// function meuCallback() {
//     console.log("Executando o callback");
// }

// console.log("Iniciando meu código")
// setTimeout(meuCallback, 5000)
// console.log("Console.log depois da chamada de setTimeout")

console.log("Iniciando meu código")

const ehPar = (numero) => {
    return new Promise((resolve, reject) => {

        //resolve = (result) => { console.log(`Resultado: ${result ? 'Par' : 'Ímpar'}`)}
        //reject = (erro) => { console.log(erro) }

        setTimeout(() => {
            if (!isNaN(numero)) {
                const result = numero % 2 == 0
                resolve(result)
            } else {
                reject(`O texto informado: ${numero}, não corresponde a um valor numérico`)
            }
        }, 5000)


    });
}

ehPar("dois")
    .then((result) => {
        console.log(`Resultado: ${result ? 'Par' : 'Ímpar'}`)
    })
    .catch((erro) => {
        console.log(erro)
    }).finally(() => {
        console.log("FIM.")
    })

console.log("Ja chamei a função ehPar, estou esperando a resposta")

