/*
Make a html file which contains some links.
If link contain "javascript" word then fetch it.
*/

let a = document;
let arr_links = Array.from(a.links);
let arr_res = [];

arr_links.forEach(function (link) {
    if ((link.href).includes("javascript")) {
        arr_res.push(link.href);
    }
})

arr_res.forEach(function (item) {
    console.log(item);
})