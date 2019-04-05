// 11. Write a program to find the longest string from a given array.

var givenArray = ["Bob", "Scarlett", "Tuxie"]
var longestString = " "

for i in givenArray {
    if i.count > longestString.count {
        longestString = i
    }
}

print(longestString)
