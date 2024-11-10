let input = ""
process.stdin.on("data", (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data;
})
process.stdin.on("end", () => {
    let [pos, com] = input.trim().replace(/\r/g, "").split("\n").map(String)
    let count = 1
    for (const cmnd of com) {
        if (pos[count - 1] === cmnd) {
            count++
        }
    }
    console.log(count);
})