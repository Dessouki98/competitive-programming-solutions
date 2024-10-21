let input = ""
process.stdin.on("data", data => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data
})
process.stdin.on("end", () => {
    let events = input.trim().split("\n")[1].split(" ").map(Number)
    let count = 0;
    let sum = 0
    for (let i = 0; i < events.length; i++) {
        sum += events[i]
        if (sum < 0) {
            count++
            sum = 0;
        }
    }
    console.log(count)
})