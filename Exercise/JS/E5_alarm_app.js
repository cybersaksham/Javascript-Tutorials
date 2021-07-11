/*
Create an alarm clock where user set time & alarm ring at that time
*/

let alarmStopped = false;

// Grabbing alert
const alertMsg = document.getElementById('alert');

// Grabbing Form Elements
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const select = document.getElementById('select');
const setAlarm = document.getElementById('setAlarm');
const stopAlarm = document.getElementById('stopAlarm');

// Validating Hour
hour.addEventListener('input', () => {
    let reg = /^([0-9]){1,2}$/;
    let correct = true;
    if (!reg.test(hour.value)) {
        correct = false;
    } else if (!(Number(hour.value) < 13 & Number(hour.value) > 0)) {
        correct = false;
    }
    if (correct) {
        hour.classList.remove('is-invalid');
    } else {
        hour.classList.add('is-invalid');
    }
})

// Validating Minute
minute.addEventListener('input', () => {
    let reg = /^([0-9]){1,2}$/;
    let correct = true;
    if (!reg.test(minute.value)) {
        correct = false;
    } else if (!(Number(minute.value) < 60 & Number(minute.value) >= 0)) {
        correct = false;
    }
    if (correct) {
        minute.classList.remove('is-invalid');
    } else {
        minute.classList.add('is-invalid');
    }
})

// Validating Second
second.addEventListener('input', () => {
    let reg = /^([0-9]){1,2}$/;
    let correct = true;
    if (!reg.test(second.value)) {
        correct = false;
    } else if (!(Number(second.value) < 60 & Number(second.value) >= 0)) {
        correct = false;
    }
    if (correct) {
        second.classList.remove('is-invalid');
    } else {
        second.classList.add('is-invalid');
    }
})

// Making time objects
let time = new Date();
let setTimeTemp = new Date();

// Declaring time variables
let setHour;
let setMinutes;
let setSeconds;

// Time left variables
let timeLeft;

let audio = new Audio('alarm.mp3');

// Setting Alarm
setAlarm.addEventListener('click', (e) => {
    e.preventDefault();
    if (setAlarm.classList.contains('btn-primary')) {
        alarmStopped = false;
        // Setting hour in 24 format
        if (select.value == 1) {
            if (hour.value == "12") {
                setHour = 0;
            } else {
                setHour = Number(hour.value);
            }
        } else {
            if (hour.value == "12") {
                setHour = Number(hour.value);
            } else {
                setHour = Number(hour.value) + 12;
            }
        }
        setMinutes = Number(minute.value);
        setSeconds = Number(second.value);

        // Showing message
        let className = "";
        let msg = "";
        let text = "";
        if (hour.value == "" | minute.value == "" | second.value == "") {
            className = "danger";
            msg = "Error";
            text = "Some fields are empty. Cannot set alarm.";
        } else if (hour.classList.contains('is-invalid') | minute.classList.contains('is-invalid') | second.classList.contains('is-invalid')) {
            className = "danger";
            msg = "Error";
            text = "Some fields are invalid. Cannot set alarm.";
        } else {
            // Making object of time set
            setTimeTemp = new Date(`${time.getMonth() + 1}-${time.getDate()}-${time.getFullYear()} ${setHour}:${setMinutes}:${setSeconds}`);

            // Finding time left
            timeLeft = setTimeTemp.getTime() - time.getTime();

            // Ringing alarm
            console.log(timeLeft);
            if (timeLeft > 0 & !alarmStopped) {
                setTimeout(() => {
                    audio = new Audio('alarm.mp3')
                    audio.play();
                }, timeLeft);

                className = "success";
                msg = "Success";
                text = "Alarm will ring on time."

                // Disabling setAlarm button
                setAlarm.classList.remove('btn-primary');
                setAlarm.classList.add('btn-secondary');

                // Enabling stopAlarm button
                stopAlarm.classList.add('btn-primary');
                stopAlarm.classList.remove('btn-secondary');

                // Disabling form
                hour.disabled = true;
                minute.disabled = true;
                second.disabled = true;
                select.disabled = true;
            } else {
                className = "danger";
                msg = "Error";
                text = "Time has alrady gone. Cannot set alarm."
            }
        }
        alertMsg.innerHTML = `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
                                <strong>${msg}:</strong> ${text}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`;
        setTimeout(() => {
            alertMsg.innerHTML = "";
        }, 3000);

        // Clearing form
        hour.value = "";
        minute.value = "";
        second.value = "";
        select.value = 1;
    }
})

// Stopping Alarm
stopAlarm.addEventListener('click', (e) => {
    e.preventDefault();
    if (stopAlarm.classList.contains('btn-primary')) {
        hourLeft = 0;
        minuteLeft = 0;
        secondLeft = 0;

        // Enabling setAlarm button
        setAlarm.classList.add('btn-primary');
        setAlarm.classList.remove('btn-secondary');

        // Disabling stopAlarm button
        stopAlarm.classList.remove('btn-primary');
        stopAlarm.classList.add('btn-secondary');

        // Enabling form
        hour.disabled = false;
        minute.disabled = false;
        second.disabled = false;
        select.disabled = false;

        // Stopping alarm
        alarmStopped = true;
        audio.pause();

        // Displaying message
        alertMsg.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                                <strong>Stopped:</strong> Alarm is forcefully stopped.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`;
        setTimeout(() => {
            alertMsg.innerHTML = "";
        }, 3000);
    }
})