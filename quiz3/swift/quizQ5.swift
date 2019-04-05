// 5. Write a program to find the largest of three given integers.

var numbers = [10, 20, 15]
var largestNumber = 0

for i in numbers {
    if i > largestNumber {
        largestNumber = i
    }
}

print(largestNumber)
