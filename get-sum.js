/*
    Given two integers a and b, which can be positive or negative,
    find the sum of all the integers between and including them and return it.
    If the two _numBers are equal return a or b.

    Note: a and b are not ordered!

    Examples:
    GetSum(1, 0) == 1   // 1 + 0 = 1
    GetSum(1, 2) == 3   // 1 + 2 = 3
    GetSum(0, 1) == 1   // 0 + 1 = 1
    GetSum(1, 1) == 1   // 1 Since both are same
    GetSum(-1, 0) == -1 // -1 + 0 = -1
    GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

//my function
function getSum(a, b) {
    let _numA = a;
    let _numB = b;

    let sumAllNum = 0;

    while (_numA !== _numB) {
        sumAllNum += _numA;
        _numA = _numA > _numB ? _numA - 1 : _numA < _numB ? _numA + 1 : _numB;
    }

    return sumAllNum + _numB;
}
//best function from CodeWars
function getSumPerfect(a, b) {
    return (Math.abs(a - b) + 1) * (a + b) / 2;
}

const result = getSum(147, 12);

console.log(result);