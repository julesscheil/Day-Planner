// DOM Variables
var currentDay=$("#currentDay");

// Javascript Variables
currentDayTitle=moment().format("dddd, MMMM Do YYYY");
currentDay.text(currentDayTitle);


// Function Definitions

function hourColors() {
    var currentHour = moment().format("HH");

    $(".description").each(function () {
        var hourID = $(this).attr("id");
        console.log(hourID);
        console.log(currentHour);
        if (hourID<currentHour) {
            console.log("past");
        } else if (hourID==currentHour) {

        }
       
    })
};

// Event Listeners

// Function Calls
hourColors();