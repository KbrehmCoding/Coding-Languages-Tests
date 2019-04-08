
<?php
// 9. Write a program to convert the letters of a given string in alphabetical order.

$string = "zyxwvutrsq";
$stringParts = str_split($string);
sort($stringParts);
$newString = implode('', $stringParts);
print("$newString \r\n");
?>