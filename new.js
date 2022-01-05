// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// let p = 0,
//     s = 1;
// readline.question('give numbers ', number => {
//     array = number.split(' ');
//     array.forEach(element => {
//         if (element % 2 == 0) {
//             p = p + Number(element);
//         } else {
//             s = s * Number(element);
//         }
//     });
//     readline.close()
//     console.log('sondgoi', s)
//     console.log('tegsh', p);
// })

// const sayMyName = (name) => `Hi ${ name }`;
// result = sayMyName('nasaa')
// console.log(result);

// const double = (number) => `Hi ${ number * 2 }`
// result = double(4)
// console.log(result);


// const products = [
//     { number: 1, price: 100, name: 'Orange juice' },
//     { number: 2, price: 200, name: 'Soda' },
//     { number: 3, price: 150, name: 'Chocolate snack' },
//     { number: 4, price: 250, name: 'Cookies' },
//     { number: 5, price: 180, name: 'Gummy bears' },
//     { number: 6, price: 500, name: 'Chocolates' },
//     { number: 7, price: 120, name: 'Crackers' },
//     { number: 8, price: 220, name: 'Potato chips' },
//     { number: 9, price: 80, name: 'Small snack' },
// ];

// const add = (x) => (y) => x + y;
// // let result = add(10)(20);
// // console.log(result)

// const add10 = add(10);
// let result = add10(20);
// console.log(result)

///Array -н бүх утгыг 2 дахин ихэсгэ.
let a = [1, 2, 3, 4];

let b = a.map((x) => x * 2)
console.log(b);

//////Хүмүүсийн төрсөн онууд өгөгдсөн бол насуудыг бодож гарган ages array-д хадгал
const birthYear = [1994, 1997, 2003, 1993, 2001]

let age = birthYear.map((x) => 2021 - x);
console.log(age)



//Хүмүүсийн нэр болон насны мэдээллийг persons object array-д өгөгдсөн.
//18 нас хүрсэн хүмүүсийг ялгаж adults array - д хадгал.
persons = [
    { id: 1, name: "DORJ", age: 19 },
    { id: 2, name: "BOLD", age: 13 },
    { id: 3, name: "BALDAN", age: 15 },
    { id: 4, name: "TSETSGEE", age: 20 },
    { id: 5, name: "DULMAA", age: 23 }
];
let adults = persons.filter(element => element.age > 18);
console.log(String(adults.map((x) => x.name)))