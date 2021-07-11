/*
You have to pretend to use a word api which will contain an object.
Then print definition from all results of api in dom.
*/

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', btnClickHandler);

function btnClickHandler() {
    // Instantiate an XHR object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'Ex4_data.json', true);

    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            let nothing = document.getElementById('nothing');
            nothing.style.display = 'none';

            let table = document.getElementById('table');
            table.innerHTML = `<thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Definition</th>
                                    </tr>
                                </thead>
                                <tbody id="rows">
                                </tbody>`;

            let obj = JSON.parse(this.responseText);
            let rows = document.getElementById('rows');
            let str = "";
            for (let i = 0; i < (obj.results).length; i++) {
                str += `<tr>
                            <th scope="row">${i + 1}</th>
                            <td>${(obj.results)[i].definition}</td>
                        </tr>`;
            }
            rows.innerHTML = str;
            statusShow("success");
        } else {
            statusShow("error");
        }
    }

    // Send the request
    xhr.send();
}

function statusShow(msg) {
    let status = document.getElementById('status');
    let strStatus = "";
    if (msg == "error") {
        strStatus += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Error :</strong> some problem occurred while fetching data.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
    } else if (msg == "success") {
        strStatus += `<div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Success :</strong> data is successfully fetched.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
    }
    status.innerHTML = strStatus;
    setTimeout(function () {
        status.innerHTML = ``;
    }, 3000)
}