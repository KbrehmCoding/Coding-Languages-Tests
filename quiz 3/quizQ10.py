# Write a program to count the number of vowels in a given string.

# Will need to tell the computer which letters are vowels
# Increment the number of vowels with each one it finds

string = "krista"


def howMany():
    numVowels = 0
    for char in string:
        if char in "aeiouAEIOU":
            numVowels += 1
    print numVowels

howMany()