// Object Literal
let car = {
    name: "Alto",
    topSpeed: 100,
    run: function () {
        console.log("Car is running...");
    }
}

console.log(car);
console.log(car.name);
console.log(car.topSpeed);
console.log(car.run());

// Constructors
function genCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running...`);
    }
    this.analyze = function () {
        console.log(`This car is slower by ${510 - this.topSpeed} Km/h than buggatti`);
    }
}

car1 = new genCar("Audi", 180);
console.log(car1);
console.log(car1.name);
console.log(car1.topSpeed);
console.log(car1.run());
console.log(car1.analyze());

car2 = new genCar("Buggatti", 510);
console.log(car2);
console.log(car2.name);
console.log(car2.topSpeed);
console.log(car2.run());
console.log(car2.analyze());
