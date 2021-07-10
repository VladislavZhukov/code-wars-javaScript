/*
    Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59
    The maximum time never exceeds 359999 (99:59:59)

    You can find some examples in the test fixtures.
*/

//my function
function humanReadable(seconds) {
    const tempSeconds = seconds;
    let { hour, min, sec } = '';

    if (tempSeconds >= 359999) { hour = '99'; min = '59'; sec = '59'; } else {
        hour = (seconds / 3600) | 0;
        hour = hour > 9 ? `${hour}` : `0${hour}`;
        min = Math.trunc(tempSeconds % 3600 % 60);
        min = min > 9 ? `${min}` : `0${min}`;
        sec = (tempSeconds % 60);
        sec = sec > 9 ? `${sec}` : `0${sec}`;
    }

    return `${hour}:${min}:${sec}`
}
//best function from CodeWars#1
function humanReadablePerfect1(seconds) {
    return [(seconds / 3600) | 0, seconds % 3600 / 60, seconds % 3600 % 60].map(n => ('0' + ('' + n | 0)).substr(-2)).join(':')
}
//best function from CodeWars#2 =)
function humanReadablePerfect2(seconds) {
    var pad = function (x) { return (x < 10) ? "0" + x : x; }
    return pad(parseInt(seconds / (60 * 60))) + ":" +
        pad(parseInt(seconds / 60 % 60)) + ":" +
        pad(seconds % 60)
}

const result = humanReadable(1234);

console.log(result);