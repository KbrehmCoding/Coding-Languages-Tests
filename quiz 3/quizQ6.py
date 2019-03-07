# Write a program to replace every character in a given string with the character following it in the alphabet.

def nextLetter(string):
    newString = ''
    # Todo research python for loops
    for x in string:
        if 122 == ord(i):
            newString += chr(97)
        elif 90 == ord(i):
            newString += chr(65)
        elif 65 < ord(i) and string.ord(i) < 90 :
            newString += chr(ord(i) + 1)
        elif 97 < ord(i) and ord(i) < 121 :
            newString += chr(ord(i) + 1)

    return newString

print (nextLetter("Hello"))

nextLetter()