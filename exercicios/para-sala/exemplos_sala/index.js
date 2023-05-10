// //superagent cria uma promisse sozinho e faz tudoh
const superagent = require("superagent")

const buscaPersonagem = async (codigo) => {
    const response = await superagent.get(`https://swapi.dev/api/people/${codigo}`)
    const responseB = await superagent.get(`https://swapi.dev/api/people/${codigo}`)

     return response + responseB
}

console.log("iniciando busca por Luke")
buscaPersonagem('2')
console.log("Busca esperando resposta")

/**const get = superagent
    .get("https://swapi.dev/api/people/2")
    .then((response) => {
        console.log(`Resposta: ${JSON.stringify(response.body)}`)
    })

console.log(`Fiz a busca por Luke, esperando por resposta`)
*/

// function meuCallBack(){
// 	console.log("Executando callback")
// }

// console.log(`inicia o código`)
// setTimeout(meuCallBack, 5000)
// console.log(`console.log depois de chamar o setTimeOut`)
///////////////////////////////////////////////////
// console.log(`Inicia código`)
// const ehPar = (numero) => {
// 	return new Promise((resolve, reject) => {
// 		if(!isNAN(numero)) {
// 			const result = numero % 2 == 0
// 			resolve(result)
// 		} else {
// 			reject("O numero informado não corresponde a um valor numérico")
// 		}
// 	})
// }
// ehPar(2)
// 	.then((result) => {
// 		console.log(`Resultado: ${result ? 'Par' : 'impar'}`)
//     })
// .catch((erro) => {
// 	console.log(erro)
// })
// .finally(() => {
// 	console.log("Fim")
// })
