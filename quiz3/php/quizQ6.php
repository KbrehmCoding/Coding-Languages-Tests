
<?php
// 6. Write a program to replace every character in a given string with the character following it in the alphabet.
// Break the string into an array
// Get the ASCII value for the character
// Check to see if the ASCII vlaue is an uppercase value or lowerCase value
// Increment the ASCII value and turn it back into a letter (or for z set it to the a value)
// Join the array back into a string
//return the new string

function nextLetter($string) {
    $stringParts = str_split($string);
    $newString = [];
    foreach ($stringParts as $letter) {
        // $newString .= chr(97);
        if (ord($stringParts[$letter]) == 122) {
            $newString .= chr(97);
        } else if (ord($stringParts[$letter]) == 90) {
            $newString .= chr(65);
        } else if (chr($stringParts[$letter]) > 65 && chr($stringParts[$letter]) < 90) {
            $newString .= chr($string[$letter] + 1);
        } else if (chr($stringParts[$letter]) > 97 && chr($stringParts[$letter]) < 121) {
            $newString .= chr($stringParts[$letter] + 1);
        }
    }
    $changedString = join($newString);
    return $changedString;
}
$string = "apple";
$changedString = nextLetter($string);
print("$changedString\r\n");

?>