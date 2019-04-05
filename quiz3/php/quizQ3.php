<!-- 3. Write a program to calculate multiplication and division of two numbers (input from user).  -->

<?php
    $operator = readline("Would you like to multiply or divide? (m/d): " );
    $num1 = readline("Please enter the first number: " );
    $num2 = readline("Please enter the second number: " );
    $sumMulti = $num1 * $num2;
    $sumDivi = $num1 / $num2;

    if ($operator == "m") {
        print("$num1 multiplied by $num2 equals $sumMulti \r\n");
    } else if ($operator == "d") {
        print("$num1 divided by $num2 equals $sumDivi \r\n");
    } else print("error");
?>
