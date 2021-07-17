/*
    Write a function that takes an integer as input,
    and returns the number of bits that are equal to one in the binary representation of that number.
    You can guarantee that input is non-negative.

    Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this casez
*/

//my function
countBits = (n) => {
    return ([...n.toString(2) + ""].map(v => +v)).reduce((a, c) => a + c, 0);
}
//best function from CodeWars
countBitsPerfect = n => n.toString(2).split('0').join('').length;

console.log(countBits(1234));