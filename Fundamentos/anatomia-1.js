// Function declaration

function sayHello() {
    console.log('Olá!')
}

sayHello()

function sayHelloTo(name) {
    console.log(`Olá ${name}`)
}

sayHelloTo('Bone')

function sayHelloTo(name) {
    console.log('Hello ' + name)
}

sayHelloTo('Tari')

function returnHi() {
    return 'Oi!'
}

const greeting = returnHi()
console.log(greeting)
console.log(returnHi())

function returnHiTo(name) {
    return `Oi ${name}!`
}

console.log(returnHiTo('Kira'))