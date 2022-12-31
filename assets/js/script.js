//create an array of timeblock objects

const calenderRow = [
    {
        textArea: "#text-area-9am",
        hour: 09
    },
    {
        textArea: "#text-area-10am",
        hour: 10
    },
    {
        textArea: "#text-area-11am",
        hour: 11
    },
    {
        textArea: "#text-area-12pm",
        hour: 12
    },
    {
        textArea: "#text-area-13pm",
        hour: 13
    },
    {
        textArea: "#text-area-14pm",
        hour: 14
    },
    {
        textArea: "#text-area-15pm",
        hour: 15
    },
    {
        textArea: "#text-area-16pm",
        hour: 16
    },
    {
        textArea: "#text-area-17pm",
        hour: 17
    }
];

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
