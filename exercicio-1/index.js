const isMultipleOfThree = (n) => {
    return n % 3 === 0
}
const isMultipleOfFive = (n) => {
    return n % 5 === 0
}

let sum = 0
for (let index = 0; index < 1000; index++) {
    if (isMultipleOfThree(index) || isMultipleOfFive(index)) {
        sum = index + sum
    }
}
console.log(sum)

