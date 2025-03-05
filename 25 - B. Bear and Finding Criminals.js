let input = "";
process.stdin.on("data", (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data.toString()
})

process.stdin.on("end", () => {
    let [nums, arr] = input.split("\n").map(x => x.trim());
    let enemies = Array(...arr).filter(x => x !== " ").map(Number);
    let myPost = nums.split(" ").pop() - 1;
    console.log(howManyCriminalsToCatch(enemies, myPost));
})
const howManyCriminalsToCatch = (enemiesPositions, myPost) => {
    let num_of_crim = enemiesPositions[myPost] === 1 ? 1 : 0;
    let d = Math.max(enemiesPositions.length - myPost - 1, myPost);
    for (let i = 1; i <= d; i++) {
        if (enemiesPositions[myPost - i] + enemiesPositions[myPost + i] === 2) {
            num_of_crim += 2;
        } else if (enemiesPositions[myPost - i] === undefined && enemiesPositions[myPost + i]) {
            num_of_crim++;
        } else if (enemiesPositions[myPost + i] === undefined && enemiesPositions[myPost - i]) {
            num_of_crim++;
        }

    }
    return num_of_crim;
}
