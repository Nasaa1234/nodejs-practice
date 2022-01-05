// const chalk = require('chalk');
// const validName = (name) => {
//     let name2 = name.split(' ');
//     for (let i = 0; i < name2.length; i++) {
//         let tom = name2[i].slice(0, 1)
//         if (tom >= String.fromCodePoint(65) && tom <= String.fromCodePoint(100)) {} else {
//             console.log(chalk.yellow(name), '=>', chalk.green('нэрээ зөв бичнүү?'))
//             return;
//         }
//     }
//     if (name2.length == 3) {
//         if (name2[2].slice(-1) == '.') {
//             console.log(chalk.yellow(name), '=>', chalk.green('нэрээ зөв бичнүү?'))
//             return;
//         }
//     }
//     if (name2.length == 2) {
//         if (name2[1].slice(-1) == '.') {
//             console.log(chalk.yellow(name), '=>', chalk.green('нэрээ зөв бичнүү?'))
//             return;
//         }
//         if (name2[1].length <= 2) {
//             console.log(chalk.yellow(name), '=>', chalk.green('нэрээ зөв бичнүү?'))
//             return;
//         }
//     }
//     if (name2[0].length <= 2 || name2[1].length <= 2) {
//         if (name2[0].slice(1, 2) == '.' || name2[1].slice(1, 2) == '.') {
//             if (name2[0].length > 2) {
//                 if (name2[0].slice(-1) == '.') {
//                     console.log(chalk.yellow(name), '=>', chalk.green('нэрээ зөв бичнүү?'))
//                     return;
//                 }
//             }
//             console.log(chalk.yellow(name), '=>', chalk.green(' true'))
//             return;
//         } else {
//             console.log(chalk.yellow(name), '=>', chalk.green('нэрээ зөв бичнүү?'))
//             return;
//         }
//     } else {
//         console.log(chalk.yellow(name), '=>', chalk.green('нэрээ зөв бичнүү?'))
//         return;
//     }
// }
// validName('H. W')
// validName('Herbert H. Well')
// validName('Hero George. Wells')
// validName('H.Goerge Wells')





const isCap = (fullName) => fullName.split(" ").every((d) => d[0].toUpperCase() === d[0]);

const checkInitial = (fullName) =>
    fullName.includes(".") === true ?
    fullName
    .split(" ")
    .filter((d) => d.includes("."))
    .every((d) => d.length == 2 && d[0] !== "." && d[1] == ".") :
    true;

const term = (fullName) => fullName.split(" ").length === 2 || fullName.split(" ").length === 3;

const isCorrectThreeWords = (fullName) =>
    fullName.split(" ").length === 3 && fullName.split(" ")[0].includes(".") ?
    fullName.split(" ")[1].includes(".") :
    true;

const isCorrectLastName = (fullName) => fullName.split(" ")[fullName.split(" ").length - 1].length > 2;

const isValidName = (fullName) => {
    if (
        isCap(fullName) &&
        checkInitial(fullName) &&
        term(fullName) &&
        isCorrectLastName(fullName) &&
        isCorrectThreeWords(fullName)
    ) {
        return true;
    }
    return false;
};

console.log(isValidName("H. Wells")); // ➞ true
console.log(isValidName("Herbert George Wells")); // ➞ true
console.log(isValidName("Herbert G. Wells")); // ➞ true
console.log(isValidName("H. G. Wells")); // -> true
console.log(isValidName("Herb. George Wells")); // ➞ false
console.log(isValidName("H. George Wells")); // ➞ false