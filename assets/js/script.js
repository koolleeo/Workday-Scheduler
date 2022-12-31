
//function to display current datetime to page, and track current hour
function displayClock() {

    //get the current time : local scope
    let timeNow = moment().format('dddd, MMMM Do HH:mm:ss');

    //polling variable
    let hourStage = Number(moment().format('HH')); 

    //current date
    let currentDate = moment().format('YYYY-MM-DD');

    //render current day to page
    $('#currentDay').text(timeNow);

}

setInterval(displayClock, 1000);