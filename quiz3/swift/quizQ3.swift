// 3. Write a program to calculate multiplication and division of two numbers (input from user).


// you need to use : when asigning the type such as int and double, or string.
// learned that doubles are used for large decimals
// The swift version of input in readLine() which you set as the value of a var
// you have to add a "!" after the readline() but before the larger closing parenthases in order to make the Int translation work
// You are required to set a default value incase the user doesnt enter anything (?? "value here")
// Will need to make a if then statement to handle the operator choice made by the user
// Then print the results


print("Would you like to multiply or divide (m/d)?")
var userOperator = readLine() ?? "m"
print("Please enter the first number")
var num1 = Int(readLine()!) ?? 0
print("Please enter the second number")
var num2 = Int(readLine()!) ?? 0

if userOperator == "m" {
    print("\(num1) multiplied by \(num2) equals \(num1 * num2)")
} else if userOperator == "d" {
    print("\(num1) divided by \(num2) equals \(num1 / num2)")
} else {
    print("error")
}
