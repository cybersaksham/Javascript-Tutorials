let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', btnClickHandler);

function btnClickHandler() {
    console.log("fetchBtn clicked!!!");

    // Instantiate an XHR object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // What to do on progress
    xhr.onprogress = function () {
        console.log("On Progress...");
    }

    xhr.onreadystatechange = function () {
        console.log("Ready State is", xhr.readyState);
    }

    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.log("Some error occurred.");
        }
    }

    // Send the request
    xhr.send();

    console.log("GET done...");
}

let postBtn = document.getElementById('postBtn');
postBtn.addEventListener('click', btnClickHandler2);

function btnClickHandler2() {
    console.log("postBtn clicked!!!");

    // Instantiate an XHR object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');

    // What to do on progress
    xhr.onprogress = function () {
        console.log("On Progress...");
    }

    xhr.onreadystatechange = function () {
        console.log("Ready State is", xhr.readyState);
    }

    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.log("Some error occurred.");
        }
    }

    // Send the request
    params = `{"name":"test123","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("POST done...");
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', btnClickHandler3);

function btnClickHandler3() {
    console.log("popBtn clicked!!!");

    // Instantiate an XHR object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true);

    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            let str = "";
            for (let i = 0; i < (obj.data).length; i++) {
                str += `<li>${obj.data[i].employee_name}</li>`;
            }
            list.innerHTML = str;
        } else {
            alert("Some error occurred")
            console.log("Some error occurred.");
        }
    }

    // Send the request
    xhr.send();

    console.log("POP done...");
}