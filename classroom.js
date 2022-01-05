// const users = [
//     { id: 11, name: 'bat', age: 23, group: 'editor' },
//     { id: 47, name: 'bold', age: 28, group: 'admin' },
//     { id: 85, name: 'tulga', age: 34, group: 'editor' },
//     { id: 97, name: 'suren', age: 28, group: 'admin' }
// ];
// let name1 = users.map((x) => {
//     let bigname = x.name.split("")[0].toUpperCase() + x.name.slice(1);
//     return {...x, name: bigname }
// })
// console.log(name1)

const { copyFileSync } = require('fs');
const { string } = require('yargs');

// const { require } = require("yargs");



// admin = users.filter(element => element.group == 'admin')
// console.log(String(admin.map((x) => x.name)))


// function groupBy(objectArray, property) {
//     return objectArray.reduce(function(acc, obj) {
//         let key = obj[property]
//         if (!acc[key]) {
//             acc[key] = []
//         }
//         acc[key].push(obj)
//         return acc
//     }, {})
// }

// let groupedPeople = groupBy(users, 'group')
// console.log(groupedPeople)



// const a = [1, 2, 3, 4]
// let easy = a.map((x) => x * 2);
// console.log(String(easy))



// const birthYear = [1994, 1997, 2003, 1993, 2001]
// let easy2 = birthYear.map((x) => 2021 - x);
// console.log(String(easy2))



// persons = [
//     { id: 1, name: "DORJ", age: 19 },
//     { id: 2, name: "BOLD", age: 13 },
//     { id: 3, name: "BALDAN", age: 15 },
//     { id: 4, name: "TSETSGEE", age: 20 },
//     { id: 5, name: "DULMAA", age: 23 }
// ];
// let adults = persons.filter((x) => x.age <= 18);
// console.log(String(adults.map((x) => x.name)))




// const arr = [3, -1, 8, 0, 2]
// const sum = (x, b) => x + b;
// console.log(arr.reduce(sum))


// const isEven = (num) => {
//     if (num % 2 == 0) return true;
//     return false;
// }
// const myFilter = (arr, filtering) => {
//     const newArr = [];
//     arr.map(num => {
//         if (filtering(num) == true) {
//             newArr.push(num);
//         }
//     })
//     return newArr;
// }
// console.log(myFilter([1, 2, 3, 4], isEven))





// const parseInt = (num) => Number(num)
// const myMap = (arr, filtering) => {
//     const newArr1 = [];
//     arr.forEach(num => {
//         newArr1.push(filtering(num))
//             // console.log(Number(num))
//     })
//     return newArr1;
// }


// // myMap(['5', '7', '22'], parseInt)
// console.log(myMap(['5', '7', '22'], parseInt));



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
products = [
    { number: 1, price: 100, name: 'Orange juice' },
    { number: 2, price: 200, name: 'Soda' },
    { number: 3, price: 150, name: 'Chocolate snack' },
    { number: 4, price: 250, name: 'Cookies' },
    { number: 5, price: 180, name: 'Gummy bears' },
    { number: 6, price: 500, name: 'Chocolates' },
    { number: 7, price: 120, name: 'Crackers' },
    { number: 8, price: 220, name: 'Potato chips' },
    { number: 9, price: 80, name: 'Small snack' },
];
console.log((products));

readline.question('ta ymar dugaartai baraa avahuu? ', baraa => {
    readline.question(`ta munguu hiine uu?  `, dugaar => {
        const vending = (x, dugaar, baraa) => {
            let nomer = x.map(number1 => {
                if (baraa == number1.number) {
                    if (dugaar >= number1.price) {
                        console.log(number1.name)
                        if (dugaar - number1.price != 0) {
                            let change = [500, 200, 100, 50, 20, 10];
                            let change1 = change.map(uldegdel => {
                                let money1 = parseInt((dugaar - number1.price) / uldegdel)
                                console.log(uldegdel, '=>', money1)
                                dugaar = dugaar - (money1 * uldegdel)
                                readline.close()
                            })
                        }
                    } else {
                        console.log('Not enough money for this product')
                    }
                }
            })
        }
        vending(products, dugaar, baraa)
        readline.close()
    })
})