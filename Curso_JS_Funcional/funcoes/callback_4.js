const carrinho = [
    { nome: 'Chocolate', qtde: 5, preco: 10, fragil: true },
    { nome: 'Pão', qtde: 6, preco: 1.50, fragil: true },
    { nome: 'Biscoito', qtde: 4, preco: 27.10, fragil: true },
    { nome: 'Bala', qtde: 16, preco: 0.99, fragil: false },
    { nome: 'Refrigerante', qtde: 7, preco: 5.99, fragil: false }
]

const getNome = item => item.nome
const qtdeMaiorQueZero = item => item.qtde > 0
//const qtdeMaiorIgualAZero = item => item.qtde >= 0
//const qtdeMuitoGrande = item => item.qtde >= 100

const itensValidos = carrinho
    .filter(qtdeMaiorQueZero)
    .map(getNome)
console.log(itensValidos)