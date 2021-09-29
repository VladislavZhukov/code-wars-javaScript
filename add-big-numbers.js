/*
    We need to sum big numbers and we require your help.

    Write a function that returns the sum of two numbers.
    The input numbers are strings and the function must return a string.

    Example:
        add("123", "321"); -> "444"
        add("11", "99");   -> "110" 

    Notes
        The input numbers are big.
        The input is a string of only digits
        The numbers are positives
*/
//my function
add = (a, b) => {
    const _a = a.split('').reverse().map(Number);
    const _b = b.split('').reverse().map(Number);
    let _ab = [];
    if (_a.length >= _b.length) {
        _ab = sumArr(_b, _a)
    } else {
        _ab = sumArr(_a, _b)
    }
    return _ab.reverse().toString().replace(/,/g, '')
    //* const sum = BigInt(a) + BigInt(b)
    //* return sum.toString()
}
sumArr = (smallArr, bigArr) => {
    let _result = []
    let _xx = []
    let _sum = 0
    let _diffLength = bigArr.length - smallArr.length

    ifTen = () => {
        if (_sum >= 10) {
            _xx = _sum.toString().split('').reverse().map(Number)
            _result.push(_xx[0])
        } else {
            _xx = []
            _result.push(_sum)
        }
    }

    for (let i = 0; i < smallArr.length; i++) {
        _sum = smallArr[i] + bigArr[i]
        _xx.length > 0 && _sum++
        if (_sum >= 10 && smallArr.length - 1 !== i) {
            _xx = _sum.toString().split('').reverse().map(Number)
            _result.push(_xx[0])
        } else if (smallArr.length - 1 !== i) {
            _xx = []
            _result.push(_sum)
        } else if (smallArr.length - 1 === i && _diffLength !== 0) {
            ifTen()
        } else if (_diffLength === 0) {
            _result.push(_sum)
        }
    }

    if (_diffLength > 0) {
        for (let i = 0; i < _diffLength; i++) {
            if (_xx.length > 0 && _diffLength - 1 !== i) {
                _sum = bigArr[smallArr.length + i] + 1
                ifTen()
            } else if (_xx.length > 0) {
                _result.push(bigArr[smallArr.length + i] + 1)
                _xx = []
            } else {
                _result.push(bigArr[smallArr.length + i])
            }
        }
    }
    return _result
}
//best function from CodeWars#1
function addPerfect_1(a, b) {
    var res = '', c = 0
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || c) {
        c += ~~a.pop() + ~~b.pop()
        res = c % 10 + res
        c = c > 9
    }
    return res
}
//best function from CodeWars#2
const addPerfect_2 = (a, b, r = 0) => (res => a == b && b == "" && r == 0 ? "" : add(a.slice(0, -1), b.slice(0, -1), r = ~~(res / 10)) + res % 10)(+a.slice(-1) + +b.slice(-1) + +r).replace(/^0+/g, "");
//best function from CodeWars#3
function addPerfect_3(a, b) {
    var carry = 0, result = [],
        len = Math.max(a.length, b.length), i = len;
    while (i--) {
        var sum = (+a[i - len + a.length] || 0) + (+b[i - len + b.length] || 0) + carry;
        carry = parseInt(sum / 10);
        result.unshift(sum % 10);
    }
    if (carry) result.unshift(carry);
    return result.join('');
}

console.log(add("1372", "69"))