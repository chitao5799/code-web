$("#checkin").datepicker({
    dateFormat: 'dd/mm/yy'
});
$("#checkout").datepicker({
    dateFormat: 'dd/mm/yy'
});
$(".guests").click(function() {

    $(".guests").css({ "border-color": "rgb(38,138,195)", "box-shadow": "0px 0px 2px #268AC3" });
});
// $(".guests").on("onchange", function() {
//     $(".guests").css({ "border-color": "#767676" });
// });