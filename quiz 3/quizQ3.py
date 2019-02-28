#  3. Write a program to calculate multiplication and division of two numbers (input from user).

num1 = int(raw_input("Please input first number: "))
num2 = int(raw_input("Please input second number: "))

def multiply():
    print "{} multiplied by {} is {}".format(num1, num2, num1 * num2)

def divide():
    print "{} divided by {} is {}".format(num1, num2, num1 / num2)

operator = raw_input("Would you like to multiply these numbers, or divide them? : ")

while operator != "multiply" and operator != "divide":
    operator = raw_input("Would you like to multiply these numbers, or divide them? : ")

if operator == "multiply":
    multiply()
elif operator == "divide":
    divide()



