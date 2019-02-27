#  3. Write a program to calculate multiplication and division of two numbers (input from user).

# TODO look up pyhon code to take user input in  the command line and use it in math functions
num1 = input("Please input first number: ")
num2 = input("Please input second number: ")
operator = input("Would you like to multiply these numbers, or divide them? : ")

def multiply():
    num1 = (num1).val()
    num2 = (num2).val()
    multiply = num1 * num2
    sumMulti = num1 + " Multiplied by " + num2 + " is " + multiply
    print(sumMulti)

def divide():
    num1 = (num1).val()
    num2 = (num2).val()
    divide = num1 / num2
    sumDivi = num1 + " Divided by " + num2 + " is " + divide
    print(sumDivi)



