/*
    Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
    which is the number of times you must multiply the digits in num until you reach a single digit.

    For example:
    persistence(39) === 3   //* because 3*9 = 27, 2*7 = 14, 1*4=4
                            //* and 4 has only one digit
    persistence(999) === 4  //* because 9*9*9 = 729, 7*2*9 = 126,
                            //* 1*2*6 = 12, and finally 1*2 = 2
    persistence(4) === 0    //* because 4 is already a one-digit number
*/

//my function
function persistence(num) {
    //1. create loop counter equal to 0
    //2. check the input number if it is greater than 9
    //3. split the number into an array
    //4. multiply all elements of the array
    //5. add to cycle counter +1
    let _cycleCounter = 0
    let _num = num;
    while (_num > 9) {
        const arrNum = _num.toString().split('').map(Number);
        _num = arrNum.reduce((a, b) => a * b);
        _cycleCounter++;
    }
    return _cycleCounter;
}

const result = persistence(39);

console.log(result);