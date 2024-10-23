let input = ""
process.stdin.on("data", (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data
})
process.stdin.on("end", () => {
    let line = input.toString().trim().split(" ").map(word => word.replace(/\r/g, "")).map(Number)
    let count = 1
    let price = line[0]
    let change = line[1]
    let summedPrice = line[0]
    while (summedPrice % 10 !== change && summedPrice % 10 !== 0) {
        count++
        summedPrice += price
    }
    console.log(count);
})