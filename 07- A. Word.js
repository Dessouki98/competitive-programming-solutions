let input = ""
process.stdin.on("data", (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data
})
process.stdin.on("end", () => {
    let word = input.toString().trim()
    let countC = 0
    let countS = 0
    for (let char of word) {
        if (char === char.toUpperCase()) {
            countC++
        } else countS++
    }
    console.log(countC > countS ? word.toUpperCase() : word.toLowerCase())
})