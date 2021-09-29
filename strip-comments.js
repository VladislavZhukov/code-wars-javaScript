/*
    Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
    Any whitespace at the end of the line should also be stripped out.

    Example:
    Given an input string of:
        apples, pears # and bananas
        grapes
        bananas !apples
    The output expected would be:
        apples, pears
        grapes
        bananas

    The code would be called like so:
        var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
    result should == "apples, pears\ngrapes\nbananas"
*/
//my function
solution = (input, markers) => {
    const _markers = markers
    let _inputString = input.split('\n')

    _markers.forEach(eMarkers => {
        _inputString = _inputString.map(e => e.split(eMarkers)[0].trim())
    })
    //* or
    // for (let i = 0; i < _markers.length; i++) {
    //     _inputString = _inputString.map(e => e.split(_markers[i])[0].trim())
    // }

    return _inputString.join('\n')
}
//best function from CodeWars#1
function solutionPerfect_1(input, markers) {
    return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
}
//best function from CodeWars#2
function solutionPerfect_2(input, markers) {
    return input.split('\n').map(
        line => markers.reduce(
            (line, marker) => line.split(marker)[0].trim(), line
        )
    ).join('\n')
}

console.log(solutionPerfect_2("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))