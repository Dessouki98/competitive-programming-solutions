let input = ""
process.stdin.on("data", data => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data
})
process.stdin.on("end", data => {
    let keys = input.trim().split("\n")[0].split(" ").map(Number)
    let values = input.trim().split("\n")[1]
    let map = {}
    keys.forEach(key => {
        map[key] = 0
    })
    for (index of values) {
        map[Object.keys(map)[Number(index)]] = map[Object.values(map)[Number(index)]] + 1
    }
    console.log(map)

})

