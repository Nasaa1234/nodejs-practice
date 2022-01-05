//  let wheriswaldo = (array) => {
//      var row = array.length;
//      var rowsizes = []
//      for (var i = 0; i < row; i++) {
//          rowsizes.push(array[i].length)
//      }

const { command } = require("yargs");



//      for (let i = 0; i < row; i++) {
//          for (let j = 0; j < Math.min.apply(null, rowsizes); j++) {
//              if (j < 3) {
//                  if (array[i][j] != array[i][j + 1]) {
//                      if (j == 0) {
//                          if (array[i][j + 1] != array[i][j + 2]) {
//                              console.log("sondgoi ni", '[', i + 1, j + 2, ']')
//                          } else {
//                              console.log("sondgoi ni", '[', i + 1, j + 1, ']')

//                          }
//                      } else
//                          console.log("sondgoi ni", '[', i + 1, j + 2, ']')
//                      return;
//                  }
//              }
//          }
//      }
//  }


//  wheriswaldo([
//      ['B', 'A', 'A', 'A'],
//      ['A', 'A', 'A', 'A'],
//      ['A', 'A', 'A', 'A'],
//      ['A', 'A', 'A', 'A']
//  ]);

//  wheriswaldo([
//      ['c', 'c', 'c', 'c'],
//      ['c', 'c', 'c', 'd']
//  ]);
//  wheriswaldo([
//      ['O', 'O', 'O', 'O'],
//      ['O', 'O', 'O', 'O'],
//      ['O', 'O', 'O', 'O'],
//      ['O', 'O', 'O', 'O'],
//      ['P', 'O', 'O', 'O'],
//      ['O', 'O', 'O', 'O']
//  ]);

// const arr = [
//     [0, 1, 0, 0],
//     [0, 0, 1, 0],
//     [0, 0, 0, 1],
//     [0, 0, 1, 0],
// ]

// let mineSweeper = (array) => {
//     var row = array.length;
//     var rowsizes = []
//     for (var i = 0; i < row; i++) {
//         rowsizes.push(array[i].length)
//     }

//     for (let i = 0; i < row; i++) {
//         for (let j = 0; j < Math.min.apply(null, rowsizes); j++) {
//             // console.log(array[i][j])
//             if (array[i][j] == 1) {
//                 array[i][j] = 9;
//             } else {
//                 if (array[i + 1][j + 1] == 9) {
//                     console.log('hi')
//                 }
//             }
//         }


//     }



//     console.log(array)
// }
// mineSweeper(arr);



// const mineSweeper = (el) => {
//     let element = el;
//     // [0, 7, 0, 0],
//     // [0, 0, 7, 0],
//     // [0, 0, 0, 7],
//     // [0, 0, 7, 0],
//     for (let num = 0; num < el.length - 1; num++) {  
//         for (let j = 0; j < el[num].length; j++) {
//             if (el[num][j] == 7) {
//                 element[num][j] = 9;
//                 if (num >= 0 && j - 1 >= 0) {
//                     if (el[num][j - 1] != undefined && el[num][j - 1] != 7 && el[num][j - 1] != 9) {
//                         el[num][j - 1]++;
//                     }
//                 }
//                 if (num >= 0 && j + 1 >= 0) {
//                     if (el[num][j + 1] != undefined && el[num][j + 1] != 7 && el[num][j + 1] != 9) {
//                         el[num][j + 1]++;
//                     }
//                 }
//                 if (num + 1 >= 0 && j >= 0) {
//                     if (el[num + 1][j] != undefined && el[num + 1][j] != 7 && el[num + 1][j] != 9) {
//                         el[num + 1][j]++;
//                     }
//                 }
//                 if (num - 1 >= 0 && j >= 0) {
//                     if (el[num - 1][j] != undefined && el[num - 1][j] != 7 && el[num - 1][j] != 9) {
//                         el[num - 1][j]++;
//                     }
//                 }
//                 if (num - 1 >= 0 && j - 1 >= 0) {
//                     if (el[num - 1][j - 1] != undefined && el[num - 1][j - 1] != 7 && el[num - 1][j - 1] != 9) {
//                         el[num - 1][j - 1]++;
//                     }

//                 }
//                 if (num + 1 >= 0 && j + 1 >= 0) {
//                     if (el[num + 1][j + 1] != undefined && el[num + 1][j + 1] != 7 && el[num + 1][j + 1] != 9) {
//                         el[num + 1][j + 1]++;
//                     }
//                 }

//                 if (num + 1 >= 0 && j - 1 >= 0) {
//                     if (el[num + 1][j - 1] != undefined && el[num + 1][j - 1] != 7 && el[num + 1][j - 1] != 9) {
//                         el[num + 1][j - 1]++;
//                     }
//                 }
//                 if (num - 1 >= 0 && j + 1 >= 0) {
//                     if (el[num - 1][j + 1] != undefined && el[num - 1][j + 1] != 7 && el[num - 1][j + 1] != 9) {
//                         el[num - 1][j + 1]++;
//                     }
//                 }
//             }

//         }
//     }


//     for (let i = 0; i < element.length - 1; i++) {
//         for (let j = 0; j < el[i].length; j++) {
//             process.stdout.write(`${element[i][j]} | `);
//         }
//         console.log('')
//     }
// }
// let arr = [
//     [0, 7, 0, 0],
//     [0, 0, 7, 0],
//     [0, 0, 7, 0],
//     [0, 0, 7, 0],
//     []
// ]

// mineSweeper(arr);



//sairuulsan huvilbar wher is waldo

// let WhereIswaldo = (arr) => {
//     let rowId
//     let colId;


//     const flat = arr.reduce((acc, cur) => acc.concat(cur));
//     //concat gedeg ni 2 array iig niiluuldeg function [1,2].concat([3,4]) ==> [1,2,3,4];

//     const letterCount = flat.reduce((counter, letter) => {
//         counter[letter] = (counter[letter] == undefined ? 1 : counter[letter] + 1)
//         return counter;
//     }, {})
//     const oddLetter = Object.keys(letterCount).filter((letter) => letterCount[letter] == 1)[0]

//     rowId = arr.findIndex((row) => row.includes(oddLetter));
//     colId = arr[rowId].findIndex((col) => col == oddLetter);
//     console.log(rowId + 1, colId + 1)
// }
// WhereIswaldo([
//     ['A', 'A', 'A', 'A'],
//     ['A', 'A', 'A', 'Z'],
//     ['A', 'A', 'A', 'A'],
//     ['A', 'A', 'A', 'A']
// ]);


//nimesweeper new version


let mineSweeper = (el) => {
    let map9 = el.map(element => {
        return element.map((m) => {
            if (m == 1) {
                return 9;
            }
            return 0;
        })
    })

    const findnumber = (b, i, j) => {
        return ismin(b, i - 1, j - 1) +
            ismin(b, i - 1, j) +
            ismin(b, i - 1, j + 1) +
            ismin(b, i, j - 1) +
            ismin(b, i, j + 1) +
            ismin(b, i + 1, j - 1) +
            ismin(b, i + 1, j) +
            ismin(b, i + 1, j + 1);
    }


    const ismin = (b, i, j) => {
        if (i < 0 || j < 0 || i >= b.length || j >= b[i].length || b[i][j] != 9) {
            return 0
        } else {
            return 1;
        }
    }
    return map9.map((el, i) => {
        return el.map((n, j) => {
            return n == 9 ? n.toString() : findnumber(map9, i, j).toString()
        })
    })
}

let mine9 = [
    [1, 1, 0, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1]
]
console.log(mineSweeper(mine9))