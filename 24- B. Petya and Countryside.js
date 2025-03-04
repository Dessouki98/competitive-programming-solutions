let input = "";
process.stdin.on("data", (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data.toString()
})

process.stdin.on("end", () => {
    let arr = input.split("\n")[1].split(" ").map(Number);
    let max = 1;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(SlicingWindow(i, arr), max)
    }
    console.log(max);
})
const SlicingWindow = (index, arr) => {
    if (index >= arr.length || index < 0) {
        return 0;
    }
    let target = arr[index];
    let right = 0;
    for (let i = index + 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            break;
        }
        right++;
    }
    let left = 0;
    for (let i = index - 1; i > -1; i--) {
        if (arr[i] > arr[i + 1]) {
            break;
        }
        left++;
    }
    return left + right + 1;
}