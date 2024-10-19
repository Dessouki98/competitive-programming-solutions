let input = '';
let lines;
process.stdin.on('data', (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data;
});

process.stdin.on('end', () => {
    lines = input.trim().split("\n").pop().split(" ").map(Number)
    let ser = 0
    let dim = 0
    while (lines.length) {
        ser += getmax(lines[0], lines[lines.length - 1]);
        dim += getmax(lines[0], lines[lines.length - 1]);
    }
    console.log(ser, dim)
});

function getmax(a, z) {

    if (a > z) {
        return lines.shift() | 0;
    } else {
        return lines.pop() | 0;
    }

}
