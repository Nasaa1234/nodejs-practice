// const numberCheck = (num) => {
//     return new Promise((resolve, reject) => {


//         if (num % 2 == 1) {
//             setTimeout(() => {
//                 resolve('odd')
//             }, 1000)
//         } else if (num % 2 == 0) {
//             setTimeout(() => {
//                 resolve('even')
//             }, 2000)
//         } else {
//             let err = new Error('error')
//             reject(err)
//         }


//     })
// }
// numberCheck('hi')
//     .then(res => {
//         console.log(res)
//     })
//     .catch(rej => {
//         console.log(rej)
//     })

const fs = require('fs')
const { versions } = require('process')
    //     // const top10 = (word) => {

// //     return new Promise((resolve, rejected) => {
// //         let i = 0,
// //             p = 0;
// //         fs.readFile(word, 'utf8', (err, data) => {
// //             let word1 = data.split(' ')

// //             word1.forEach(element => {
// //                 let word2 = element.split('')
// //                 word2 = element.split('\n')

// //                 // console.log(word2)
// //                 // console.log(word2)
// //                 word2.forEach(element => {
// //                     p++


// //                     if (word2 >= String.fromCodePoint(65) && word2 <= String.fromCodePoint(91) || word2 >= String.fromCodePoint(100) && word2 <= String.fromCodePoint(122)) {
// //                         i++;
// //                     }
// //                 })
// //             });
// //             console.log(i, p)
// //         })

// //     })
// // }

// // top10('/Users/nasaa/Downloads/word_count/big.txt')
// // top10('/Users/nasaa/Downloads/word_count/shakespeare.txt')
// // top10('/Users/nasaa/Downloads/word_count/smaller.txt')
// // top10('/Users/nasaa/Downloads/word_count/sgb-words.txt')


// const checkWord = w => {
//     let letters = /^[A-Za-z]+$/;
//     if (w.match(letters)) return true;
//     return false;
// };
// const FindWordCount = (path) => {
//     let o = 0;
//     return new Promise((res, rej) => {
//         fs.readFile(path, (err, data) => {
//             let lines = data.toString().split('\n');
//             let words = lines.reduce((acc, cur) => {
//                 let wordsperLine = cur.split(' ');
//                 return acc.concat(wordsperLine.filter(checkWord).map(word => word.toLocaleLowerCase()))
//             }, [])
//             for (let i = 0; i < words.length; i++) {
//                 for (let j = 1; j < words.length; j++) {
//                     if (words[i] === words[j]) {
//                         o++;
//                     }
//                 }
//                 o = 0;
//             }
//             console.log(p, 'hi')
//         })
//     })
// }
// FindWordCount('/Users/nasaa/Downloads/word_count/smaller.txt')






const checkWord = w => {
    let letters = /^[A-Za-z]+$/
    if (w.match(letters)) return true
    return false
}

let maxtop10 = [];
let max = [];
let top1;
const findWordCount = path => {
    return new Promise((res, rej) => {
        fs.readFile(path, (err, data) => {
            let lines = data.toString().split("\n")

            let words = lines.reduce((acc, cur) => {
                    let wordsPerLine = cur.split(" ")
                    acc = wordsPerLine
                        .filter(checkWord)
                        .map(word => word.toLowerCase())
                        .reduce((wordCount, word) => {
                            wordCount[word] = wordCount[word] == undefined ? 1 : wordCount[word] + 1
                                // console.log(wordCount[word])
                                // console.log(word
                            return wordCount

                        }, acc)


                    return acc
                }, {})
                // let top10 = Object.entries(words)
                // top1 = top10.sort((a, b) => { return b[1] - a[1] });
                // let first10 = top1.slice(0, 10)

            res(words)

        })
    })
}

Promise.all([findWordCount("/Users/nasaa/Downloads/word_count/big.txt"),
    findWordCount("/Users/nasaa/Downloads/word_count/smaller.txt"),
    findWordCount("/Users/nasaa/Downloads/word_count/shakespeare.txt"),
    findWordCount("/Users/nasaa/Downloads/word_count/sgb-words.txt")
]).then(e => {
    // console.log(e)
    let res = e.reduce((acc, cur) => {
        const keys = Object.keys(cur);

        let totalCount = keys.reduce((keyAcc, key) => {
            keyAcc[key] = keyAcc[key] != undefined ? keyAcc[key] + cur[key] : cur[key];
            return keyAcc;
        }, acc);
        return totalCount;
    });
    let top10 = {};

    console.log(Object.entries(res).sort((a, b) => b[1] - a[1]).slice(0, 10));
});
// 'test'

// const keyAcc = {
//     "test": 12
// }