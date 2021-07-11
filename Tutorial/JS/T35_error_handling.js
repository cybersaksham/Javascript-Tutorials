let s1 = "Hello";

if (s1 != undefined) {
    // throw new Error('this is not undefined');
    console.log("This is not undefined");
} else {
    console.log("This is undefined");
}

// Error handling
try {
    snfjalscji
} catch (error) {
    console.log("Here is an error");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
} finally {
    console.log("This will run in any condition");
}