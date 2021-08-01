// Normal Arrow Function
const func1 = () => {
    console.log("This is function 1");
}
func1();

// Returning String
const func2 = () => "This is function 2";
console.log(func2());

// Returning Object
const func3 = () => ({ 'name': 'saksham' });
console.log(func3());

// One Argument
const func4 = name => "Good Morning " + name;
console.log(func4('saksham'));

// More than one Argument
const func5 = (name, end) => "Good Morning " + name + " " + end;
console.log(func5('saksham', 'bye'));