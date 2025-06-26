const numbers = [1, 2, 3, 4, 5, 6]

const numbersV2 = numbers.map(el => el * 2)

//const numbersV2 = numbers.map(function (el) {
//    return el * 2
//})

console.log(numbers, numbersV2)

const students = [
    { name: 'Joao', score: 7.4 },
    { name: 'Boner', score: 9 },
    { name: 'Donatelo', score: 5.7 },
    { name: 'Leonardo', score: 8.5 },
]

const getScore = el => el.score

const result = students
    .map(getScore)
    .map(Math.ceil)

console.log(students, result)

