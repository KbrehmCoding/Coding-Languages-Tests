// 6. Write a program to replace every character in a given string with the character following it in the alphabet.

// Iterate through the string characters or slice the string up into an array to iterate through
// For(each?) loop to go through them and then stop
// If else statements to determine if it is uppercase or lowercase
// Increment the character ACSII value and add it to the new array
// Join the new away back into a string
// Return and Print the new string
var givenString = "orange"

for i in givenString {
    if UInt8(i) == 122 {
        UInt8(i) = 97
    } else if UInt8(i) == 90 {
        UInt8(i) = 65
    } else if UInt8(i) > 65 && UInt8(i) < 90 {
        UInt8(i) = UInt8(i) + 1
    } else if UInt8(i) > 97 && UInt8(i) < 121 {
        UInt8(i) = UInt8(i) + 1
    }
}

print(newString)