let inputData = "";
process.stdin.on("data", (data) => {
    if (data.toString().trim() === 'end') {
        process.stdin.emit("end")
    }
    inputData += data;
})
process.stdin.on("end", () => {
    const lines = inputData.trim().split("\n")
    const n = Number(lines.shift())
    let count = 0;
    lines.forEach((line) => {
        let [p, v, t] = line.trim().split(' ').map(Number)
        if ((p+v+t) >= 2) {
            count++
        }
    })
    console.log(count)
})
