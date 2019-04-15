// 12. Write a program to change the capitalization of all letters in a given string.
var givenString = "cATS aRE aweSOME"


func caseChange(givenString: String) -> String {
    for i in givenString {
        if isUpperCase(givenString(i)) {
            i = i.lowercased()
        } else if isLowerCase(givenString(i)) {
            i = i.uppercased()
        }
    }
    return givenString
}

print(caseChange(givenString))
