// Anonymous function
// IIFE - Immediately Invoked Function Expression
// É uma função anônima que é executada imediatamente após ser definida

(function (a, b, c) {
    let x = 3
    console.log(`Result: ${a + b + c}`)
    console.log(x)
} )(1, 2, 3);

(function () {
    let x = 300
    console.log(x)
} )();

(() => {
    console.log('arrow #01')
})();

(() => console.log('arrow #02'))();