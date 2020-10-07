
// display current day and time from moment.js
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));


// set times for comparison based on moment time
var nowTime = moment();
nowtTime = nowTime.startOf("hour");
var beforeTime = moment().startOf("day").add(9, "hours");

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

// function to change class based on current time
function timeCheck() {
    
    nineHr = moment().startOf("day").add(9, "hours");
    nowTime = nowTime.startOf("hour");

    if (nowTime.isAfter(nineHr)) {
        $("#input9").addClass("past");
    } else if (nowTime.isBefore(nineHr)) {
        $("#input9").addClass("future");
    } else if (nowTime.isSame(nineHr)) {
        $("#input9").addClass("present");
    };
// ----

    tenHr = moment().startOf("day").add(10, "hours")
    nowTime = nowTime.startOf("hour");

    if (nowTime.isAfter(tenHr)) {
        $("#input10").addClass("past");
    } else if (nowTime.isBefore(tenHr)) {
        $("#input10").addClass("future");
    } else if (nowTime.isSame(tenHr)) {
        $("#input10").addclass("present");
    }
// ----  

    elevenHr = moment().startOf("day").add(11, "hours")
    nowTime = nowTime.startOf("hour");

    if (nowTime.isAfter(elevenHr)) {
        $("#input11").addClass("past");
    } else if (nowTime.isBefore(elevenHr)) {
        $("#input11").addClass("future");
    } else if (nowTime.isSame(elevenHr)) {
        $("#input11").addClass("present");
    }
// ----

    twelveHr = moment().startOf("day").add(12, "hours")
    nowTime = nowTime.startOf("hour");

    if (nowTime.isAfter(twelveHr)) {
        $("#input12").addClass("past");
    } else if (nowTime.isBefore(twelveHr)) {
        $("#input12").addClass("future");
    } else if (nowTime.isSame(twelveHr)) {
        $("#input12").addClass("present");
    }
// ----

    oneHr = moment().startOf("day").add(13, "hours")
    nowTime = nowTime.startOf("hour");

    if (nowTime.isAfter(oneHr)) {
        $("#input1").addClass("past");
    } else if (nowTime.isBefore(oneHr)) {
        $("#input1").addClass("future");
    } else if (nowTime.isSame(oneHr)) {
        $("#input1").addClass("present")
    }
// ----

    twoHr = moment().startOf("day").add(14, "hours")
    nowTime = nowTime.startOf("hour");

    if (nowTime.isAfter(twoHr)) {
        $("#input2").addClass("past");
    } else if (nowTime.isBefore(twoHr)) {
        $("#input2").addClass("future");
    } else if (nowTime.isSame(twoHr)) {
        $("#input2").addClass("present")
    }
// ----

    threeHr = moment().startOf("day").add(15, "hours")
    nowTime = nowTime.startOf("hour");

    if (nowTime.isAfter(threeHr)) {
        $("#input3").addClass("past");
    } else if (nowTime.isBefore(threeHr)) {
        $("#input3").addClass("future");
    } else if (nowTime.isSame(threeHr)) {
        $("#input3").addClass("present")
    }
// ----

    fourHr = moment().startOf("day").add(16, "hours")
    nowTime = nowTime.startOf("hour");

    if (nowTime.isAfter(fourHr)) {
        $("#input4").addClass("past");
    } else if (nowTime.isBefore(fourHr)) {
        $("#input4").addClass("future");
    } else if (nowTime.isSame(fourHr)) {
        $("#input4").addClass("present")
    }
// ----

    fiveHr = moment().startOf("day").add(17, "hours");
    nowTime = nowTime.startOf("hour");

    if (nowTime.isAfter(fiveHr)) {
        $("#input5").addClass("past");
    } else if (nowTime.isBefore(fiveHr)) {
        $("#input5").addClass("future");
    } else if (nowTime.isSame(fiveHr)) {
        $("#input5").addClass("present");
    };
}

timeCheck();

// // loop to get input data from local storage
var num = [9, 10, 11, 12, 1, 2, 3, 4, 5];

for (var i = 0; i < num.length; i++) {
    var inputHour = localStorage.getItem(num[i]);
    
    $("#input" + num[i]).val(inputHour);
}

// event to save input data to local storage
$(".saveBtn").click(function () {
    event.preventDefault();
    
    var inputData = $(this).siblings(".form-control").val();
    var listHour = $(this).parent().data("hour");

    localStorage.setItem(listHour, inputData);
});




