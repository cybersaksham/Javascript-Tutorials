let myBtn = document.getElementById('myBtn');
let content = document.getElementById('content');

// Getting data from text file
function getData() {
    let url = "T33_sample.txt";
    console.log("Started getData()");
    fetch(url).then((response) => {
        console.log("Inside first then");
        return response.text();
    }).then((data) => {
        console.log("Inside second then");
        console.log(data);
    })
}

console.log("Before getData()");
getData();
console.log("After getData()");

// Getting data from API
function getJson() {
    let url = "https://api.github.com/users";
    console.log("Started getJson()");
    fetch(url).then((response) => {
        console.log("Inside first then");
        return response.json();
    }).then((data) => {
        console.log("Inside second then");
        console.log(data);
    })
}

console.log("Before getJson()");
getJson();
console.log("After getJson()");

// Posting data
function postJson() {
    let url = "https://dummy.restapiexample.com/api/v1/create";
    let data = `{"name":"testsnknk","salary":"123","age":"23"}`;
    let params = {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    }
    console.log("Started postJson()");
    fetch(url, params).then((response) => {
        console.log("Inside first then");
        return response.json();
    }).then((data) => {
        console.log("Inside second then");
        console.log(data);
    })
}

console.log("Before postJson()");
postJson();
console.log("After postJson()");