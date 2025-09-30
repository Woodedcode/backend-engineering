// const greet = function (name) {
//     console.log('hello ', name)
// }

// greet('Ryan')

// IIFE

// var global = 5;

// (function () {
//     var local = 10
//     console.log(global, local)
// })();

// console.log(global)

// var global = 5
// {
//     let local = 10
//     console.log(global,local)
// }

// console.log(global,local)

// ARROW FUNCTIONS

// const greet = 

// () => {}

// const greet = (name) => {
//     console.log('hello', name);
// };

// greet('Ryan')

// const greet = (name) => console.log('hello ', name);

// greet('Ryan');

// const greet = (name) => 'hello ' + name;

// console.log(greet('Ryan'));


const greet = (name) => {
    console.log('greeting...');
    return 'hello ' + name;
};

console.log(greet('Ryan'))