// let argv = process.argv.slice(2);
// // console.log(argv)
const chalk = require('chalk');
// for (let i = 0; i < argv.length; i++) {
//     if (argv[i] === '-t') {
//         for (let l = 0; l < argv.length; l++) {
//             if (argv[l] === '-c') {
//                 for (let p = 0; p < argv.length; p++) {
//                     if (argv[p] === '-bg') {
//                         console.log(chalk[argv[l + 1]]['bg' + argv[p + 1]](argv[i + 1]));
//                     }
//                 }
//             }
//         }
//     }
// }

// let argv = process.argv.slice(2);
// const chalk = require('chalk');
// let text = 0
// for (let i = 0; i < argv.length; i++) {
//     if (argv[i] === '-t') {
//         console.log(argv[i + 1]);
//         text = i + 1
//     }
//     if (text != i + 1) {
//         if (argv[i] !== '-t') {
//             console.log("No Arguments")
//         }
//     }
// }




// let argv = process.argv.slice(2);
// const chalk = require('chalk');

// let join = argv.join("")


// if (join.includes('-bg')) {
//     bgcolor = join.split('-bg')[1].split('-')[0]
// }
// if (join.includes('-c')) {
//     color = join.split('-c')[1].split('-')[0]
// }
// if (join.includes('-t')) {
//     text = join.split('-t')[1].split('-')[0]
// }
// console.log(chalk[color]['bg' + bgcolor](text));

const argv = require('yargs').argv;

console.log(chalk[argv.color]['bg' + [argv.bg]](argv.text))