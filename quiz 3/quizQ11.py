cats = ["Bob", "Tuxie", "Scarlett"]

# def name_length(cats):
#     count = 0
#     for i in cats:
#         if len(i) > count:
#             count = len(i)
#             longestName = i
#             return longestName
#     print "{} is the longest name in the array".format(longesttName)

# name_length(cats)

print max(cats , key = len)