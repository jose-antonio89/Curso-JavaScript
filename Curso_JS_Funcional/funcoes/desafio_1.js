// somar(3)(4)(5)
function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

const somarABC = somar(8)(9)(10)
console.log(somarABC(19))
console.log(somar(7)(8)(9))


// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
//calcular(4)(8)(fn)
function calcular(x) {
    return function (y) {
        return function (fn) {
            return fn(x, y)
        }
    }
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

const r1 = calcular(2)(4)(subtrair)
const r2 = calcular(2)(4)(multiplicar)
console.log(r1)
console.log(r2)

