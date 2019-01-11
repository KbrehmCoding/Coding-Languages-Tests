//3. Write a program to calculate multiplication and division of two numbers (input from user). Think two input boxes and two buttons.

$(document).ready(() => {
    $("#multiply").on("click", () => {
        var num1 = $("#num1").val();
        var num2 = $("#num2").val();
        var multiply = num1 * num2;
        var sumMulti = num1 + " Multiplied by " + num2 + " is " + multiply;
        document.write(sumMulti);
    });
    $("#divide").on("click", () => {
        var num1 = $("#num1").val();
        var num2 = $("#num2").val();
        var divide = num1 / num2;
        var sumDivi = num1 + " Divided by " + num2 + " is " + divide;
        document.write(sumDivi);
    });
});
