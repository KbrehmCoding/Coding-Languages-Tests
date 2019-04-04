// 8. Write a program to convert a given number to hours and minutes.

print("Please enter a number you want converted into hours and minutes")
var givenNumber = Int(readLine()!) ?? 0
var hours = givenNumber / 60
var minutes = givenNumber % 60

print("\(givenNumber) is \(hours) Hours and \(minutes) Minutes")