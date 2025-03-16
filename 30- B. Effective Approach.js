let input = "";
process.stdin.on("data", (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data.toString()
})

process.stdin.on("end", () => {
    let [n, numbers, q, quieries] = input.split("\n");
    numbers = numbers.split(" ").map(Number)
    mapOfNumbers = new Map()
    numbers.forEach((number, i) => {
        mapOfNumbers.set(number, i + 1);
    });
    let fromBegin = 0;
    let fromEnd = 0;
    n = Number(n.trim());
    quieries = quieries.split(" ").map(Number);
    quieries.forEach((number, i) => {
        fromBegin += mapOfNumbers.get(number);
        fromEnd += n - mapOfNumbers.get(number) + 1;
    })
    console.log(fromBegin, fromEnd);
})
