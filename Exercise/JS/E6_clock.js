/*
Make a webpage showing current time & update it each second
*/

// Grabbing Element
const clock = document.getElementById('clock');

// Declaring variables
let time;
let hours, minutes, seconds;
let msg;

// At reloading page
updateTime();

// Every Second
setInterval(() => {
    updateTime();
}, 1000);

// Updating Time
function updateTime() {
    time = new Date();
    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();
    checktime();
    clock.innerHTML = `${hours}:${minutes}:${seconds} ${msg}`;
}

// Checking Format of Time
function checktime() {
    // Checking for AM or PM
    if (hours > 12) {
        hours = hours - 12;
        msg = "PM";
    } else if (hours == 12) {
        msg = "PM";
    } else if (hours == 0) {
        hours = 12;
        msg = "AM";
    } else {
        msg = "AM";
    }

    // Checking for Hours
    hours = (hours < 10 ? "0" : "") + hours;

    // Checking for Minutes
    minutes = (minutes < 10 ? "0" : "") + minutes;

    // Checking for Seconds
    seconds = (seconds < 10 ? "0" : "") + seconds;
}