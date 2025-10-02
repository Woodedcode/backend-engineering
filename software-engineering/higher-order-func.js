bconst data = [1,2,3,4,5]

const modify = (data,f) => {
    for (let i = 0; i < data.length; i++){
        data[i] = f(data[i]);
    }
};

const sqr = (x) => x * x

modify(data, (x) => x * x)
console.log(data)



const functions = {
    double: (x) => x * 2,
    sqr: (x) => x * x,
    half: (x) => x / 2
};

const algorithm = (functions) => {
    return (x) => {
        let result = functions.double(x)
        result = functions.sqr(result);
        result = functions.half(result);
        return result
    };
};

const algo = algorithm(functions)

console.log(algo(2))

