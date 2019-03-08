# // Write a program to capitalize the first letter of each word of a given string.

def CapitilizeIt(string):
    string = string.toLowerCase().split(' ')
    for x in string :
        string[i] = string[i].chr(0).toUpperCase() + string[i].slice(1);

    return string.join(' ')


print CapitilizeIt("I want pizza please")