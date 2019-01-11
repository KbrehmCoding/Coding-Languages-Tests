// Write a program to replace every character in a given string with the character following it in the alphabet.

//probably need to create a loop that splits all the letters into seperate array items
//maybe need to use the code for the alphapet to change the letters, like maybe i++ to the code that then returns the letter after it
//then string join once the loop has gone through all the letters

function nextLetter(string) {
    let newString = '';
    //create a loop to cycle through each item(letter)
    for (var i = 0; i < string.length; i++) {
        //the uppercase alphabets code is between 90 and 65and lowercase is 97 to 122 so you want to make sure that is is between those so this checks for that
        //but the unicode after z is a symbol so this will take the code for z and redirect it to a
        if (122 === string.charCodeAt(i)) {
            newString += string.fromCharCode(97);
        } else if (90 === string.charCodeAt(i)) {
            newString += string.fromCharCode(65);
        } else if (65 < string.charCodeAt(i) && string.charCodeAt(i) < 90) {
            //so I dont want to use replace since it will replace each instance of a letter everytime you come to it so say you used abc
            //it would replace a with b and the b with c but it will replace the letter before it as well so it goes abc to bbc to ccc
            //to ddd which is not what we want here dont need the [i] part for this problem, so instead we want to create a new string
            //String.fromCharCode returns a string based on the letter code
            //will need to add 1 onto the charCodeAt element to get the next letter
            newString += String.fromCharCode(string.charCodeAt(i) + 1);
        } else if (97 < string.charCodeAt(i) && string.charCodeAt(i) < 121) {
            newString += String.fromCharCode(string.charCodeAt(i) + 1);
        }
    }
    return newString;
}
//obviously this logs the result
console.log(nextLetter("Hello"));
