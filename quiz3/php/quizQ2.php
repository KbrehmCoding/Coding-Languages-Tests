<!-- 2. Write a program to rotate the string 'javascript' by periodically removing one letter from the end of the string and attaching it to the front. -->

<?php
    $string = "javascript";

    function rotateString() {
        $lastLetter = $string[9];
        $restOfString = substr($string, 0, 8);
        return($lastLetter + $restOfString);
    }

    setInterval(function() {
        print($string);
        $string = rotateString($string);
    }, 2000);

?>