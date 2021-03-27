// Variables
var currentDay=$("#currentDay");
// Get title date
currentDayTitle=moment().format("dddd, MMMM Do YYYY");
currentDay.text(currentDayTitle);

// text box saver on click of save button
$('.saveBtn').click(function() {
    var eventContents = $('textarea').val();
    console.log(eventContents);
    localStorage.setItem("eventContents", eventContents);
    //send to server and process response
});



    // Get current hour
    var currentHour = moment().format("HH");

    // For each id with a class of description, set the following
    $(".description").each(function () {
        // Get value of ID in class = description
        var hourID = $(this).attr("id");
        // If  hour value is less than current hour set class to past
        if (hourID<currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future","present");
        } 
        // If  hour value is less than current hour set class to present
        else if (hourID===currentHour) {
            $(this).addClass("present");
            $(this).removeClass("future","past");
        } 
        // If  hour value is less than current hour set class to future
        else if (hourID>currentHour) {
            $(this).addClass("future");
            $(this).removeClass("present","past");
        }
       
    })

