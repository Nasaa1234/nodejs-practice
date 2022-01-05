// var readline = require('readline')

// // If the stream is TTY, then it must  be in RAW mode
// if (process.stdin.isTTY)
//     process.stdin.setRawMode(true);

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.emitKeypressEvents(process.stdin)
// process.stdin.on('keypress', () => {
//     process.stdout.write('.')
// })
// let board = [
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']

// ]


const readline = require('readline')
const chalk = require('chalk')

const row = c => n => c.repeat(n)
const col = row => n => (row + '\n').repeat(n)
const newLine = () => '\033c'
const rnd = (min) => (max) => Math.round(Math.random() * (max - min))


setInterval(() => {
    // COLOR    
    const r = rnd(0)(255)
    const g = rnd(0)(255)
    const b = rnd(0)(255)

    // SNAKE TEXT
    let header = newLine()
    header += (row(' ')(20) + 'SNAKE' + row(' ')(12))
    console.log(header)

    let board = col(row(' *')(25))(15)

    console.log(chalk.green(board))
}, 800)