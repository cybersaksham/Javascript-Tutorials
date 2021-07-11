function* numberGen(i) {
    while (true) {
        yield i++;
    }
}

const gen = numberGen(5);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());