let input = ""
process.stdin.on("data", (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data
})
process.stdin.on("end", () => {
    let word = input.toString().trim()
    word = word.replace(word.charAt(0),word.charAt(0).toUpperCase())
    console.log(word)
})