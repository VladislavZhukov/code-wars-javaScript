/*
    Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
    No floats or non-positive integers will be passed.

    For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
    [10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

//my function
function sumTwoSmallestNumbers(numbers) {
    //1. sort the array by least number
    //2. sum of the first two elements of the array
    const tempArr = numbers.sort((a, b) => a - b);
    return tempArr[0] + tempArr[1];
}

const result = sumTwoSmallestNumbers([19, 5, 42, 2, 77]);

console.log(result);