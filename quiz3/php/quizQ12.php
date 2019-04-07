
<?php
// Write a program to change the capitalization of all letters in a given string.

    $givenString = "Hungry";
    function switchCapitalization() {
        $givenStringArray = str_split($givenString);
        foreach($givenStringArray as $character) {
            if(ctype_upper($character)){
                lcfirst($character);
            } else if(ctype_lower($character)){
                ucfirst($character);
            }
        }
        $newString = join($givenStringArray);
        return $newString;
    }
    switchCapitalization();
    print("$newString \r\n");
?>