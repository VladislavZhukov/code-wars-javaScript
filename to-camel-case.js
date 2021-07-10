/*
    Complete the method/function so that it converts dash/underscore delimited words into camel casing.
    The first word within the output should be capitalized only if the original word was capitalized
    (known as Upper Camel Case, also often referred to as Pascal case).

    Examples:
    "the-stealth-warrior" gets converted to "theStealthWarrior"
    "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

//my function
function toCamelCase(str) {
    const tempStr = str;
    let resultArr = [];

    const arrTempStr = tempStr.split(/[_ -]/);

    resultArr.push(arrTempStr[0]);
    for (let i = 1; i < arrTempStr.length; i++) {
        resultArr.push(arrTempStr[i].charAt(0).toUpperCase() + arrTempStr[i].slice(1));
    }

    return resultArr.join('')
}
//best function from CodeWars
function toCamelCasePerfect(str){
    return str.replace(/[-_ ](.)/g, (_, c) => c.toUpperCase());
  }

const result = toCamelCase("the_stealth warrior-xxxx_x0 aaa");

console.log(result);