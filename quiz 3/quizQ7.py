# Write a program to capitalize the first letter of each word of a given string.
# to split stings in python (a.split(" "))
# how to affect only thee first letter of each item in an array "closets I can find so far is string[0][0]"
# to caitalize letters in python (a.upper())
# Connect the string back together string = "-".join(string)
# Return the new string

string = "hello world"

def capitalizeIt() :
    print(' '.join(word[0].upper() + word[1:] for word in string.split()))


capitalizeIt()

