$(document).ready(() => {
    $("#convert").on("click", () => {
        var numGiven = $("#num1").val();
        var step1 = numGiven - 32;
        var step2 = step1 * 5;
        var step3 = step2 / 9;
        document.write(step3 + " Degrees Celsius");
    });
});