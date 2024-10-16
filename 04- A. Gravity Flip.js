let input = ""
process.stdin.on("data", (data)=> {
    input += data
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
})
process.stdin.on("end", ()=> {
    lines = input.trim().split("\n")
    let numOfCols = Number(lines[0])
    let cols = lines[1].split(" ").map(Number)
    cols.sort((a, b) =>  a - b)
    console.log(...cols)
})