function meuCallback() {
    console.log("Executando o callback.")
}

console.log("iniciando meu código")
setTimeout(meuCallback, 2000)
console.log("iniciando meu cósigo depois da chamada de settimeout")