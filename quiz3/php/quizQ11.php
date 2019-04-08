
<?php
// 11. Write a program to find the longest string from a given array.

$givenArray = array("Bob", "Scarlett", "Tuxie");
$longestString = " ";

for($i = 0; $i < count($givenArray); $i++) {
    if (strlen($givenArray[$i]) > strlen($longestString)) {
        $longestString = $givenArray[$i];
    }
}
print "The longest string is $longestString  \r\n";
?>