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

// initialise trackChanges object - capture date/time when page loaded
let trackChanges;

//initialise objProxy variable - proxy object to listen for changes to current hour (needed to trigger CSS class change)
let objProxy;

$(document).ready(function(){

//immediately invoked function to set up object with current hour and current date
/* IIFE */
(function initialise() {

    //define blueprint of trackchanges object

    function monitorObject(currentHour, currentDate, lastModifedTimestamp) {
        this.currentHour = currentHour;
        this.currentDate = currentDate;
        this.lastModifedTimestamp = lastModifedTimestamp;
    };

    //declare variables

    let $currentHour, $currentDate, $currentTimestamp;

    //set values of variables utilising moment.js

    $currentHour = Number(moment().format('HH'));
    $currentDate = moment().format('YYYY-MM-DD');
    $currentTimestamp = moment().format('YYYY-MM-DD HH:mm:ss');

    //create instance of trackchanges object and pass arguments

    trackChanges = new monitorObject($currentHour, $currentDate, $currentTimestamp);

    //create console 'log' to confirm trackchanges object created (useful for testing)

    console.log('trackchanges object created');

    //trigger initial application of CSS classes
    calenderRowCSS();    

})();

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

//create function to apply CSS class based on time : by hour
function calenderRowCSS() {

    calenderRow.forEach((arr) => {

        $(arr.textArea).addClass(trackChanges.currentHour < arr.hour ? 'future' : trackChanges.currentHour == arr.hour ? 'present' : 'past')
        .removeClass(trackChanges.currentHour < arr.hour ? 'past present' : trackChanges.currentHour == arr.hour ? 'future past' : 'present future');

        //log textArea to console for validation
        console.log(arr.textArea);
    })

}

//create a proxy object that listens for changes of currentHour on trackChanges object

objProxy = new Proxy(trackChanges, {  

    set: function (target, key, value) { 

        //log change to console for validation
        console.log(`${key} changed from ${trackChanges.currentHour} to ${value}`);   

        //updated value of target object
        target[key] = value;

        //execute function on change
        calenderRowCSS();
        return true; 
    },

});

//CREATE LOCAL STORAGE SOLUTION
/* just needs to storage for current date - wipe when the day changes to next day */

//create blueprint for storage object
function storeAreaInput(date, textAreaId, textArea) {
    this.date = date;
    this.textAreaId = textAreaId;
    this.textArea = textArea;
}

});