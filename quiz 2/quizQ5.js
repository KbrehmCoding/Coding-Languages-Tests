// 5. Write a program to find the largest of three given integers.
var numbers = [1, 2, 3];

function compareNumbers(array) {
    var largestNumber = "";
    array.forEach(function(numbers){
        if(numbers > largestNumber) {
            largestNumber = numbers;
            }
        });
    return largestNumber;
}

    console.log("The largest number is " + compareNumbers(numbers));