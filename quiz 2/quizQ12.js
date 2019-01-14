// Write a program to change the capitalization of all letters in a given string.

// Possibly need to split the string into an array of letters then deal with them each individually
// Need to use toUpperCase and toLowerCase within if statements to check the current case of the letter so it can be swtiched

function switchCase(string) {
    let newString = '';
    for (var i = 0; i < string.length; i++) {
        if (65 <= string.charCodeAt(i) && string.charCodeAt(i) <= 90) {
            newString += String.fromCharCode(string.charCodeAt(i)).toLowerCase();
        } else if (97 <= string.charCodeAt(i) && string.charCodeAt(i) <= 122) {
            newString += String.fromCharCode(string.charCodeAt(i)).toUpperCase();
        } else if (32 === string.charCodeAt(i)) {
            newString += String.fromCharCode(32);
        }
    }
    return newString;
}

console.log(switchCase('I WAnt chocolate'));
