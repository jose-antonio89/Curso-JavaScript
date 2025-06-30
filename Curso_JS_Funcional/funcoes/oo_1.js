
function produto(nome, preco, desc = 0.15) {
    this.nome = nome
    this.preco = preco
    this.desc = desc

    this.precoFinal = function () {
        return this.preco * (1 - this.desc)
    }
}

const p1 = new produto('Caneca', 15.99)
console.log(p1)

const p2 = new produto('Armario', 1765.99)
console.log(p2)
console.log(p2.precoFinal())