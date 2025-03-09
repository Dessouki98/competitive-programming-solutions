let input = "";
process.stdin.on("data", (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data.toString()
})

process.stdin.on("end", () => {
    let num = Array(...(input.trim())).map(Number);

    let {counter: magicSpell} = num.reduce(({currentNumber, counter}, current, numIndex, num) => {
        if (currentNumber.length > 1) {
            return {
                currentNumber: String(Array(...currentNumber).map(Number).reduce((a, b) => a + b, 0)),
                counter: counter + 1,
            }
        }
        return {currentNumber, counter};
    }, {
        currentNumber: String(num.reduce((a, b) => a + b, 0)),
        counter: 1,
    })
    if (num.length === 1) {
        magicSpell = 0
    }
    console.log(magicSpell);
})
