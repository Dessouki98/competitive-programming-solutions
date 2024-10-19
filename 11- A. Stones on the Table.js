let input = ""
process.stdin.on("data", data => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data
})
process.stdin.on("end", () => {
    let line = input.trim().split("\n")[1].split(" ")[0]
    let count = 0;
    for (let i = 0; i < line.length - 1; i++) {
        if (line[i] === line[i + 1]) {
            count++
        }
    }
    console.log(count)
})