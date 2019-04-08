var stringToRotate = "javascript";

function rotateString(stringToRotate) {
    var lastLetter = stringToRotate.substr(-1);
    var restOfString = stringToRotate.slice(0, -1);
    return lastLetter + restOfString;
}

setInterval(function() {
    console.log(string);
    string = rotateString(string);
}, 2000);