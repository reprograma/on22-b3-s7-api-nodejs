/*  function funcaoA(valor) {
    return funcaoB(valor * 2)
}
function funcaoB(valor) {
    return funcaoC(valor * 3)
}
function funcaoC(valor) {
    return funcaoD(valor * 4)
}
function funcaoD(valor) {
    return valor * 5
}
console.log(funcaoA(1))
*/

function funcaoA(valor) {
    return Promise(resolve => resolve(valor * 2))
}
  
function funcaoB(valor) {
    return Promise(resolve => resolve(valor * 3))
}
  
function funcaoC(valor) {
    return Promise(resolve => resolve(valor * 4))
}
  
function funcaoD(valor) {
    return Promise(resolve => resolve(valor * 5))
}

funcaoA(1)
    .then((resultadoA) => funcaoB(resultadoA))
    .then((resultadoB) => funcaoC(resultadoB))
    .then((resultadoC) => funcaoD(resultadoC))