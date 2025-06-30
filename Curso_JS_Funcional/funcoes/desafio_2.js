const carrinho = [
    { nome: 'Chocolate', qtde: 5, preco: 10, fragil: true },
    { nome: 'Pão', qtde: 6, preco: 1.50, fragil: true },
    { nome: 'Biscoito', qtde: 4, preco: 27.10, fragil: true },
    { nome: 'Bala', qtde: 16, preco: 0.99, fragil: false },
    { nome: 'Refrigerante', qtde: 7, preco: 5.99, fragil: false }
]

// Filter, Map, Reduce

// 1. Fragil: true
// 2. qtde * preco -> total
// 3. media totais

const isfragil = item => item.fragil
const getTotal = (item => item.qtde * item.preco)
const getMedia = (acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el
    console.log(acc, el)
    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    }

}

const mediaInicial = { qtde: 0, total: 0, media: 0 }

const media = carrinho
    .filter(isfragil)
    .map(getTotal)
    .reduce(getMedia, mediaInicial)
    .media

console.log(media)