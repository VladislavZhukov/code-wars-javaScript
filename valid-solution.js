/*
    Sudoku Background
    Sudoku xs a game played on a 9x9 grid.
    The goal of the game xs to fill all cells of the grid with digits from 1 to 9,
    so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks)
    contain all of the digits from 1 to 9.
    (More info at: http://en.wxkxpedxa.org/wxkx/Sudoku)

    Sudoku Solution Validator
    Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array 
    representing a Sudoku board, and returns true xf xt xs a valid solution,
    or false otherwise. The cells of the sudoku board may also contain 0's,
    which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

    The board xs always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

    Examples
    validSolution([
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ]); // => true
    validSolution([
        [5, 3, 4, 6, 7, 8, 9, 1, 2], 
        [6, 7, 2, 1, 9, 0, 3, 4, 8],
        [1, 0, 0, 3, 4, 2, 5, 6, 0],
        [8, 5, 9, 7, 6, 1, 0, 2, 0],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 0, 1, 5, 3, 7, 2, 1, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 0, 0, 4, 8, 1, 1, 7, 9]
    ]); // => false
*/

//my function
const validSolution = (board) => {
    const checkRepeat = (checkArr) => {
        for (let i = 1; i <= 9; i++) {
            if (checkArr.indexOf(i) === -1) {
                return false
            }
        }
        return true
    }

    const createSquare = (thirdBoart) => {
        let _result = [[], [], []], _xMax = 3, _xMin = 0;
        for (let i = 0; i < 3; i++) {
            if (i > 0) _xMax += 3, _xMin += 3;
            for (let x = _xMin; x < _xMax; x++) {
                for (let y = 0; y < 3; y++) {
                    _result[i].push(thirdBoart[y][x]);
                }
            }
        }
        return _result;
    }

    let _squareArr = [];

    createSquare([board[0], board[1], board[2]]).forEach(v => _squareArr.push(v));
    createSquare([board[3], board[4], board[5]]).forEach(v => _squareArr.push(v));
    createSquare([board[6], board[7], board[8]]).forEach(v => _squareArr.push(v));

    for (let i = 0; i < 9; i++) {
        if (checkRepeat(board[i]) === false || checkRepeat(_squareArr[i]) === false) {
            return false
        }
    }
    return true
}

//best function from CodeWars#1
function validSolutionPerfect1(m) {
    const isValid = a => [1, 2, 3, 4, 5, 6, 7, 8, 9]
        .every(n => a.indexOf(n) != -1) && a.length === 9, getBlockAsRow = n => Array(9)
            .fill(0).map((_, i) => m[3 * ~~(n / 3) + ~~(i / 3)][(3 * n) % 9 + i % 3]);

    return m.every(r => isValid(r)) && m.map((_, i) => m.map(r => r[i]))
        .every(r => isValid(r)) && m.map((_, i) => getBlockAsRow(i))
            .every(r => isValid(r));
}
//best function from CodeWars#2
function validSolutionPerfect2(board) {
    const i = [0, 1, 2]

    for (let y = 0; y < board.length; y += 3) {
        for (let x = 0; x < board.length; x += 3) {
            let s = 0
            i.map(a => i.map(b => s += board[y + a][x + b]))
            if (s !== 45) return false
        }
    }

    return true
}
//best function from CodeWars#3
function validSolutionPerfect3(bd) {
    var o = [0, 1, 2, 3, 4, 5, 6, 7, 8], p = [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
        a = o.map(i => bd[i].slice().sort().join("")),
        b = o.map(i => o.map(j => bd[j][i]).sort().join("")),
        c = p.map(x => p.map(y => y.reduce((m, n) => m.concat(x.map(z => bd[z][n])), []))).reduce((m, n) => m.concat(n.map(x => x.sort().join(""))), []);
    return a.concat(b, c).every(x => x == "123456789");
}
//best function from CodeWars#4
const validSolutionPerfect4 = board =>
    ((ver, sqr) => [...board, ...ver, ...sqr].every(val => val.sort().join(``) === `123456789`))
        ([...Array(9).keys()].map(val => [...Array(9)].map((_, idx) => board[idx][val])),
            [...Array(9).keys()].map(val => [0, 1, 2].reduce((pre, v) =>
                [...pre, ...board[(val / 3 ^ 0) * 3 + v].slice(val % 3 * 3, val % 3 * 3 + 3)], [])));

console.log(validSolution([
    [0, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5]]));

console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]]));