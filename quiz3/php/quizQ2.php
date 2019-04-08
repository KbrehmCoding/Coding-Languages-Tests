
<?php
// 2. Write a program to rotate the string 'javascript' by periodically removing one letter from the end of the string and attaching it to the front.

$string = "javascript";

function rotateString($string) {
    $lastLetter = substr($string, 9);
    $restOfString = substr($string, 0, 9);
    return $lastLetter + $restOfString;
}

function runRotateString() {
    for($x = 0; $x <= strlen($string); $x++) {
        $string = rotateString($string);
        print $string;
        sleep(2);
    }
}

runRotateString();
?>