// Write a program to replace every character in a given string with the character following it in the alphabet.

//probably need to create a loop that splits all the letters into seperate array items
//maybe need to use the code for the alphapet to change the letters, like maybe i++ to the code that then returns the letter after it
//then string join once the loop has gone through all the letters

function nextLetter(string) {
    //splits it at each letter, you dont want a space between the single quotes because then it will look for spaces in the string
    string = string.split('');
    //create a loop to cycle through each item(letter)
    for (var i = 0; i < string.length; i++) {
        //the alphabets code is between 96 and 123 so you want to make sure that is is between those so this checks for that
        if (96< string.charCodeAt(i)&& string.charCodeAt(1)< 123) {
    //so I dont want to use replace since it will replace each instance of a letter everytime you come to it so say you used abc
    //it would replace a with b and the b with c but it will replace the letter before it as well so it goes abc to bbc to ccc
    //to ddd which is not what we want here dont need the [i] part for this problem, so instead we want to create a new string
    //String.fromCharAt returns a string based on the letter code
    //will need to add 1 onto the charCodeAt element to get the next letter
    //but it probably wont handle z correctly sice the next unicode after it is not a letter but a symbol
            newString += String.fromCharAt(string.charCodeAt(i) + 1);
        }
    }
    //this joins all the strings back together into one string
    return string.join(' ');
}
//obviously this runs the function
nextLetter("Hello");