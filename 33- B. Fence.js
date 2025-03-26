input = "";
process.stdin.on("data", (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data;
})

process.stdin.on("end", () => {

    let [nums, fence] = input.split("\n");
    let [n, m] = nums.split(" ").map(Number);
    let fence_to_nums = fence.split(" ").map(Number);
    let min_sum_index_start = 0;
    let window = 0;
    let min_sum = fence_to_nums.reduce((previousValue, currentValue, index, array) => {
        if (index < m) {
            window = previousValue + currentValue
            return window;
        } else if (index >= m) {
            window = window - array[index - m ] + currentValue;
            if (window < previousValue) {
                previousValue = window;
                min_sum_index_start = index - m + 1;
                return window;
            } else return previousValue;
        }
    }, 0)
    console.log(min_sum_index_start + 1);
})
/*
12 1
656 54 5 3 2 445 24
*/