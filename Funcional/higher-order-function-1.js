
function run(fn) {
    return fn()
}

// Resultado interpolando
function run(fn) {
    return `Result: ${fn()}`
}

function SayHello() {
    console.log('Olá!')
}

run (SayHello)

run(function() {
    console.log('run!')
})

run(Math.random)

const result = run(Math.random)
console.log(result)