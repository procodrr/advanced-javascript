// function multiplyNormal(x, y, z) {
//     return x * y * z
// } 

// multiply(2, 3, 5)

// function multiply(x) {
//     return function(y) {
//         if(y) return multiply(x * y)
//         return x
//     }
// }

// multiply(2)(3)(5)



// function multiplyByTwo(x) {
//     return x * 2
// }

// function multiplyByFour(x) {
//     return x * 4
// }

// function multiplyByNine(x) {
//     return x * 9
// }

// function multiplyByN(x) {
//     return function(y) {
//         return x * y
//     }
// }

// const multiplyByFour = multiplyByN(4)

function multiply(a, b) {
    return a * b
}

const multiplyByTwo = multiply.bind(this, 2)