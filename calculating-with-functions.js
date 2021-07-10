/*
    This time we want to write calculations using functions and get the results.
    Let's have a look at some examples:

    seven(times(five()));   // must return 35
    four(plus(nine()));     // must return 13
    eight(minus(three()));  // must return 5
    six(dividedBy(two()));  // must return 3

    Requirements:
    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus,
    times, dividedBy (divided_by in Ruby and Python)
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:
    eight(dividedBy(three()));
 */

const executeOperation = (value) => {
    const _operatorSw = _operator
    delete _operator
    switch (_operatorSw) {
        case '+':
            return result = value + parseInt(_value);
        case '-':
            return result = value - parseInt(_value);
        case '*':
            return result = value * parseInt(_value);
        case '/':
            return result = Math.floor(value / parseInt(_value));
        default:
            break;
    }
}

function zero() {
    return typeof _operator !== 'undefined' ? executeOperation(0) : _value = 0;
}
function one() {
    return typeof _operator !== 'undefined' ? executeOperation(1) : _value = 1;
}
function two() {
    return typeof _operator !== 'undefined' ? executeOperation(2) : _value = 2;
}
function three() {
    return typeof _operator !== 'undefined' ? executeOperation(3) : _value = 3;
}
function four() {
    return typeof _operator !== 'undefined' ? executeOperation(4) : _value = 4;
}
function five() {
    return typeof _operator !== 'undefined' ? executeOperation(5) : _value = 5;
}
function six() {
    return typeof _operator !== 'undefined' ? executeOperation(6) : _value = 6;
}
function seven() {
    return typeof _operator !== 'undefined' ? executeOperation(7) : _value = 7;
}
function eight() {
    return typeof _operator !== 'undefined' ? executeOperation(8) : _value = 8;
}
function nine() {
    return typeof _operator !== 'undefined' ? executeOperation(9) : _value = 9;
}

function plus() {
    return _operator = '+';
}
function minus() {
    return _operator = '-';
}
function times() {
    return _operator = '*';
}
function dividedBy() {
    return _operator = '/';
}
console.log(nine(dividedBy(six())));
