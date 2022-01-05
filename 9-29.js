// const discount = (discount) => {
//     return (price) => price * discount
// };



// const tenPercent = discount(0.1); // (price) => price * 0.1
// tenPercent(500); //

// const chocolates = [
//     { "dark": true, "flavour": "strawberry" },
//     { "dark": false, "flavour": "strawberry" },
//     { "dark": false, "flavour": "almond" },
//     { "dark": true, "flavour": "almond" },
//     { "dark": false, "flavour": "lemon" },
// ];

// const checkProperty = (prop) => (value) => (elem) => elem[prop] == value;

// // checkProperty("dark") //(value) => elem => value*2
// // checkProperty("dark")(true) //  (elem) => elem["dark"] == true;


// const darkChocolates = chocolates.filter(checkProperty("dark")(true));
// console.log(darkChocolates);

// const almondChocolates = chocolates.filter(checkProperty("flavour")("lemon"));
// console.log(almondChocolates);

// let number1 = 0;
// const printreqursive = (number, limit) => {
//     if (number <= limit) {
//         number1 = number1 + number
//         printreqursive(number + 1, limit)
//     } else {
//         console.log(number1)
//     }
// }
// printreqursive(1, 6)


// for (let i = 1; i <= number; i++) {
//     console.log(Number(i))
// }





// let number1 = 1;
// const printreqursive = (number, limit) => {
//     if (number < limit) {
//         printreqursive(number + 1, limit)
//         number1 = number1 * (number + 1)
//     }
//     if (number == 1) {
//         return number1;
//     }
// }
// let a = printreqursive(1, 5)
// console.log(a)



// let number1 = 1;
// let number2 = 1;
// console.log(1);
// console.log(1);
// const printreqursive = (number, limit) => {
//     if (number <= limit) {
//         printreqursive(number + 1, limit)
//         number1 = number1 + (number2)
//         number2 = number1 + (number2)
//         console.log(number1);
//         console.log(number2)
//     }


// }
// printreqursive(5, 6)



// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// readline.question('enter word ', word => {
//     const printreqursive = (word.length, limit) => {
//         if (number < limit) {
//             printreqursive(number + 1, limit)

//         }

//     }
//     let a = printreqursive(1, 5)
//     console.log(a)
// })


let newarr = [];
const array = (arr) => {
    let newnewarr = arr.toString()
    newarr.push(newnewarr);
    let haha = newarr[0].split(',');
    let map = haha.map(i => Number(i))
    console.log(map)

}
array([10, [2, [3, 909]],
    [5, 5], 23
])



// const users = [
//     { id: 11, name: 'Bat', age: 23, group: 'editor' },
//     { id: 47, name: 'Bold', age: 28, group: 'admin' },
//     { id: 85, name: 'Tulga', age: 34, group: 'editor' },
//     { id: 97, name: 'Suren', age: 28, group: 'admin' }
// ]

// let b = users.reduce((a, b) => {
//     if (a[b.group]) {
//         a[b.group]++;
//     } else {
//         a[b.group] = 1;
//     }
//     return a;
// }, {})

// console.log(b);