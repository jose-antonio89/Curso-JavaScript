
const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2
console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraletra = texto => texto[0]
const letras = nomes.map(primeiraletra)
console.log(nomes, letras)


const carrinho = [
    { nome: 'Chocolate', qtde: 5, preco: 10, fragil: true },
    { nome: 'Pão', qtde: 6, preco: 1.50, fragil: true },
    { nome: 'Biscoito', qtde: 4, preco: 27.10, fragil: true },
    { nome: 'Bala', qtde: 16, preco: 0.99, fragil: false },
    { nome: 'Refrigerante', qtde: 7, preco: 5.99, fragil: false }
]

const getNome = item => item.nome
console.log(carrinho.map(getNome))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.map(getTotal)
console.log(totais)


Array.prototype.mauMap = function (fn) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        const resultado = fn(this[i], i, this)
        novoArray.push(resultado)
    }
    return mapped
}

