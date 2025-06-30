function bomDia() {
    console.log('Bom dia')
}

const boaTarde = function () {
    console.log('Boa tarde')
}

// 1) Serve par passar uma funcao como parametro para outra funcao
function executar(fn) {
    if (typeof fn === 'function') {
        fn()
    }
}

executar(3)
executar(bomDia)
executar(boaTarde)

// 2) Como retornar uma funcao a partir de outra funcao

function potencia(base) {
            return function(expoente) {
        return Math.pow(base, expoente)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))


const Potencia34 = potencia(3)(4)
console.log(Potencia34)