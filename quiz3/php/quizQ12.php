
<?php
// 12. Write a program to change the capitalization of all letters in a given string.

$givenString = "Hungry";

function switchCapitalization($givenString) {
    $givenStringArray = str_split($givenString);
    foreach ($givenStringArray as $index => $letter) {
        if (ctype_upper($letter) == true) {
            $givenStringArray[$index] = strtolower($letter);
        } else if (ctype_lower($letter) == true) {
            $givenStringArray[$index] = strtoupper($letter);
        }
    }
    $newString = join($givenStringArray);
    return $newString;
}
$newString = switchCapitalization($givenString);
print("$newString \r\n");

?>