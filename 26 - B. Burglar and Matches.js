let input = "";
process.stdin.on("data", (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data.toString()
})

process.stdin.on("end", () => {
    let [mn, ...containers] = input.split("\n").map(x => x.trim());
    containers = containers.map(value => value.replace(" ", " : "))
        .map(value => value.split(" : ",)
            .map(Number))
        .sort(([keyA, valA], [keyB, valB]) => valB - valA);
    let maxNumOfContainers = mn.split(" ").map(Number).shift();
    let steeled = 0;
    let steeledVal = 0;
    for (let i = 0; i < containers.length - 1; i++) {
        if (steeled === maxNumOfContainers) {
            break;
        }
        if (steeled < maxNumOfContainers) {
            if (steeled + containers[i][0] <= maxNumOfContainers) {
                steeledVal += containers[i][0] * containers[i][1];
                steeled += containers[i][0];
            } else if (steeled + containers[i][0] > maxNumOfContainers) {
                let toBeSteeled = Math.abs(maxNumOfContainers - steeled);
                steeledVal += (maxNumOfContainers - steeled) * containers[i][1];
                steeled += toBeSteeled
            }
        }
    }
    console.log(steeledVal);
})
