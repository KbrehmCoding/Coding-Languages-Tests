// 10. Write a program to count the number of vowels in a given string.

var givenString = "I want ice cream"
var numVowels = 0

for i in givenString {
    if i == "a" , "A", "e" , "E" , "i" , "I" , "o" , "O" , "u" , "U" {
        numVowels += 1
    }
}

print(numVowels)
