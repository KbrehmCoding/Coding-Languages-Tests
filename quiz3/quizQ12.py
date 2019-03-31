# // Write a program to change the capitalization of all letters in a given string.

# // Possibly need to split the string into an array of letters then deal with them each individually
# // Need to use toUpperCase and toLowerCase within if statements to check the current case of the letter so it can be swtiched
string = "North Carolina"

def case_switch():
    list(string)
    for x in string:
        if string.isupper():
            string.lower()
        elif string.islower():
            string.upper()
    newString = string.join("")
    print(newString)

case_switch()


# shortcut
print (string.swapcase())
