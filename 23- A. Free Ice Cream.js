let input = ""
process.stdin.on("data", (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data.toString()
})
process.stdin.on("end", (data) => {
    const [numOnLineAndIce, ...words] = input.split("\n")
    let icePacks = numOnLineAndIce.split(" ").map(Number)[1]
    let depressed = 0;
    while (words.length) {
        let turn = words.shift().trim()
        if (turn.startsWith("+")) {
            icePacks += Number(turn.replace(/[ +]/g, ""))
        } else {

            if (icePacks >= Number(turn.replace(/- /g, ""))) {
                icePacks -= turn.replace(/- /g, "")
            }
            else {
                depressed++;
            }
        }

    }
    console.log(icePacks, depressed)
})