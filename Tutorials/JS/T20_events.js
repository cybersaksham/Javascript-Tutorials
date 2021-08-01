document.getElementById('heading').addEventListener('click', function (e) {
    console.log("You have clicked on heading!!!");
    console.log(e);

    // Position relative to object
    console.log(e.offsetX);
    console.log(e.offsetY);

    // Position relative to webpage
    console.log(e.clientX);
    console.log(e.clientY);
});

let btn = document.getElementById('btn');
btn.addEventListener('click', func1); // Only consider left click
btn.addEventListener('dblclick', func2);
btn.addEventListener('mousedown', func3); // Consider all types of clicks

function func1(e) {
    console.log("Thanks", e);
    e.preventDefault();
};

function func2(e) {
    console.log("Thanks its a double click", e);
    e.preventDefault();
};

function func3(e) {
    console.log("Thanks its a Mouse down", e);
    e.preventDefault();
};

let elem = document.querySelector('.no');

elem.addEventListener('mouseenter', function (e) {
    console.log("You entered no class");
});

elem.addEventListener('mouseleave', function (e) {
    console.log("You left no class");
});

elem.addEventListener('mousemove', function (e) {
    console.log("You moved mouse");
});