
<?php
// 6. Write a program to replace every character in a given string with the character following it in the alphabet.
// Break the string into an array
// Get the ASCII value for the character
// Check to see if the ASCII vlaue is an uppercase value or lowerCase value
// Increment the ASCII value and turn it back into a letter (or for z set it to the a value)
// Join the array back into a string
//return the new string

function nextLetter($string){
    $stringParts = str_split($string);
    $newString = " ";
    foreach($stringParts as $letter) {
        if(ord($string[$index]) == 122) {
            $newString = ord(97);
        } else if (ord($string[$index]) == 90){
            $newString = ord(65);
        } else if (ord($string[$index]) > 65 && ord($string[$index])< 90) {
            $newString = ord($string[$index]+1);
        } else if (ord($string[$index]) > 97 && ord($string[$index]) < 121) {
            $newString = ord($string[$index]+1);
        }
    }
    return $newString;
}
$string = "apple";
$newString = nextLetter($string);
print($newString);

?>