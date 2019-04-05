<!-- 1. Write a program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. -->
<?php
    $a = 5;
    $b = 6;
    $c = 7;
    $s = ($a+$b+$c)/2;
    $area = sqrt(($s*($s-$a)*($s-$b)*($s-$c)));

    print($area);
?>