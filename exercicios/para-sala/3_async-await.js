function soma(a, b) {
    return new Promise((resolve) => {
        resolve(a + b)
    })
}

async function somaAoQuadrado(a, b) {
    const somaResultado = await soma(a, b)
    return somaResultado * somaResultado
}

somaAoQuadrado(4, 5)
    .then((result) => {
        console.log(`Soma ao quadrado: ${result}`)
    })