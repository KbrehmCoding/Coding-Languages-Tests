
<?php
// 10. Write a program to count the number of vowels in a given string.

    $string = "banana";
    $stringParts = str_split($string);
    $numVowels = 0;

    function countVowels(){
        foreach($stringParts as $i) {
            if ($i == [ "a" , "A", "e" , "E" , "i" , "I" , "o" , "O" , "u" , "U" ]) {
                $numVowels + 1;
            }
        }
        return $numVowles;
    }
    echo "There are $numVowles vowels in $string \r\n";
?>