let input = ""
process.stdin.on("data", (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data;
})
process.stdin.on("end", ()=> {
    let [str1,str2] = input.trim().split("\n")
    str1 = str1.toUpperCase().trim().toString()
    str2 = str2.toUpperCase().trim().toString()
    console.log(str1.localeCompare(str2))
})