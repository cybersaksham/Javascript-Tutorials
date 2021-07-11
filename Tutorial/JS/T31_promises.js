/*
Promises :
    - resolve
    - reject
    - pending
*/

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Promise is resolved...");
                resolve();
            } else {
                console.log("Promise is rejected...");
                reject('Sorry not fulfilled...')
            }
        }, 2000);
    })
}

func1().then(function () {
    console.log("Resolved...");
}).catch(function (error) {
    console.log(error);
})