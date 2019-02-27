num1 = int(input("Enter temperature in Fahrenheit: "))
def convert(input):
    numGiven = num1
    step1 = numGiven - 32
    step2 = step1 * 5
    step3 = step2 / 9
    print(step3 + " Degrees Celsius")

convert()