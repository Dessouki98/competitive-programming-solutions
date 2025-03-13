let input = "";
process.stdin.on("data", (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data.toString()
})

process.stdin.on("end", () => {
    let [nm, lanterns] = input.split("\n");
    let [n, distance] = nm.split(" ").map(Number);
    lanterns = lanterns.split(" ").map(Number);
    lanterns.sort((a, b) => a - b)
    let uniqueArr = [...new Set(lanterns)];
    let maxSpace = uniqueArr.reduce((previousValueIsACC, currentValue, currentIndex, array) => {
        if (currentIndex === 0) return 0;
        return previousValueIsACC = previousValueIsACC > currentValue - array[currentIndex - 1]
            ? previousValueIsACC
            : currentValue - array[currentIndex - 1];
    }, 0) / 2;
    // now we have the max distance between any two lamp, each one covers the same dist so we can get it by /"
    let distFromBegin = uniqueArr[0];
    let distFromEnd = distance - uniqueArr[uniqueArr.length - 1];
    console.log(Math.max(distFromBegin, distFromEnd, maxSpace));
})
