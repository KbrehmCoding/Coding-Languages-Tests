#  2. Write a program to rotate the string 'javascript' by periodically removing one letter from the end of the string and attaching it to the front.
from threading import Timer

# string = "javascript" [::-1]
# print(string)
# Timer(2.0, print(string)).start()
string = "javascript"
print(string)

def rotateString(stringToRotate) :
    lastLetter = stringToRotate[8:]
    restOfString = stringToRotate[:8]
    return lastLetter + restOfString


def setInterval() :
    global string
    string = rotateString(string)
    print(string)
    Timer(2.0, setInterval).start()

setInterval()
