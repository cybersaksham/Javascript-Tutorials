// async returns a promise
async function greet() {
    console.log("Inside greet()");
    return "Hello";
}

console.log("Before calling greet()");
console.log(greet());
console.log("After calling greet()");

// async/await in fetch api
async function fetchAPI() {
    console.log("Inside fetchAPI()");
    const response = await fetch('https://api.github.com/users');
    console.log('Before response');
    const users = await response.json();
    console.log('user resolved');
    return users;
}

console.log("Before calling fetchAPI()");
let a = fetchAPI();
console.log(a);
a.then(data => console.log(data))
console.log("After calling fetchAPI()");