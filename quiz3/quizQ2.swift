// 2. Write a program to rotate the string 'javascript' by periodically removing one letter from the end of the string and attaching it to the front.

// Will need to create a for loop to iterate through the string
// May need to seperate the letters of the string into individual characters then move,
// the first letter and join them together each time the for loop iterates

func rotateThisString() {
    var word = "Chocolate"
    for x in word {
        word.sufix(1)
        word.prepend(sufix(1))
    }
}

rotateThisString()