




// const greet = (name) => {
//     console.log('greeting...')
//     return 'hello ' + name
// };

// console.log(greet('Ryan'))


// const functions = [
//     (x) => x * 2,
//     (x) => x * x,
//     (x) => x / 2
// ]

// console.log(functions[0](5))
// console.log(functions[1](5))
// console.log(functions[2](5))
// const functions = {
//     double: (x) => x * 2,
//     square: (x) => x * x,
//     half: (x) => x / 2
// }

// console.log(functions.half(5))

// HASH FUNCTION

const crypto = require('crypto');

function sha256(data) {
    if(!sha256.cache){
        console.log('initializing cache')
        sha256.cache = {}
    }

    
    if(!sha256.cache[data]){
    const hash = crypto.createHash('sha256')
    hash.update(data);
    sha256.cache[data] = hash.digest('hex')
    } else {
        console.log('cache hit!')
    }



    return sha256.cache[data]
}

console.log(sha256('hello world'));










