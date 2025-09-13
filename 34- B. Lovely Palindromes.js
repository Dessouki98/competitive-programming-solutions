input = "";
process.stdin.on("data", (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data;
})

process.stdin.on("end", () => {

    let word = input.trim().split("");
    console.log(word.join("") + word.reverse().join(""));
})