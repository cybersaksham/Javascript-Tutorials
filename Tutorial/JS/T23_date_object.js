let today = new Date();
console.log(today);
console.log(typeof today);

let otherDate = new Date('10-12-2006 04:05:51');
console.log(otherDate);

let otherDate2 = new Date('Oct 12 2006');
console.log(otherDate2);

let otherDate3 = new Date('10/12/2006');
console.log(otherDate3);

console.log(today.getDay()); // 0 for sun, 1 for mon, .......

console.log(today.getDate());
console.log(today.getMonth()); // Starts from 0
console.log(today.getFullYear());

console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

console.log(today.getTime()); // no of milli seconds since 1 Jan 1970

// Setting time
otherDate.setDate(20);
otherDate.setMonth(2);
otherDate.setYear(2023);
console.log(otherDate);