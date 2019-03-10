# changing a given number into hours and minutes


# devide the numberGiven by 60 to get the hours then label the remainder as minutes
numGiven =  int(raw_input("Enter a number to find out how many hours and minutes it is: "))
hours = numGiven / 60
minutes = numGiven % 60

def howLong():
    print "{} is {} hours and {} minutes".format(numGiven, hours, minutes)

howLong()