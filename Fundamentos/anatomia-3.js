// Function expression
const increment1 = function(n) {
    return n + 1
}

// Arrow Function is always anonymous
const increment2 = (n) => {  // "=>" essa seta indica que esta sendo utilizada uma função arrow
    return n + 1
}

const increment3 = n => {
    return n + 1
}

const increment4 = n => n + 1


console.log(increment1(4))
console.log(increment2(14))
console.log(increment3(244))
console.log(increment4(299))

const sum = (a, b) => a + b
console.log(sum(6, 9))