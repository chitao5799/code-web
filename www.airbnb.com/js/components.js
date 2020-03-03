$("#checkin").datepicker({
    dateFormat: 'dd/mm/yy'
});
$("#checkout").datepicker({
    dateFormat: 'dd/mm/yy'
});
$(".guests").click(function() {
    $(".guests").css({ "border-color": "rgb(38,138,195)", "box-shadow": "0px 0px 2px #268AC3" });
    $(".menuItem").css({ "display": "block" });
    $("#arrow").removeAttr("class");
    $("#arrow").addClass("fas fa-angle-up");
});
// $(".guests").on("onchange", function() {
//     $(".guests").css({ "border-color": "#767676" });
// });
var adultValue = 0,
    childrenValue = 0,
    infantValue = 0;
$("#adultPlus").click(function() {
    if (adultValue + childrenValue < 16) {
        adultValue++;
        $("#adultMinus").css("cursor", "pointer");
        $("#adultMinus circle").attr("stroke", "#02858A");
        $("#guestsNumber").text(adultValue + childrenValue + " guests");
        $("#adultMinus line").attr("style", "stroke:#5CB0B4;stroke-width:2")
        $("#clear").css("display", "inline");
        $("#adultNumber").text(adultValue + childrenValue + "+");
        if (infantValue == 0 && adultValue + childrenValue < 10)
            $("#guestsNumber").css("margin-right", " 276px");
        else
        if (infantValue == 0 && adultValue + childrenValue >= 10)
            $("#guestsNumber").css("margin-right", " 267px");
    } else {
        $("#adultPlus").css("cursor", "default");
        $("#adultPlus circle").attr("stroke", "#B3DADB");
        $("#adultPlus line").attr("style", "stroke:#B3DADB;stroke-width:2");
    }
});

$("#adultMinus").click(function() {
    if (adultValue + childrenValue > 0) {
        adultValue--;
        $("#adultPlus").css("cursor", "pointer");
        $("#adultPlus circle").attr("stroke", "#02858A");
        $("#guestsNumber").text(adultValue + childrenValue + " guests");
        $("#adultPlus line").attr("style", "stroke:#5CB0B4;stroke-width:2")

        $("#adultNumber").text(adultValue + childrenValue + "+");
        if (infantValue == 0 && adultValue + childrenValue < 10)
            $("#guestsNumber").css("margin-right", " 276px");
        else
        if (infantValue == 0 && adultValue + childrenValue >= 10)
            $("#guestsNumber").css("margin-right", " 267px");
    } else {
        if (infantValue == 0 && adultValue + childrenValue == 0) {
            $("#guestsNumber").text("Guests");
            $("#guestsNumber").css("margin-right", "287px");
        }

        $("#clear").css("display", "none");
        $("#adultMinus").css("cursor", "default");
        $("#adultMinus circle").attr("stroke", "#B3DADB");
        $("#adultMinus line").attr("style", "stroke:#B3DADB;stroke-width:2");
    }
});