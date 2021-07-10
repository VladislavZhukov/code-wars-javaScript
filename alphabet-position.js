/*
    Welcome.
    In this kata you are required to, given a string, replace every letter with its position in the alphabet.
    If anything in the text isn't a letter, ignore it and don't return it.

    "a" = 1, "b" = 2, etc.

    Example:
    alphabetPosition("The sunset sets at twelve o' clock.")
    Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
 */

//my function
function alphabetPosition(text) {
    return text
        .replace(/[^a-z]/gi, '')            //1. Delete everything except letters
        .toLowerCase()                      //2. Convert all letters to lowercase
        .split('')                          //3. Splitting a string into an array
        .map(s => s.charCodeAt(0) - 0x60)   //4. Get the Unicode symbol and convert it to the desired values (according to the assignment a=1, b=2 ...)
        .toString()                         //5. We translate an array of numbers into a string
        .replace(/,/g, ' ');                //6. Find all ',' in the string and replace with ' '
}
//best function from CodeWars
alphabetPositionPerfect = (text) => {
    return text
        .toUpperCase()
        .match(/[a-z]/gi)
        .map((c) => c.charCodeAt() - 64)
        .join(' ');
}

const result = alphabetPosition("The sunset sets at twelve o' clock.");

console.log(result);