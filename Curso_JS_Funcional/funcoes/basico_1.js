
// Exemplo de declarar variavel 
let a = 6
console.log(a)


// Function declaration
function bomDia() {
    console.log('Bom dia')
}

bomDia()

// Function expression
const boaNoite = function () {
    console.log('Boa noite')
}

boaNoite()

function somar(a, b) {
    return a + b
}

let resultado = somar(5, 7, 8, 9) // JS Ignora parametros adicionais
console.log(resultado)

resultado = somar(5, 6)
console.log(resultado)

resultado = somar(5) 
console.log(resultado) // O resultado da NaN porque o valor de b é undefined
