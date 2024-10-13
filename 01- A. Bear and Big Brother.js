process.stdin.on('data', (input) => {
    let [lWeight, bWeight] = input.toString().trim().split(" ").map(Number)
    let year = 0
    while (lWeight <= bWeight) {
        lWeight *= 3;
        bWeight *= 2;
        year++;
    }
    console.log(year);
});
