Fahrenheit = int(raw_input("Enter temperature in Fahrenheit: "))
Celsius = (Fahrenheit-32) * 5 / 9

def convert():
    print "{} Fahrenheit is {} Degrees Celsius".format(Fahrenheit, Celsius)

convert()