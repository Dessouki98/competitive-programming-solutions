let input = ""
process.stdin.on('data', (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data
})
process.stdin.on("end", () => {
    let line = input.toString().trim()
    let charsMap = new Map()
    let count = 0
    for (let i = 0; i < line.length; i++) {
        count = charsMap.get(line[i]) === undefined ? 0 : charsMap.get(line[i])
        charsMap.set(line[i], ++count)
        count = 0
    }
    let counter = 0
    for (let [key, value] of charsMap) {
        counter = value === 1 ? ++counter : ++counter
    }
    console.log(counter % 2 === 1 ?  "IGNORE HIM!" : "CHAT WITH HER!")
})