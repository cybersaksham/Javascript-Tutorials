let today = new Date();

class Employee {
    constructor(givenName, givenExp, givenDiv) {
        this.name = givenName;
        this.exp = givenExp;
        this.div = givenDiv;
    }
    slogan() {
        return `This company is best. Regards, ${this.name}`
    }
    joiningYear() {
        return today.getFullYear() - this.exp;
    }
    static add(a, b) {
        return a + b;
    }
}

let emp1 = new Employee("emp1", 20, "div1");
console.log(emp1);
console.log(emp1.slogan());
console.log(emp1.joiningYear());

// Static methods can be used without making object
console.log(Employee.add(4, 5));

// Inheritance
class Programmer extends Employee {
    constructor(givenName, givenExp, givenDiv, lang) {
        super(givenName, givenExp, givenDiv);
        this.lang = lang;
    }
    favLang() {
        if (this.lang == "Python") {
            return `Python`;
        } else {
            return `JavaScript`;
        }
    }
}

let emp2 = new Programmer("emp2", 15, "div2", "Python");
console.log(emp2);
console.log(emp2.slogan());
console.log(emp2.joiningYear());
console.log(emp2.favLang());