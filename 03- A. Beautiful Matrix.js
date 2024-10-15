let inputi = ""
const middle = {r: 2, c: 2}
let theOne = {}
process.stdin.on("data", (data) => {
    if (data.toString().trim() === 'end') {
        process.stdin.emit("end")
    }
    inputi += data;
})
process.stdin.on("end", () => {
    let lines = inputi.trim().split('\n')
    lines.forEach((line, row) => {
        zerosOnes = line.split(" ").map(Number)
        if (zerosOnes.includes(Number(1))) {
            theOne['r'] = row;
            theOne ['c'] = zerosOnes.findIndex(num => {
                return num === 1
            })
        }
    })
    moveRow = Math.abs(middle['r'] - theOne["r"])
    moveCol = Math.abs(middle["c"] - theOne["c"])
    console.log(moveCol + moveRow);
})