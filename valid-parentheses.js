/*
    Write a function that takes a string of parentheses,
    and determines if the order of the parentheses is valid.
    The function should return true if the string is valid, and false if it's invalid.

    Examples:
        "()"              =>  true
        ")(()))"          =>  false
        "("               =>  false
        "(())((()())())"  =>  true
*/

//my function
validParentheses = (parens) => {
  return parens.length === 0 ? true
    : parens[0] !== '(' ? false
      : parens[parens.length - 1] !== ')' ? false
        : (() => {
          let counter = 0;
          for (let i = 0; i < parens.length; i++) {
            parens[i] === '(' ? counter++ : parens[i] === ')' && counter--;
            if (counter < 0) break;
          }
          return counter === 0 ? true : false
        })()
}
//best function from CodeWars
validParenthesesPerfect = (parens) => {
  let re = /\(\)/;
  while (re.test(parens)) parens = parens.replace(re, "");
  return !parens;
}

console.log(validParentheses("(())((() ())())"));
console.log(validParentheses(""));
console.log(validParentheses("((((()))))"))