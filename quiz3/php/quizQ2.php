
<?php
// 2. Write a program to rotate the string 'javascript' by periodically removing one letter from the end of the string and attaching it to the front.

$string = "javascript";
$stringLength = strlen($string);

function rotateString($string) {
    $lastLetter = substr($string, 9, 1);
    $restOfString = substr($string, 0, 9);
    $string = $lastLetter.$restOfString;
    return ($string);
}

rotateString();
?>