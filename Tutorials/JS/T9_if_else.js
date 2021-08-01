const age = 65;
if (age == 19) {
    console.log("Age is 19");
}
else if (age == 65) {
    console.log("Age is 65");
}
else {
    console.log("Age is neither 19 nor 65");
}

const age_str = `65`;
if (age_str === 65) { // === return true if value & type both are same
    console.log("Age is 65 & Number");
}
else if (age_str == 65) { // == return true if value is same
    console.log("Age is 65 & string");
}
else {
    console.log("Age is neither 19 nor 65");
}

const age_str2 = 65;
if (age_str2 !== 65) { // !== return true if value & type anyone is different
    console.log("Age is 65 & Number");
}
else if (age_str2 != 65) { // != return true if value is different
    console.log("Age is 65 & string");
}
else {
    console.log("Age is neither 19 nor 65");
}

if ((typeof var1) !== 'undefined') {
    console.log("var1 is defined");
}
else {
    console.log("var1 is not defined");
}

const doesDrive = true;
const Age = 20;
if (doesDrive && age > 18) {
    console.log("You can drive");
}
else {
    console.log("You cannot drive");
}

// Ternary Conditions
const a = 21;
// console.log(condition ? if true : if false);
console.log(a == 20 ? "a is 20" : "a is not 20");