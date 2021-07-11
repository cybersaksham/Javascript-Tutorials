for (let i = 0; i < 10; i++) {
    if (i == 4) {
        continue; // Forget this iteration & jump to next
    }
    if (i == 7) {
        break; // Break loop & move ahead
    }
    console.log(i);
}
console.log("Loop ends here...");