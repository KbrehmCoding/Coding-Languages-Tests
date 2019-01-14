// Write a program to convert the letters of a given string in alphabetical order.

var string = "banana";

function sortLetters(string) {
    // Splits the string into seperate letters
    string = string.split('');
    //string[1] is the single word from the sentence, then you create a loop to cycle through each item(letter)
    //is the first letter of the word, it then uppercases the letter at charAt[0], and the slice takes out the word from index 1 to the end of the string
    for (var i = 0; i < string.length; i++) {
        string.sort();
    }
    //this joins all the strings back together into one string/sentence
    return string.join('');
}
//obviously this runs the function
console.log(sortLetters(string));