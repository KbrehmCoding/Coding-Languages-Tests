// Write a program to find the longest string from a given array.

// This is the array that will be tested in the function
var catNames = ["bob", "tuxie", "Scarlett"];

// Will need to sort this array like I did with the vowels but this time looking for the length property rather than the symbol property
function giveLongestName(array) {
    // Sets the beginning value of longestName to 0
    var longestName = "";

// You pass in the length attribute inside of the sort so it knows what parameters to search for
// Creates the loop that goes through all the items in the array catNames
    array.forEach(function(catNames){
// Checks to see if the first word is longer than the variable longestName, if it is then it becomes the new value of var longestName,
// then it compares the new value to the next name and see if it is longer and then sets it as the new value, and it kepps doing this
// until it has cycled through all the names in the array
        if(catNames.length > longestName.length) {
            longestName = catNames;
        }
    });
// Then have it return the item that is the longest in the array
    return longestName;

}

// This just shows the value in the terminal so we know it works
    console.log("The longest cat name is " + giveLongestName(catNames));