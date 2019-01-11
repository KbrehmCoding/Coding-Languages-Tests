//changing a given number into hours and minutes
function mathWizard(numberGiven) {
    var numberGiven = $("#numberGiven").val();
    var hours = Math.floor(numberGiven / 60);
    var minutes = numberGiven % 60;
    var resultText = numberGiven + " is " + hours + " hours and " + minutes + " minutes";
    return resultText;
}

$(document).ready(() => {
    $("#submitButton").on("click", () => {
        var numberGiven = $("#numberGiven").val();
        var resultText = mathWizard(numberGiven);
        document.write(resultText);
    });
});

//devide the numberGiven by 60 to get the hours then label the remainder as minutes