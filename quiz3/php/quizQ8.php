
<?php
// 8. Write a program to convert a given number to hours and minutes.

$givenNumber = readline("Please enter the number you would like converted into hours and minutes: " );
$hours = floor($givenNumber / 60);
$minutes = $givenNumber % 60;
print("$givenNumber is $hours Hour(s) and $minutes Minute(s) \r\n");
?>