
function finalPrice(tax, price) {
    return price * (1 + tax);
}

console.log(finalPrice(0.09, 36.8))
console.log(finalPrice(0.09, 25.7))
console.log(finalPrice(0.09, 45.3))

function finalPrice(tax) {
    return function(price) {
        return price * (1 + tax);
    }
}

const nycFinalPrice = finalPrice(0.09875)

console.log(nycFinalPrice(36.8))

