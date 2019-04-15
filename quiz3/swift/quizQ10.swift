// 10. Write a program to count the number of vowels in a given string.

var givenString = "I want ice cream"
var vowels = "aeiouAEIOU"
var numVowels = 0


for i in givenString {
    if vowels.contains(i) {
        numVowels += 1
    }
}

print(numVowels)
