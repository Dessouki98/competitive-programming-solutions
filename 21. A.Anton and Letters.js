let input = ""
process.stdin.on("data", chunk => {
    if (chunk.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += chunk.toString();
})
process.stdin.on("end", () => {
    const setToBe = input.trim().replace(/[\r{}]/g, "").toString().split(", ").map(String)
    const uniqueArray = [...new Set(setToBe)].filter((value ) => value !== '')
    console.log(uniqueArray.length)
})