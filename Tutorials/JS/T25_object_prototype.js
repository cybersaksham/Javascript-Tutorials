function Obj(givenName) {
    this.name = givenName;
}

Obj.prototype.getName = function () {
    return this.name;
}

let obj = new Obj("Saksham");
console.log(obj);
console.log(obj.getName());