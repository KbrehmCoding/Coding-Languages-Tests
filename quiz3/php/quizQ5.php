<!-- 5. Write a program to find the largest of three given integers. -->
<?php
    $givenIntegers = [23, 45, 11];
    $largestInteger = 0;

    for ($i = 0; $i < count($givenIntegers); $i++) {
        if ($givenIntegers[$i] > $largestInteger)
            $largestInteger = $givenIntegers[$i];
    }
    print( "$largestInteger is the largest integer in the array \r\n");
?>