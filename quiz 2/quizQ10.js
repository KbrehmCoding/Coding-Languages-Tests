// Write a program to count the number of vowels in a given string.

// Will need to tell the computer which letters are vowels
// How to count the number of ocurences instead of just returning the vowels themselves
//may need to break the string down into an array of letters that are then compared to the vowels array

var string = "Angelica";

var vowels = /[AEIOUaeiou]/g;

console.log("There are " + string.match(vowels).length + " vowels in " + string);