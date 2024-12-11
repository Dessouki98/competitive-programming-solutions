let input = ""
process.stdin.on("data", (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data.toString()
})
process.stdin.on("end", (data) => {
    input = input.split("\n")
    const [numOfOranges, maximumSize, d] = input[0].replace("/\r/g", "").trim().split(" ").map(Number)
    const oranges = input[1].trim().replace(/\r/g, "").split(" ").map(Number)
    let counter = 0;
    let sum = 0;
    for (let i = 0; i < numOfOranges; i++) {
        if (sum <= d) {
            if (oranges[i] <= maximumSize) {
                sum += oranges[i]
            }
        }
        if (sum > d) {
            counter++;
            sum = 0;
        }

    }
    console.log(sum > d ? counter + 1 : counter)
})