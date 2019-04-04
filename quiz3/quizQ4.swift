// Write a program to convert temperatures to and from Celsius, Fahrenheit.
//This is similar to question 3

print("Please enter a temperature in Celsius")
var celsius = Int(readLine()!) ?? 0

var fahrenheit = (celsius + 32) * 9 / 5

print("\(celsius) degrees Celsius is \(fahrenheit) degrees Fahrenheit")
