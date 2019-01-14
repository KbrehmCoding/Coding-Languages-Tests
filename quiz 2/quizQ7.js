// Write a program to capitalize the first letter of each word of a given string.

function CapitilizeIt(string) {
    // this converts all letters to lower case, then splits it at the spaces, you need to add the space or else it will return an array item for each letter instead of each word
    string = string.toLowerCase().split(' ');
    // string[1] is the single word from the sentence, then you create a loop to cycle through each item(word), the 0 in charAt
    // is the first letter of the word, it then uppercases the letter at charAt[0], and the slice takes out the word from index 1 to the end of the string
    for (var i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
    // this joins all the strings back together into one string/sentence
    return string.join(' ');
}

CapitilizeIt("I want pizza please");