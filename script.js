
// display current day and time from moment.js
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));


// setting times for comparison based on moment time
var nowTime = moment();
nowtTime = nowTime.startOf("hour");
var beforeTime = moment().startOf('day').add(9, "hours");

// Hour blocks
var nineHr = beforeTime.add(0, "h");
nineHr = nineHr.format('hh:mm A');
$("#time9").text(nineHr);

var tenHr = beforeTime.add(1, "h");
tenHr = tenHr.format('hh:mm A');
$("#time10").text(tenHr);

var elevenHr = beforeTime.add(1, "h");
elevenHr = elevenHr.format('hh:mm A');
$("#time11").text(elevenHr);

var twelveHr = beforeTime.add(1, "h");
twelveHr = twelveHr.format('hh:mm A');
$("#time12").text(twelveHr);

var oneHr = beforeTime.add(1, "h");
oneHr = oneHr.format('hh:mm A');
$("#time1").text(oneHr);

var twoHr = beforeTime.add(1, "h");
twoHr = twoHr.format('hh:mm A');
$("#time2").text(twoHr);

var threeHr = beforeTime.add(1, "h");
threeHr = threeHr.format('hh:mm A');
$("#time3").text(threeHr);

var fourHr = beforeTime.add(1, "h");
fourHr = fourHr.format('hh:mm A');
$("#time4").text(fourHr);

var fiveHr = beforeTime.add(1, "h");
fiveHr = fiveHr.format('hh:mm A');
$("#time5").text(fiveHr);

function timeCheck() {
    
    nineHr = moment().startOf('day').add(9, "hours");

    if (nowTime.isAfter(nineHr)) {
        $("#input9").addClass("past");
    } else if (nowTime.isBefore(nineHr)) {
        $("#input9").addClass("future");
    } else if (nowTime.isSame(nineHr)) {
        $("#input9").addClass("present");
    };
// ----
    fiveHr = moment().startOf('day').add(17, "hours");

    if (nowTime.isAfter(fiveHr)) {
        $("#input5").addClass("past");
    } else if (nowTime.isBefore(fiveHr)) {
        $("#input5").addClass("future");
    } else if (nowTime.isSame(fiveHr)) {
        $("#input5").addClass("present");
    };
// ----
}

timeCheck()