let input = ""
process.stdin.on("data", data => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data
})
process.stdin.on("end", data => {
    let keys = input.trim().split("\n")[0].split(" ")
        .map(word => word.replace(/\r/g, ''))
    let values = input.trim().split("\n")[1]
    let myObject = {}
    keys.forEach((key, index) => {
        myObject[key + index + " "] = 0;
    })
    for (index of values) {
        let keyIndex = Object.keys(myObject)[index - 1]
        myObject[keyIndex]++
    }
    let sum = 0;
    for (let key in myObject) {
        sum += Number(key.slice(0, -2)) * myObject[key]
    }
    console.log(sum)
})

