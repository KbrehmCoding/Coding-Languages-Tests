
<?php
// 10. Write a program to count the number of vowels in a given string.

function countVowels($string) {
    $stringParts = str_split($string);
    $numVowels = 0;
    $vowels = array("a", "A", "e", "E", "i", "I", "o", "O", "u", "U");
    foreach ($stringParts as $i) {
        if (in_array($i, $vowels)) {
            $numVowels++;
        }
    }
    return $numVowels;
}

$string = "banana";
$numVowels = countVowels($string);

echo "There are $numVowels vowels in $string\r\n";
?>