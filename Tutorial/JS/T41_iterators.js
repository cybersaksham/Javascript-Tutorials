let arr = ['item1', 'item2', 'item3', 'item4'];
console.log(arr);

// Making iterator
function iter(values) {
    let nextIndex = 0;
    // We will return an object
    return {
        next: () => {
            if (nextIndex < values.length) {
                // We will return below object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            } else {
                return { done: true }
            }
        }
    }
}

// Using iterator
const obj = iter(arr);
console.log(obj.next().value); // Item 1
console.log(obj.next().value); // Item 2
console.log(obj.next().value); // Item 3
console.log(obj.next().value); // Item 4
console.log(obj.next()); // done