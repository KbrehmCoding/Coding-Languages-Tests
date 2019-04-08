
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
    $newString = array();
    foreach ($stringParts as $letter) {
        array_push($newString, ++$letter);
        // if (ord($stringParts[$letter]) == 122) {
        //     array_push($newString, "a");
        // } else if (ord($stringParts[$letter]) == 90) {
        //     array_push($newString, "A");
        // } else if (ord($stringParts[$letter]) > 65 && ($stringParts[$letter]) < 90) {
        //     array_push($newString, ++$letter);
        // } else if (ord($stringParts[$letter]) > 97 && ord($stringParts[$letter]) < 121) {
        //     array_push($newString, ++$letter);
        // }
    }
    $changedString = implode($newString);
    return $changedString;
}
$string = "Zoology";
$changedString = nextLetter($string);
print("$changedString\r\n");

?>