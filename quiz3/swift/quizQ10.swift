// 10. Write a program to count the number of vowels in a given string.

var givenString = "I want ice cream"
var numVowels = 0

for i in givenString {
    if[ "a" , "A", "e" , "E" , "i" , "I" , "o" , "O" , "u" , "U" ].contains(i) {
        numVowels += 1
    }
}

print(numVowels)
