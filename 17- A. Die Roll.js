let input = ""
process.stdin.on("data", (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data

})
process.stdin.on("end", () => {
    let [y, w] = input.toString().trim().replace(/\r/g, "").split(" ").map(Number)
    let numerator = ((7 - Math.max(y, w)))
    let denominator = 6
    let gcdC = gcd(numerator,denominator)
    let frac = `${numerator/gcdC}/${denominator/gcdC}`
    console.log(frac);
})
let gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b)
}