let input = ""
process.stdin.on("data", chunk => {
    if (chunk.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += chunk.toString()
})
process.stdin.on("end", () => {
    const [numOfWords, ...words] = input.split("\n")
    words
        .map(String)
        .map(value => value.replace(/\r/g, ""))
        .map(String)
        .filter(value => value !== '').map(value => {
        return value.length <= 10 ? value : value[0] + (value.length - 2) + value[value.length - 1]
    }).map(String).map(value => console.log(value))
})