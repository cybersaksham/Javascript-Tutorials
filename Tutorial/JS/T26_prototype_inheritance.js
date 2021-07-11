const proto1 = {
    slogan: function () {
        return "This company is best.";
    },
    changeName: function (newName) {
        this.name = newName;
    }
}

// Way 1
const obj = Object.create(proto1);

console.log(obj);

obj.name = "Saksham";
obj.role = "Programmer";
console.log(obj);

console.log(obj.slogan());
obj.changeName("Shubham");
console.log(obj);

// Way 2
const obj2 = Object.create(proto1, {
    name: { value: "Saksham", writable: true },
    role: { value: "Programmer" }
})
console.log(obj2);
obj2.changeName("Shubham");
console.log(obj2);

// Employee Constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

Employee.prototype.slogan = function () {
    return `This company is best. Regrards, ${this.name}`;
}

let objEmp = new Employee("Saksham", 100000, 10);
console.log(objEmp);
console.log(objEmp.slogan());

// Inheritance
function Programmer(name, salary, experience, lang) {
    Employee.call(this, name, salary, experience);
    this.lang = lang;
}

// Inheritting prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let objEmp2 = new Programmer("Shubham", 50000, 7, "JS");
console.log(objEmp2);
console.log(objEmp2.slogan());