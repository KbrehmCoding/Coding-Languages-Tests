# // 5. Write a program to find the largest of three given integers.
numbers = [13, 2, 10]

def compareNumbers():
    if numbers[0] > numbers[1] and numbers[0] > numbers [2]:
        print "The largest number is {}".format(numbers[0])
    elif numbers[1] > numbers[0] and numbers[1] > numbers [2]:
        print "The largest number is {}".format(numbers[1])
    else:
        print "The largest number is {}".format(numbers[2])


compareNumbers()