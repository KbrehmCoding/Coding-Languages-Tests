#  3. Write a program to calculate multiplication and division of two numbers (input from user).

# look up pyhon code to take user input in  the command line and use it in math functions
# num1 = int(input("Please input first number: "))
# num2 = int(input("Please input second number: "))

# def multiply():
#     multi = num1 * num2
#     sumMulti = num1 + " Multiplied by " + num2 + " is " + multi
#     print(sumMulti)

# def divide():
#     divi = num1 / num2
#     sumDivi = num1 + " Divided by " + num2 + " is " + divi
#     print(sumDivi)

# operator = input("Would you like to multiply these numbers, or divide them? : ")
# while operator != "multiply" or operator != "divide":
#     if operator == "multiply":
#         multiply()
#     elif operator == "divide":
#         divide()
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




